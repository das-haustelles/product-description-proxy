const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  id: Number,
  username: String,
  avgRating: Number,
  avgRatingWord: String,
  reviewText: String,
  reviewDate: Date,
  propertyReply: String,
  hostelName: String,
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;