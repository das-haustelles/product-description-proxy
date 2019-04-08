const mongoose = require('mongoose');
require('../index.js');

const settingsSchema = new mongoose.Schema({
  language: String,
  currency: String,
});
const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
