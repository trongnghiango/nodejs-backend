const { ProductModel } = require('./product.model')

class ProductRepo {
  constructor(model) {
    this.model = model
  }
}

const productRepo = new ProductRepo(ProductModel)

module.exports = productRepo
