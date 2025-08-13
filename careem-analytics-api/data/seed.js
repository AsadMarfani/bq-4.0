const mongoose = require('mongoose');
require('dotenv').config();
const Rider = require('../models/Rider');
const Captain = require('../models/Captain');
const Ride = require('../models/Ride');
const connectDB = require('../config/db');

const seed = async () => {
  await connectDB();

  await Rider.deleteMany();
  await Captain.deleteMany();
  await Ride.deleteMany();

  const riders = await Rider.insertMany([
    { name: 'Ali', phone: '123', rating: 4.8, totalRides: 5 },
    { name: 'Sara', phone: '456', rating: 4.5, totalRides: 3 }
  ]);

  const captains = await Captain.insertMany([
    { name: 'Ahmed', city: 'Karachi', vehicleType: 'car', rating: 4.9, totalRides: 50, earnings: 20000 },
    { name: 'Zara', city: 'Lahore', vehicleType: 'bike', rating: 4.6, totalRides: 40, earnings: 15000 }
  ]);

  const rides = await Ride.insertMany([
    {
      riderId: riders[0]._id,
      captainId: captains[0]._id,
      city: 'Karachi',
      fare: 500,
      pickupArea: 'DHA',
      pickupTime: new Date("2023-08-01T08:00:00"),
      dropoffTime: new Date("2023-08-01T08:30:00"),
      type: 'ride',
      status: 'completed',
      rating: 5
    },
    {
      riderId: riders[1]._id,
      captainId: captains[1]._id,
      city: 'Lahore',
      fare: 300,
      pickupArea: 'Gulberg',
      pickupTime: new Date("2023-08-02T10:00:00"),
      dropoffTime: new Date("2023-08-02T10:25:00"),
      type: 'delivery',
      status: 'completed',
      rating: 4
    },
    {
      riderId: riders[1]._id,
      captainId: captains[1]._id,
      city: 'Lahore',
      fare: 300,
      pickupArea: 'Gulberg',
      pickupTime: new Date("2023-08-02T10:00:00"),
      dropoffTime: new Date("2023-08-02T10:25:00"),
      type: 'delivery',
      status: 'completed',
      rating: 4
    }
  ]);

  console.log('Seed data inserted');
  process.exit();
};

seed();
