const express = require('express');
const router = express.Router();
const {
  totalRidesPerCity,
  topCaptains,
  avgDeliveryTimeByArea
} = require('../controllers/analyticsController');

router.get('/rides-per-city', totalRidesPerCity);
router.get('/top-captains', topCaptains);
router.get('/avg-delivery-time', avgDeliveryTimeByArea);

module.exports = router;
