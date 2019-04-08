const express = require('express');
const cors = require('cors');

const app = express();
const port = 1128;
const bodyParser = require('body-parser');
const { searchDB, SearchInputModel } = require('../database/index.js');
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../'));

app.get('/Input', (req, res) => {
  SearchInputModel.find({}, (err, hostels) => {
    if (err) {
      return err;
    }
    res.send(hostels);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
