const db = require('../../db/index');

module.exports = {
  hostels: {
    get: (hostelId, callback) => db.Hostel.findAll({
      where: {
        id: hostelId,
      },
    })
      .then((hostel) => {
        callback(hostel);
      }),
  },
  bookings: {
    get: (hostelId, callback) => db.Booking.findAll({
      where: {
        hostel_id: hostelId,
      },
    })
      .then((bookings) => {
        callback(bookings);
      }),
  },
};
