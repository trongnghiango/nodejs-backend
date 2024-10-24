const config = require('@/config')
const buildDevLogger = require('./dev-logger')
const buildProdLogger = require('./pro-logger')

module.exports = config.env === 'production' ? buildProdLogger() : buildDevLogger()
