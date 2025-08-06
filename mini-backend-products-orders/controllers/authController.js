const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user' // ✅ allow optional role
    });

    const token = generateToken(user._id, user.role);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = generateToken(user._id, user.role);
    res.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getAllUsers = async (req, res) => {
  const users = await User.find({}, '-password'); // exclude password
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id, '-password');
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Allow user to access only their own profile or admin
  if (req.user.role !== 'admin' && req.user.id !== user._id.toString()) {
    return res.status(403).json({ error: 'Access denied' });
  }

  res.json(user);
};

exports.updateUserRole = async (req, res) => {
  const { role } = req.body;
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  );
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  console.log(req.params.id);
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

