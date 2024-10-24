// config/index.js

const dotenv = require('dotenv')
// const assert = require('assert');

dotenv.config({ path: './env/.env' })
dotenv.config({ path: './env/.env.development' })

const development = require('./development')
const production = require('./production')

const config = { development, production }
const key = process.env.NODE_ENV || 'development'

module.exports = config[key]
