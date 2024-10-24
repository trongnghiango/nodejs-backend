const { format, createLogger, transports } = require('winston')

const { timestamp, combine, errors, json } = format

/**
 * Logger for Prod
 * @returns {winston.Logger}
 */
function buildProdLogger() {
  /**
   * @type {winston.Logger}
   */
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  })
}

module.exports = buildProdLogger
