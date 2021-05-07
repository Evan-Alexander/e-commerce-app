const { productService } = require('../services');
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');

const productController = {
  async addProduct(req, res, next) {
    try {
      const product = await productService.addProduct(req.body);
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = productController;