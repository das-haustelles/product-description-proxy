const faker = require('faker');
const {
  searchDB,
  SearchInputModel,
  CalendarModel,
} = require('./index.js');

const fakeSearchInputData = [];
const fakeDataMaker = () => {
  for (let i = 0; i < 100; i += 1) {
    let hostelName = faker.name.firstName();
    let hostelCity = faker.address.city();
    fakeSearchInputData.push(
      {
        name: hostelName,
        city: hostelCity,
        text: `${hostelName} Hostel in ${hostelCity}`,
      },
    );
  }
};
const fakeCalendarData = [];
const fakeCalMaker = () => {
  for (let i = 0; i <= 11; i += 1) {
    const fakeEntry = { unavailable: [] };

    for (let k = 1; k <= 29; k += 1) {
      if (Math.random() > 0.75) {
        fakeEntry.unavailable.push(k);
      }
    }
    fakeCalendarData.push(fakeEntry);
  }
};

fakeDataMaker();
fakeCalMaker();
const insertSeachInputData = () => {
  SearchInputModel.create(fakeSearchInputData)
    .then(() => CalendarModel.create(fakeCalendarData))
    .then(() => searchDB.disconnect());
};
insertSeachInputData();
