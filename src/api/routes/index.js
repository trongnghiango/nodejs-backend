const express = require('express')
const catchAsync = require('@/utils/catchAsync')
const productController = require('../modules/product/product.controller')
const validate = require('../middlewares/validate')
const {
  createProduct,
  getProduct,
  delProduct,
  getProductById,
} = require('../validations/product.validation')

const router = express.Router()

router.post('/product', validate(createProduct), catchAsync(productController.createProduct))
router.get('/products', validate(getProduct), catchAsync(productController.getProducts))
router.get('/products/:id', validate(getProductById), catchAsync(productController.getProduct))
router.delete('/products/:id', validate(delProduct), catchAsync(productController.deleteProduct))
module.exports = router
