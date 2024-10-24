const { Schema, model } = require('mongoose')

/**
 * @typedef {Object} Product
 * @property {string} name - Tên
 */

/**
 * @type {import('mongoose').Model<Product>}
 */
const productSchema = new Schema(
  {
    name: { type: String },
    description: { type: String, default: '' },
    removed: { type: Schema.Types.Boolean, default: false },
  },
  { timestamps: true }
)

// productSchema.index({ name: "text" }, { weights: { name: 2 } });

module.exports.ProductModel = model('Product', productSchema)
