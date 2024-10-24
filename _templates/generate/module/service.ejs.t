---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.service.js
---
const { <%= h.inflection.camelize(name) %>Model } = require('./<%= h.inflection.camelize(name, true) %>.model')

class <%= h.inflection.camelize(name) %>Service {
  static async list(payload) {
    return await <%= h.inflection.camelize(name) %>Model.find(payload)
  }

  static async getById(id) {
    return await <%= h.inflection.camelize(name) %>Model.findOne(id)
  }

  static async create(payload) {
    return await <%= h.inflection.camelize(name) %>Model.create(payload)
  }

  static async delete(id) {
    const filter = { _id: id } // Điều kiện tìm kiếm theo ID
    const update = { removed: true }
    const updatedModel = await <%= h.inflection.camelize(name) %>Model.findOneAndUpdate(filter, update, {
      new: true, // Trả về tài liệu đã cập nhật
      runValidators: true, // Chạy các validator trước khi cập nhật
    })
    return updatedModel
  }
}

module.exports = <%= h.inflection.camelize(name) %>Service
