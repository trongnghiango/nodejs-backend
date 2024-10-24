const Joi = require('joi')

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().min(5).required(),
    description: Joi.string().required(),
  }),
}

const getProduct = {
  params: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
  }),
}

const getProductById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

const delProduct = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  delProduct,
}
