// SEEDING SCRIPT
// "db:usersSeed": "node database-mongodb/usersSeed.js"

const faker = require('faker');
const db = require('./index.js');
const User = require('./user.js');

const sampleUsers = [];

const travelExperience = {
  0: 'Novice Nomad',
  1: 'Avid Traveller',
  2: 'Globetrotter',
};

function randomNumber(minimum, maximum, precision) {
  const min = minimum || 0;
  const max = maximum || 9007199254740992;
  const precision1 = precision || 0;

  const random = Math.random() * (max - min) + min;

  return random.toFixed(precision1);
}

function getRandomGender() {
  const zeroOrOne = randomNumber(0, 1);
  if (zeroOrOne === 0) {
    return 'Male';
  }
  return 'Female';
}

function getRandomAge18To45() {
  return randomNumber(18, 45);
}

function getRandomTravelerExperience() {
  const travelerNum = randomNumber(0, 2);
  return travelExperience[travelerNum];
}

function getRandomUserReviewCount() {
  return randomNumber(1, 3);
}

function createReview(username) {
  const randomNumBetween4and10 = randomNumber(4, 10, 1);
  const randomHostelName = faker.company.companyName();
  const ratingWord = {
    4: 'Rating',
    5: 'Rating',
    6: 'Good',
    7: 'Very Good',
    8: 'Fabulous',
    9: 'Superb',
    10: 'Superb',
  };

  const avgRatingWord = ratingWord[Math.floor(randomNumBetween4and10)];

  const oneReview = {
    username,
    avgRating: randomNumBetween4and10,
    avgRatingWord,
    reviewText: faker.lorem.text(),
    reviewDate: faker.date.recent(),
    propertyReply: faker.lorem.text(),
    hostelName: randomHostelName,
  };

  return oneReview;
}

function createUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = `${lastName}_${firstName}`;
  const maleOrFemale = getRandomGender();
  const randomAge = getRandomAge18To45();
  const randomTravelExperience = getRandomTravelerExperience();
  const randomReviewNumber = getRandomUserReviewCount();
  const userReviews = [];

  for (let i = 0; i < randomReviewNumber; i += 1) {
    const oneReview = createReview(username);
    userReviews.push(oneReview);
  }

  const oneUser = {
    username,
    country: faker.address.country(),
    gender: maleOrFemale,
    age: randomAge,
    travelExperience: randomTravelExperience,
    totalReviews: randomReviewNumber,
    reviews: userReviews,
  };

  sampleUsers.push(oneUser);
}

for (let i = 0; i < 3; i += 1) {
  createUser();
}

function insertSampleUsers() {
  User.create(sampleUsers)
    .then(() => db.close())
    .catch(err => err);
}

insertSampleUsers();
