// SEEDING SCRIPT
// "db:hostelSeed": "node database-mongodb/hostelsSeed.js"

const faker = require('faker');
const db = require('./index.js');
const Hostel = require('./hostel.js');

const sampleHostels = [];

function createHostel() {
  const oneHostel = {
    name: faker.company.companyName(),
    propertyDescription: faker.lorem.text(),
    houseRules: {
      checkInCheckOut: {
        checkIn: '14:00 - 23:00',
        checkOut: 'until 10:00',
      },
      policies: [
        'Age Restriction',
        'Credit Cards Accepted',
        'No Curfew',
        'Non Smoking',
      ],
      cancellationPolicy: {
        depositOnlyRates: "This property has a 2 day cancellation policy. Failure to cancel within this time will result in a cancellation charge equal to the first night of your stay, unless otherwise stated above (see 'Things to Note' information).",
        nonRefundableRates: 'Your booking is non-refundable. If you choose to cancel your booking, or in the case of a no-show, you will still be charged the full cost of your booking.',
      },
      thingsToNote: ['All guests must provide a passport or current Australian driver’s license on arrival with a valid credit card to check in.',
        'Proof of age cards are not accepted.',
        'Check in time is 2pm',
        'Check out time is 11am',
      ],
    },
  };
  sampleHostels.push(oneHostel);
}

for (let i = 0; i < 3; i += 1) {
  createHostel();
}

// console.log(sampleHostels);

function insertSampleHostels() {
  Hostel.create(sampleHostels)
    .then(() => db.close())
    .catch(err => err);
}

insertSampleHostels();
