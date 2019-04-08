const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  country: String,
  gender: String,
  age: Number,
  travelExperience: String,
  totalReviews: Number,
  reviews: [],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
