require('../database/index.js');

const express = require('express');
const cors = require('cors');
const path = require('path');
// const server = require('../public/index.html');

const Location = require('../database/schemas/Location.js');
const Settings = require('../database/schemas/Settings.js');
const Signin = require('../database/schemas/Signin.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(cors());

// Mock tests
app.get('/settings', (req, res) => {
  Settings.find({}, (err, settings) => {
    if (err) { return err; }
    res.send(settings);
  });
});

app.get('/signin', (req, res) => {
  Signin.find({}, (err, signin) => {
    if (err) { return err; }
    res.send(signin);
  });
});

app.get('/location', (req, res) => {
  Location.find({}, (err, location) => {
    if (err) { return err; }
    res.send(location);
  });
});

app.get('/location/Venezuela', (req, res) => {
  Location.find({ country: 'Venezuela' }, (err, location) => {
    if (err) { return err; }
    res.send(location);
  });
});


app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

