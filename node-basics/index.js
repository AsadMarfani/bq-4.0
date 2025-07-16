const express = require('express');
require('./db/index');          // ⬅️  keeps your existing Mongoose connection
const User = require('./models/user');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------- READ ALL ---------- */
app.get('/users', async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

/* ---------- READ ONE ---------- */
app.get('/users/:id/:name', async (req, res) => {
  try {
    console.log(req.query.id);
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

/* ---------- UPDATE ---------- */
app.put('/users/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------- DELETE ---------- */
app.delete('/users/:id', async (req, res) => {
  try {
    const removed = await User.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

/* ---------- START SERVER ---------- */
app.listen(4000, () => console.log('Server running on port 4000'));
