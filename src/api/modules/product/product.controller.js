const ApiError = require('@/api/helpers/ApiError')
const productService = require('./product.service')

module.exports = {
  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  getProducts: async (req, res, next) => {
    // next(ApiError.badRequest('qiam'))
    return res.json({
      success: true,
      code: 200,
      result: await productService.list(req.query),
    })
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  getProduct: async (req, res) => {
    const product = await productService.getById(req.params.id)
    if (!product) throw ApiError.badRequest(`Cannot found Product with id:${req.params.id}`)
    return res.json({
      success: true,
      code: 200,
      result: product,
    })
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  createProduct: async (req, res) => {
    res.json({ result: await productService.create(req.body) })
  },

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  deleteProduct: async (req, res) => {
    return res.json({
      success: true,
      result: (await productService.delete(req.params.id)) && true,
    })
  },
}
