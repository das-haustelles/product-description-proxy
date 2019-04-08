require('./index.js');

const faker = require('faker');
const Location = require('./schemas/Location.js');
const Settings = require('./schemas/Settings.js');
const Signin = require('./schemas/Signin');

// settings
const languages = ['Dansk', 'Deutcsh', 'English', 'Espanol', 'Francais', 'Italian', 'Nederlands', 'Norsk', 'Polski', 'Potugues', 'Japanese', 'Chinese'];
for (let i = 0; i < 100; i += 1) {
  const randomLanguage = languages[Math.floor(Math.random() * languages.length)];

  const newRandomSettings = new Settings({
    language: randomLanguage,
    currency: faker.finance.currencyCode(),
  });

  newRandomSettings.save((err) => {
    if (err) return err;
    // saved
  });

  const newRandomSignin = new Signin({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  });

  newRandomSignin.save((err) => {
    if (err) return err;
    // saved
  });

  const newRandomLocation = new Location({
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    photoUrl: faker.image.image(),
  });

  newRandomLocation.save((err) => {
    if (err) return err;
    // saved
  });
}

// var badges = ['','Free Wifi', 'Free Breakfast']
// badges: String        leave out badges for now
