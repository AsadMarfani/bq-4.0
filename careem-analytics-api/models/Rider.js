const mongoose = require('mongoose');

const RiderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  rating: Number,
  totalRides: Number
}, { timestamps: true });

module.exports = mongoose.model('Rider', RiderSchema);
