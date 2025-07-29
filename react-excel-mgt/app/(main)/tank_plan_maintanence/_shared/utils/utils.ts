import { addMonths } from 'date-fns';
import type { DateRange } from 'react-day-picker';

export function getDefaultDateRange(): DateRange {
  const end = new Date();
  const start = addMonths(end, -3);
  return { from: start, to: end };
}

export class DateUtils {
  private static readonly DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

  static format(dateStr: string): string {
    if (!dateStr) return '';

    try {
      // 如果已经是YYYY-MM-DD格式，直接返回
      if (this.isValidDateFormat(dateStr)) {
        return dateStr;
      }

      // 处理Excel数值日期
      if (this.isExcelSerialNumber(dateStr)) {
        const excelNumber = Number(dateStr);
        // 直接计算绝对日期，避开时区问题
        const baseDate = new Date(1900, 0, 1); // Excel基准日
        const targetDate = new Date(baseDate);
        targetDate.setDate(baseDate.getDate() + excelNumber - 2); // Excel有1900年闰年bug需要-1，再-1是因为Excel从1日开始

        const year = targetDate.getFullYear();
        const month = String(targetDate.getMonth() + 1).padStart(2, '0');
        const day = String(targetDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
      }

      // 尝试解析为日期
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return '';

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    } catch {
      return '';
    }
  }

  static isValidDateFormat(dateStr: string): boolean {
    return this.DATE_REGEX.test(dateStr);
  }

  static validateDate(value: string, fieldName: string): string | null {
    if (!value) return null;
    if (!this.isValidDateFormat(value)) {
      return `${fieldName} must be in YYYY-MM-DD format`;
    }
    // 如果格式已经是YYYY-MM-DD，则直接认为有效，不需要用Date对象验证
    return null;
  }

  private static isExcelSerialNumber(dateStr: string): boolean {
    const num = Number(dateStr);
    return !isNaN(num) && num > 0;
  }

  // 下面这些方法保留以兼容现有代码，但实现已集成到format方法中

  private static formatExcelDate(serialNumber: string): string {
    return this.format(serialNumber);
  }

  private static formatStringDate(dateStr: string): string {
    return this.format(dateStr);
  }

  private static formatToISODate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}

export class DataUtils {
  static cleanString(value: unknown): string | null {
    if (
      value === null ||
      value === undefined ||
      value === 'NULL' ||
      value === 'TBD'
    ) {
      return null;
    }
    return String(value).trim();
  }

  static cleanNumber(value: unknown): number | null {
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value === 'NULL' ||
      value === 'TBD'
    ) {
      return null;
    }

    const stringValue = String(value).trim().replace(/,/g, '');
    const numValue = Number(stringValue);
    return isNaN(numValue) ? null : numValue;
  }

  static cleanObject<T>(obj: Record<string, unknown>): T {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const cleanedValue = this.cleanString(value);
      return {
        ...acc,
        [key]: cleanedValue,
      };
    }, {} as T);
  }

  static isEmptyObject(obj: unknown): boolean {
    return (
      obj !== null && typeof obj === 'object' && Object.keys(obj).length === 0
    );
  }
}

export class StringUtils {
  static truncate(text: string, maxLength: number = 8): string {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength)}..` : text;
  }

  static capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
