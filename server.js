require('dotenv').config({ path: 'config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const translateRoute = require('./routes/translate');
const pageRoute = require('./routes/pagesRoutes');

app.use('/api/translate', translateRoute);
app.use('/api/pages', pageRoute);

//Health check  
app.get('/', (req, res) => {
  console.log('Root route registered');
  res.send('Server is up');
});



// MongoDB Connection
mongoose.connect(process.env.ATLAS_URI) .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err.message));

  mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is open');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

