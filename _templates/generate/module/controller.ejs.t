---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.controller.js
---
const <%= h.inflection.camelize(name, true) %>Service = require('./<%= h.inflection.camelize(name, true) %>.service')

module.exports = {
  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  get<%= h.inflection.camelize(name) %>: async (req, res) => {
    return await <%= h.inflection.camelize(name, true) %>Service.list(req.query)
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  get<%= h.inflection.camelize(name) %>s: async (req, res) => {
    return await <%= h.inflection.camelize(name, true) %>Service.getById(req.params.id)
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  create<%= h.inflection.camelize(name) %>: async (req, res) => {
    return await <%= h.inflection.camelize(name, true) %>Service.create(req.body)
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  delete<%= h.inflection.camelize(name) %>: async (req, res) => {
    return await <%= h.inflection.camelize(name, true) %>Service.delete(req.params.id)
  },
}
