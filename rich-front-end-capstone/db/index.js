const Sequelize = require('sequelize');
const config = require('./utils/config');

const sequelize = new Sequelize('fec', config.userName, config.userPass, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

const Hostel = sequelize.define('Hostel', {
  hostelName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkInDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  checkOutDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

const Booking = sequelize.define('Booking', {
  bookedDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  hostel_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Hostel,
      id: 'id',
    },
  },
});

sequelize.sync();


module.exports.sequelize = sequelize;
module.exports.Hostel = Hostel;
module.exports.Booking = Booking;
