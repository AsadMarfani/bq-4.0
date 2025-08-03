const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { productSchema } = require('../validators/product');
const validate = require('../middlewares/validate');
const upload = require('../middlewares/upload');


router.post('/', upload.single('image'), validate(productSchema), createProduct);

router.get('/', getProducts);

module.exports = router;
