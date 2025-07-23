// models/Zodiac.js
const mongoose = require('mongoose');

const zodiacSchema = new mongoose.Schema({
  name: String,
  date: String,
  personality: String,
  element: String,
  planet: String,
  traits: [String],
  description: String
});

module.exports = mongoose.model('Zodiac', zodiacSchema);
