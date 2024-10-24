const ApiError = require('@/api/helpers/ApiError')
const { ProductModel } = require('./product.model')

class ProductService {
  static async list(payload = {}) {
    const filter = { ...payload, removed: false || undefined || null }
    return await ProductModel.find(filter)
  }

  static async getById(id) {
    const product = await ProductModel.findOne({ _id: id, removed: false })
    if (!product) throw ApiError.badRequest(`Not found product with id:"${id}"`)
    return product
  }

  static async updata(id, payload) {
    const filter = { _id: id } // Điều kiện tìm kiếm theo ID
    const update = { ...payload }
    const updatedModel = await ProductModel.findOneAndUpdate(filter, update, {
      new: true, // Trả về tài liệu đã cập nhật
      runValidators: true, // Chạy các validator trước khi cập nhật
    })
    return updatedModel
  }

  static async create(payload) {
    return await ProductModel.create(payload)
  }

  static async delete(id) {
    const filter = { _id: id } // Điều kiện tìm kiếm theo ID
    const update = { removed: true }
    const removedModel = await ProductModel.findOneAndUpdate(
      filter,
      { ...update },
      {
        new: true, // Trả về tài liệu đã cập nhật
        runValidators: true, // Chạy các validator trước khi cập nhật
      }
    )
    return removedModel
  }
}

module.exports = ProductService
