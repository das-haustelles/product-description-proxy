const faker = require('faker');
const moment = require('moment');

const generateHostels = (desiredFakeHostels) => {
  const hostels = [];
  const currentDate = moment().toDate();
  const nextYear = moment().add(1, 'years').toDate();
  for (let i = 0; i < desiredFakeHostels; i += 1) {
    const checkInDate = faker.date.future(1, currentDate);
    const hostel = {
      hostelName: faker.company.companyName(),
      checkInDate,
      checkOutDate: faker.date.between(checkInDate, nextYear),
    };
    hostels.push(hostel);
  }
  return hostels;
};

module.exports.generateHostels = generateHostels;
