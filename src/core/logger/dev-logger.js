const { format, createLogger, transports } = require('winston')

const { combine, printf, errors } = format

/**
 * Logger for Dev
 * @returns {winston.Logger}
 */
function buildDevLogger() {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`
  })

  /**
   * @type {winston.Logger}
   */
  return createLogger({
    format: combine(
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  })
}

module.exports = buildDevLogger
