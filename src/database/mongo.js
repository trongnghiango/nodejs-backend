const mongoose = require('mongoose')

const uriString = `mongodb+srv://test:${encodeURIComponent(
  'Test@1234'
)}@cluster.qinev.mongodb.net/?retryWrites=true&w=majority`

class Database {
  constructor() {
    this.connect()
  }

  // eslint-disable-next-line class-methods-use-this
  connect() {
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(uriString, { maxPoolSize: 50 })
      // eslint-disable-next-line no-console
      .then(() => console.info(`Connected MongoDb.`))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(`Error Connect Mongo:: ${err.message}`))
  }

  static getInstance() {
    if (!Database._instance) {
      Database._instance = new Database()
    }

    return Database._instance
  }
}

const dbInstance = new Database()
module.exports = dbInstance
