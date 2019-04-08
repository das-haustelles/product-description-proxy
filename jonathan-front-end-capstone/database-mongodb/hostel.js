const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const hostelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  propertyDescription: String,
  houseRules: {
    checkInCheckOut: {
      checkIn: String,
      checkOut: String,
    },
    policies: [],
    cancellation_policy: {
      depositOnlyRates: String,
      nonRefundableRates: String,
    },
    thingsToNote: [],
  },
}, {
  timestamps: true,
});

const Hostel = mongoose.model('Hostel', hostelSchema);

// Hostel.find({}, (err, docs) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(docs);
//   }
// });
module.exports = Hostel;
