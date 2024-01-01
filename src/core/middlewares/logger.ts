import { CustomError } from '@utils/CustomError';
import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf, prettyPrint } = format;

const formatLog = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = (error: CustomError) => {
    const log = createLogger({
        level: 'error',
        format: combine(
            label({ label: error.name }),
            timestamp(),
            prettyPrint()
          ),
        transports: [
            new transports.File({ filename: 'logs/combined.log' }),
            new transports.Console()
        ]
    });
    log.error({
        timestamp: new Date().toISOString(),
        code: error.errorCode,
        // type: error.name,
        url: error.stack,
        message: error.detail
    })
}

export default logger

// const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
//     logger.error(err.stack);
//     res.status(500).json({
//         status: 500,
//         source: { stack: err.stack },
//         type: 'Internal Server Error',
//         detail: err.message
//     })
// }

// export default errorHandler;

// const logger = winston.createLogger({
//     level: "error",
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: "logs/combined.log" })
//     ]
// })
