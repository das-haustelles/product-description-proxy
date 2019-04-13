const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3005;

app.use(morgan('dev'));
app.use('/hostels/:id', express.static(path.join(__dirname, 'public')));

// fetch request to julius' localhost:3000/location/country/:hostelId
// fetch request to rich's 'localhost:3001/api/hostels/:hostelId'
app.get('/api/hostels/:id', (req, res) => {
  // http://13.57.217.200:3001/api/hostels/5
  axios.get(`http://localhost:3001/api/hostels/${req.params.id}`)
    .then(function (response) {
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.send(error)
    });
});

app.get('/hostels/:id/bookings', (req, res) => {
  console.log('req params is:', req.params.id)
  axios.get(`http://localhost:3001/hostels/${req.params.id}/bookings`)
    .then(function (response) {
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port} PROXY SERVER`);
});