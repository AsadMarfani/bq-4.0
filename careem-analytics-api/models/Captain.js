const mongoose = require('mongoose');

const CaptainSchema = new mongoose.Schema({
  name: String,
  city: String,
  vehicleType: String,
  rating: Number,
  totalRides: Number,
  earnings: Number
}, { timestamps: true });

module.exports = mongoose.model('Captain', CaptainSchema);
