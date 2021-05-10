const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const auth = require('../middleware/auth');
const { addProductValidator } = require('../middleware/validations');
const { productService } = require('../services');

// CREATE PRODUCTS
router.post('/', auth('createAny', 'product'), addProductValidator, productController.addProduct)

// GET, UPDATE, DELETE by ID
router.route('/product/:id')
  .get(productController.getProductById)
  .patch(auth('updateAny', 'product'), productController.updateProductById)
  .delete(auth('deleteAny', 'product'), productController.deleteProductById)

// GET ALL PRODUCTS
router.get('/all', productController.getAllProducts)

// GET W/ PRODUCT FILTERS
router.post('/paginate/all', productController.paginateProducts)

module.exports = router;