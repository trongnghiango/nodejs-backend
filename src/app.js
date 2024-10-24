require('dotenv').config({ path: './env/.env.development' })
require('dotenv').config({ path: './env/.env.development' })
require('@/database/mongo')

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const httpStatus = require('http-status-codes')
// const config = require('./config')
// const { createUser } = require('./tests/define-jsdoc')
const ApiError = require('./api/helpers/ApiError')
const { errorConverter, errorHandler } = require('./api/middlewares/error')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/v1', require('./api/routes'))

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(ApiError.notFound())
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

module.exports = app
