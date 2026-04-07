const mongoose = require('mongoose');

const User = mongoose.model('UserAuth', {
  username: String,
  password: String
})

module.exports = User;