require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const analyticsRoutes = require('./routes/analytics');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
