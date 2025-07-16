const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/todo-app'; // replace with your URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

