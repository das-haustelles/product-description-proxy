const mongoose = require('mongoose');
require('../index.js');

const locationSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  address: String,
  badges: String,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
