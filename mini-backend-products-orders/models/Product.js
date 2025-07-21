const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);
