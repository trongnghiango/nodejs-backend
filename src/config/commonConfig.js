const { NODE_ENV, PORT, HOST, HOST_URL } = process.env
module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  env: NODE_ENV,
}
