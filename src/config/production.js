const commonConfig = require('./commonConfig')

module.exports = {
  ...commonConfig,
  port: process.env.PRO_APP_PORT,
  host: process.env.PRO_APP_HOST,
  db: {
    host: process.env.PRO_MONGO_HOST,
    database: process.env.PRO_MONGO_DATABASE,
    user: process.env.PRO_MONGO_USER,
    password: process.env.PRO_MONGO_PASSWORD,
    options: {
      debug: false,
    },
  },
}
