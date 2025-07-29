interface SQLBuilderConfig<T> {
  tableName: string;
  columns: (keyof T)[];
  typeMap?: Partial<Record<keyof T, 'string' | 'number' | 'boolean' | 'date'>>;
}

export class SQLBuilder<T extends Record<string, any>> {
  private config: SQLBuilderConfig<T>;

  constructor(config: SQLBuilderConfig<T>) {
    this.config = config;
  }

  private formatValue(key: keyof T, value: any): string {
    const type = this.config.typeMap?.[key] || 'string';

    if (value === null || value === undefined || value === '') {
      return 'NULL';
    }

    switch (type) {
      case 'number':
        return isNaN(Number(value)) ? 'NULL' : String(value);
      case 'boolean':
        return value ? '1' : '0';
      case 'date':
        try {
          if (value instanceof Date) {
            return `'${value.toISOString().split('T')[0]}'`;
          }

          if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return `'${value}'`;
          }

          const date = new Date(value);
          if (!isNaN(date.getTime())) {
            return `'${date.toISOString().split('T')[0]}'`;
          }
          return 'NULL';
        } catch {
          return 'NULL';
        }
      default:
        return `'${String(value).replace(/'/g, "''")}'`;
    }
  }

  buildBulkInsert(records: T[]): string[] {
    const batchSize = 100;
    const batches: T[][] = [];

    for (let i = 0; i < records.length; i += batchSize) {
      batches.push(records.slice(i, i + batchSize));
    }

    return batches.map(batch => {
      const columns = this.config.columns.join(', ');
      const values = batch
        .map(record => {
          const rowValues = this.config.columns
            .map(col => this.formatValue(col, record[col]))
            .join(', ');
          return `(${rowValues})`;
        })
        .join(',\n');

      return `INSERT INTO ${this.config.tableName} (${columns}) VALUES\n${values}`;
    });
  }

  buildBulkUpdate(records: T[], keyField: keyof T): string[] {
    return records.map(record => {
      const setClause = this.config.columns
        .filter(col => col !== keyField)
        .map(col => `${String(col)} = ${this.formatValue(col, record[col])}`)
        .join(', ');

      return `UPDATE ${this.config.tableName} 
              SET ${setClause} 
              WHERE ${String(keyField)} = ${this.formatValue(keyField, record[keyField])}`;
    });
  }
}
