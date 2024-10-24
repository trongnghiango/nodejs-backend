const commonConfig = require('./commonConfig')

module.exports = {
  ...commonConfig,
  port: process.env.PORT,
  host: process.env.HOST,
  db: {
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    options: {
      debug: true,
    },
  },
}
