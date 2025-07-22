const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { productSchema } = require('../validators/product');
const validate = require('../middlewares/validate');

router.post('/', validate(productSchema), createProduct);
router.get('/', getProducts);

module.exports = router;
