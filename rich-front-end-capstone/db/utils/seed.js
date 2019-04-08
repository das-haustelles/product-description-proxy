const db = require('../index');
const hostels = require('../utils/hostels');
const bookings = require('../utils/bookings');

const numOfHostels = 100;
const numOfBookings = 50;

const mockHostels = hostels.generateHostels(numOfHostels);
const mockBookings = bookings.generateBookings(numOfHostels, numOfBookings);

db.sequelize.drop()
  .then(() => {
    db.sequelize.sync()
      .then(() => {
        db.Hostel.bulkCreate(mockHostels)
          .then(() => {
            db.Booking.bulkCreate(mockBookings)
              .then(() => {
                db.sequelize.close();
              });
          });
      });
  });
