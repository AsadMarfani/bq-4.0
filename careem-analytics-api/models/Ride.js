const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rider' },
  captainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Captain' },
  city: String,
  fare: Number,
  pickupArea: String,
  pickupTime: Date,
  dropoffTime: Date,
  type: String,
  status: String,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Ride', RideSchema);
