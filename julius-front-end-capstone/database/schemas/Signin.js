const mongoose = require('mongoose');
require('../index.js');

const signinSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});
const Signin = mongoose.model('Signin', signinSchema);

module.exports = Signin;
