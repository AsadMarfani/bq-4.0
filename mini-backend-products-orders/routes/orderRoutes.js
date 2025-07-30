const express = require('express');
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus
} = require('../controllers/orderController');

const authenticateUser = require('../middlewares/authMiddleware');

// router.use(authenticateUser); // Apply authentication middleware to all routes in this file

router.post('/', authenticateUser, createOrder);
router.get('/', authenticateUser, getMyOrders);
router.get('/:id', authenticateUser, getOrderById);
router.patch('/:id/status', updateOrderStatus);

module.exports = router;
