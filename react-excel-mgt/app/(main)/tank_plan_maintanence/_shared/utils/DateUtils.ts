export const DateUtils = {
  isValidDate(dateString: string): boolean {
    if (!dateString) return false;
    return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
  },

  format(date: string | Date | null | undefined): string {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        // 如果已经是YYYY-MM-DD格式，直接返回
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
          return date;
        }
        // 尝试解析日期字符串
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) return '';
        return this.extractDateParts(parsedDate);
      }
      // Date对象
      if (isNaN(date.getTime())) return '';
      return this.extractDateParts(date);
    } catch {
      return '';
    }
  },

  parse(dateString: string): Date | null {
    if (!dateString) return null;
    try {
      if (this.isValidDate(dateString)) {
        // 如果是YYYY-MM-DD格式，创建不受时区影响的日期
        const [year, month, day] = dateString.split('-').map(Number);
        // 月份需要减1，因为JS中月份从0开始
        return new Date(Date.UTC(year, month - 1, day));
      }
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    } catch {
      return null;
    }
  },

  validateDate(value: string, columnName: string): string | null {
    if (!value) return null;
    if (!this.isValidDate(value)) {
      return `${columnName} must be a valid date (YYYY-MM-DD)`;
    }
    return null;
  },

  formatToDateTime(date: Date | string): string {
    if (typeof date === 'string') {
      if (this.isValidDate(date)) {
        return `${date} 00:00`;
      }
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) return '';
      return `${this.extractDateParts(parsedDate)} ${this.extractTimeParts(parsedDate)}`;
    }
    if (isNaN(date.getTime())) return '';
    return `${this.extractDateParts(date)} ${this.extractTimeParts(date)}`;
  },

  formatToYYYYMMDD(value: Date | string | number): string {
    // 处理空值
    if (value === null || value === undefined || value === '') {
      return '';
    }

    // 处理Excel数值格式日期
    if (
      typeof value === 'number' ||
      (typeof value === 'string' && !isNaN(Number(value)))
    ) {
      // 处理Excel空日期值（0或接近0的值）
      const excelNumber = Number(value);
      if (excelNumber < 1) {
        return '';
      }

      // 转换Excel序列号为日期字符串
      const baseDate = new Date(1900, 0, 1); // Excel基准日
      const targetDate = new Date(baseDate);
      targetDate.setDate(baseDate.getDate() + excelNumber - 2); // Excel有1900年闰年bug需要-1，再-1是因为Excel从1日开始

      const year = targetDate.getFullYear();
      const month = String(targetDate.getMonth() + 1).padStart(2, '0');
      const day = String(targetDate.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    }

    // 处理字符串
    if (typeof value === 'string') {
      // 如果已经是YYYY-MM-DD格式，直接返回
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
      }
      try {
        const parsedDate = new Date(value);
        if (isNaN(parsedDate.getTime())) return '';
        return this.extractDateParts(parsedDate);
      } catch {
        return '';
      }
    }

    // 处理Date对象
    if (value instanceof Date) {
      return this.extractDateParts(value);
    }

    return '';
  },

  // 已废弃，请使用formatToYYYYMMDD替代
  formatExcelDate(excelDate: number): string {
    return this.formatToYYYYMMDD(excelDate);
  },

  // 辅助方法：从Date提取年月日
  extractDateParts(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 辅助方法：从Date提取时分
  extractTimeParts(date: Date): string {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  },
};
