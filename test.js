require('dotenv').config({ path: 'config.env' });
const mongoose = require('mongoose');
const Page = require('./models/Page');

mongoose.connect(process.env.ATLAS_URI)
  .then(async () => {
    const page = await Page.findOne({ title: 'home' });
    console.log('Found page:', page);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Connection error:', err);
  });
