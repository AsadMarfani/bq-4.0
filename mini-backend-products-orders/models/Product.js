const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, text: true },
  category: { type: String, required: true },
  brand: { type: String },
  description: { type: String, text: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Product', productSchema);
