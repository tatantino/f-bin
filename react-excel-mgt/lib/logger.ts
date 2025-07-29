export enum LogLevel {
  NONE = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5,
}

export type LogContext = {
  module?: string;
  function?: string;
  requestId?: string;
  [key: string]: any;
};

class Logger {
  private debugLevel: LogLevel;
  private static instance: Logger;
  private groupLevel: number = 0;
  private readonly MAX_STRING_LENGTH = 1000;

  private constructor() {
    this.debugLevel = Number(
      process.env.NEXT_PUBLIC_DEBUG_LEVEL || LogLevel.NONE
    );
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private shouldLog(level: LogLevel): boolean {
    return this.debugLevel >= level;
  }

  error(message: string, context?: LogContext, data?: any) {
    this.logWithLevel(LogLevel.ERROR, 'ERROR', message, context, data);
  }

  warn(message: string, context?: LogContext, data?: any) {
    this.logWithLevel(LogLevel.WARN, 'WARN', message, context, data);
  }

  info(message: string, context?: LogContext, data?: any) {
    this.logWithLevel(LogLevel.INFO, 'INFO', message, context, data);
  }

  debug(message: string, context?: LogContext, data?: any) {
    this.logWithLevel(LogLevel.DEBUG, 'DEBUG', message, context, data);
  }

  trace(message: string, context?: LogContext, data?: any) {
    this.logWithLevel(LogLevel.TRACE, 'TRACE', message, context, data);
  }

  group(name: string, context?: LogContext, level: LogLevel = LogLevel.DEBUG) {
    if (this.shouldLog(level)) {
      console.group(this.formatMessage(LogLevel[level], name, context));
      this.groupLevel++;
    }
  }

  groupEnd(level: LogLevel = LogLevel.DEBUG) {
    if (this.shouldLog(level)) {
      console.groupEnd();
      this.groupLevel = Math.max(0, this.groupLevel - 1);
    }
  }

  startTimer(label: string) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.time(label);
    }
  }

  endTimer(label: string) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.timeEnd(label);
    }
  }

  private formatMessage(
    level: string,
    message: string,
    context?: LogContext,
    data?: any
  ): string {
    const timestamp = new Date().toISOString();
    const indent = '  '.repeat(this.groupLevel);

    const parts = [
      `${indent}${timestamp.split('T')[1].split('.')[0]}`,
      level.padEnd(5),
    ];

    if (context) {
      const contextParts = [];
      if (context.module) contextParts.push(context.module);
      if (context.function) contextParts.push(context.function);
      if (contextParts.length > 0) {
        parts.push(`[${contextParts.join('/')}]`);
      }

      if (this.debugLevel >= LogLevel.DEBUG && context.requestId) {
        parts.push(`(${context.requestId.slice(0, 6)})`);
      }
    }

    parts.push(message);
    let formattedMessage = parts.join(' ');

    if (data) {
      const formattedData = this.formatData(data);
      if (formattedData) {
        formattedMessage += `\n${indent}  ${formattedData}`;
      }
    }

    return formattedMessage;
  }

  private formatData(data: any): string {
    try {
      if (data.error instanceof Error) {
        const stack = data.error.stack?.split('\n')[1]?.trim();
        return `${data.error.message}${stack ? ` (${stack})` : ''}`;
      }

      const simplified = { ...data };

      ['timestamp', 'stage', 'requestId'].forEach(key => {
        delete simplified[key];
      });

      if (JSON.stringify(simplified).length > this.MAX_STRING_LENGTH) {
        const keys = Object.keys(simplified);
        return `Large object with keys: ${keys.join(', ')}`;
      }

      return JSON.stringify(simplified);
    } catch {
      return String(data);
    }
  }

  private logWithLevel(
    level: LogLevel,
    levelName: string,
    message: string,
    context?: LogContext,
    data?: any
  ) {
    if (this.shouldLog(level)) {
      const formattedMessage = this.formatMessage(
        levelName,
        message,
        context,
        data
      );
      switch (level) {
        case LogLevel.ERROR:
          console.error(formattedMessage);
          break;
        case LogLevel.WARN:
          console.warn(formattedMessage);
          break;
        case LogLevel.INFO:
          console.info(formattedMessage);
          break;
        case LogLevel.DEBUG:
        case LogLevel.TRACE:
          console.log(formattedMessage);
          break;
      }
    }
  }
}

export const logger = Logger.getInstance();
