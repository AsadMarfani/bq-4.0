const Ride = require('../models/Ride');

exports.totalRidesPerCity = async (req, res) => {
  const result = await Ride.aggregate([
    { $group: { _id: "$city", totalRides: { $sum: 1 } } },
    { $sort: { totalRides: -1 } }
  ]);
  res.json(result);
};

exports.topCaptains = async (req, res) => {
  const result = await Ride.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$captainId", totalEarnings: { $sum: "$fare" } } },
    { $sort: { totalEarnings: -1 } },
    { $limit: 5 }
  ]);
  res.json(result);
};

exports.avgDeliveryTimeByArea = async (req, res) => {
  const result = await Ride.aggregate([
    { $match: { type: "delivery" } },
    {
      $group: {
        _id: "$pickupArea",
        avgTimeMins: {
          $avg: { $divide: [{ $subtract: ["$dropoffTime", "$pickupTime"] }, 60000] }
        }
      }
    }
  ]);
  res.json(result);
};
