const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    console.log(req.body)
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate('products.productId');
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('products.productId');
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ) // ✅ updated path

    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

