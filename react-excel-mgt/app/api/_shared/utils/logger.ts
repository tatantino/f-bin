import {
  createLogger,
  format,
  transports,
  Logger as WinstonLogger,
} from 'winston';

class Logger {
  private static instance: Logger;
  private logger: WinstonLogger;

  private constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
      ),
      transports: [new transports.Console()],
    });
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info(message: string, meta?: object) {
    this.logger.info(message, meta);
  }

  warn(message: string, meta?: object) {
    this.logger.warn(message, meta);
  }

  error(message: string, meta?: object) {
    this.logger.error(message, meta);
  }

  debug(message: string, meta?: object) {
    this.logger.debug(message, meta);
  }

  setService(service: string) {
    this.logger.defaultMeta = { service };
  }
}

const logger = Logger.getInstance();
export default logger;
