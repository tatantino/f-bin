import { read, utils, write, type WorkSheet } from 'xlsx';
import { logger } from '@/lib/logger';
import { DateUtils } from './DateUtils';
import { DataUtils } from './utils';
import { DATE_COLUMNS } from '../config/config';
import { json } from 'stream/consumers';

export type ProcessingErrorCode =
  | 'MISSING_HEADERS'
  | 'MISSING_COLUMNS'
  | 'INVALID_SHEET'
  | 'EMPTY_FILE'
  | 'ROW_ERROR';

export class ExcelProcessingError extends Error {
  constructor(
    message: string,
    public code: ProcessingErrorCode
  ) {
    super(message);
    this.name = 'ExcelProcessingError';
  }
}

export interface ExcelProcessResult<T> {
  data: T[];
  errors: string[];
}

export interface ExcelConfig<T> {
  sheetName?: string;
  requiredHeaders: string[];
  headerMap: Map<string, string>;
  processRow: (rawRow: Record<string, unknown>) => T;
  validateRow: (row: T, rowIndex: number) => string[];
  formatExport?: (data: T[]) => unknown[][];
}

export class ExcelProcessor<T> {
  private config: ExcelConfig<T>;

  constructor(config: ExcelConfig<T>) {
    this.config = {
      sheetName: 'sheet1',
      ...config,
    };
  }

  private validateWorksheet(worksheet: WorkSheet): string[] {
    const errors: string[] = [];

    try {
      const headers = utils.sheet_to_json(worksheet, {
        header: 1,
      })[0] as string[];

      if (!headers?.length) {
        throw new ExcelProcessingError(
          'Excel file is missing headers',
          'MISSING_HEADERS'
        );
      }

      const missingHeaders = this.config.requiredHeaders
        .filter(header => header.trim() !== '')
        .filter(header => !headers.includes(header));

      logger.info(`validateWorksheet ${missingHeaders}`);
      if (missingHeaders.length) {
        throw new ExcelProcessingError(
          `Excel file is missing required columns: ${missingHeaders.join(', ')}`,
          'MISSING_COLUMNS'
        );
      }
    } catch (error) {
      if (error instanceof ExcelProcessingError) {
        errors.push(error.message);
      } else {
        errors.push('Error validating worksheet structure');
      }
    }

    return errors;
  }

  private processValue(value: unknown, key: string): string | number | null {
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value === 'TBD'
    ) {
      const numberColumns = [
        'tank_life',
        'cold_idle',
        'repair_LT',
        'RTL_LT',
        'TL_LT',
        'region_seq',
      ];

      if (numberColumns.includes(key)) {
        return null;
      }
      return '';
    }

    const numberColumns = [
      'tank_life',
      'cold_idle',
      'repair_LT',
      'RTL_LT',
      'TL_LT',
      'region_seq',
    ];

    if (numberColumns.includes(key)) {
      const cleanValue = String(value).replace(/,/g, '');
      const numValue = Number(cleanValue);
      return isNaN(numValue) ? null : numValue;
    }

    if (DATE_COLUMNS.includes(key)) {
      return DateUtils.formatToYYYYMMDD(value as string | number);
    }

    return String(value);
  }

  private processRow(rawRow: Record<string, unknown>): T {
    const processedRow = {} as T;

    // 数值类型的列名集合
    const numberColumns = [
      'tank_life',
      'cold_idle',
      'repair_LT',
      'RTL_LT',
      'TL_LT',
      'region_seq',
    ];

    Object.entries(rawRow).forEach(([excelHeader, value]) => {
      const internalKey = this.config.headerMap.get(excelHeader);
      if (internalKey) {
        let processedValue;

        // 处理空值
        if (
          value === null ||
          value === undefined ||
          value === '' ||
          value === 'TBD'
        ) {
          if (numberColumns.includes(internalKey)) {
            processedValue = null;
          } else {
            processedValue = '';
          }
        } else if (numberColumns.includes(internalKey)) {
          // 对数值型字段使用 cleanNumber
          processedValue = DataUtils.cleanNumber(value);
        } else if (DATE_COLUMNS.includes(internalKey)) {
          // 日期处理
          processedValue = DateUtils.formatToYYYYMMDD(value as string | number);
        } else {
          // 其他字段使用 cleanString
          processedValue = DataUtils.cleanString(value);
        }

        (processedRow as any)[internalKey] = processedValue;
      }
    });

    return processedRow;
  }

  async processFile(file: File): Promise<ExcelProcessResult<T>> {
    const result: ExcelProcessResult<T> = { data: [], errors: [] };

    try {
      const workbook = read(await file.arrayBuffer());

      if (!workbook.SheetNames.includes(this.config.sheetName!)) {
        throw new ExcelProcessingError(
          `Excel file must contain ${this.config.sheetName} worksheet`,
          'INVALID_SHEET'
        );
      }

      const worksheet = workbook.Sheets[this.config.sheetName!];
      const worksheetErrors = this.validateWorksheet(worksheet);

      if (worksheetErrors.length) {
        return { ...result, errors: worksheetErrors };
      }

      const jsonData = utils.sheet_to_json(worksheet, {
        raw: false,
        defval: '',
      });

      if (!jsonData.length) {
        throw new ExcelProcessingError(
          'Excel file is empty or invalid',
          'EMPTY_FILE'
        );
      }

      for (let i = 0; i < jsonData.length; i++) {
        try {
          const rawRow = jsonData[i] as Record<string, unknown>;
          const cleanedRow =
            DataUtils.cleanObject<Record<string, unknown>>(rawRow);
          const processedRow = this.processRow(cleanedRow);
          const rowErrors = this.config.validateRow(processedRow, i);

          if (rowErrors.length === 0) {
            result.data.push(processedRow);
          } else {
            result.errors.push(...rowErrors);
          }
        } catch (error) {
          result.errors.push(
            `Error processing row ${i + 1}: ${error instanceof Error ? error.message : 'Unknown error'}`
          );
        }
      }

      return result;
    } catch (error) {
      if (error instanceof ExcelProcessingError) {
        throw error;
      }
      throw new Error(
        `Excel import failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  async exportToExcel(data: T[]): Promise<Blob> {
    try {
      const workbook = utils.book_new();

      const headers = Array.from(this.config.headerMap.keys());

      const rows = this.config.formatExport
        ? this.config.formatExport(data)
        : data.map(row => {
            return headers.map(header => {
              const key = this.config.headerMap.get(header);
              return key ? (row as any)[key] || '' : '';
            });
          });

      const wsData = [headers, ...rows];
      const worksheet = utils.aoa_to_sheet(wsData);

      const colWidths = headers.map(header => ({
        wch: Math.max(
          header.length,
          ...rows.map(row => String(row[headers.indexOf(header)] || '').length),
          15
        ),
      }));

      worksheet['!cols'] = colWidths;

      const range = utils.decode_range(worksheet['!ref'] || 'A1');
      for (let R = range.s.r; R <= range.e.r; R++) {
        for (let C = range.s.c; C <= range.e.c; C++) {
          const cell_address = utils.encode_cell({ r: R, c: C });
          const cell = worksheet[cell_address];

          if (!cell) continue;

          cell.s = {
            font: { name: 'Arial', sz: 11 },
            alignment: {
              vertical: 'center',
              horizontal: R === 0 ? 'center' : 'left',
              wrapText: true,
            },
            border: {
              top: { style: 'thin' },
              bottom: { style: 'thin' },
              left: { style: 'thin' },
              right: { style: 'thin' },
            },
          };

          if (R === 0) {
            cell.s = {
              ...cell.s,
              font: {
                name: 'Arial',
                sz: 11,
                bold: true,
                color: { rgb: '000000' },
              },
              fill: {
                fgColor: { rgb: 'F3F4F6' },
              },
            };
          }
        }
      }

      utils.book_append_sheet(workbook, worksheet, this.config.sheetName);

      const excelBuffer = write(workbook, {
        bookType: 'xlsx',
        type: 'array',
        cellStyles: true,
      });

      return new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
    } catch (error) {
      logger.error('Excel export failed', { error });
      throw new Error(
        `Excel export failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}
