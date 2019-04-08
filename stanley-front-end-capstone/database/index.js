const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/searchBar');
const searchDB = mongoose.connection;

// search input schema
const searchInputSchema = mongoose.Schema({
  name: String,
  city: String,
  text: String,
});

const SearchInputModel = mongoose.model('Input', searchInputSchema);

// check in check out schema
const searchCalendarSchema = mongoose.Schema({
  unavailable: Array,
});

const CalendarModel = mongoose.model('Calendar', searchCalendarSchema);

// groups schema
const searchGroupsSchema = mongoose.Schema({
  groups: Number,
});

const GroupsModel = mongoose.model('Groups', searchGroupsSchema);

searchDB.on('error', console.error.bind(console, 'connection error:'));
searchDB.once('open', () => {
  console.log('database connected fam');
});

module.exports = {
  searchDB,
  SearchInputModel,
  CalendarModel,
  GroupsModel,
};
