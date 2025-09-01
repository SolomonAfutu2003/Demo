const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
  originalText: String,
  translatedText: String,
  language: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Translation', translationSchema);
