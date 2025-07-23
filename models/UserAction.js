const mongoose = require('mongoose');

const userActionSchema = new mongoose.Schema({
    zodiacName: String,
    actionType: String, // e.g., "clicked"
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserAction', userActionSchema);
