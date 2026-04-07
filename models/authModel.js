const mongoose = require('mongoose');

const User = mongoose.model('UserAuth', {
  username: String,
  password: String
<<<<<<< HEAD
})
=======
});
>>>>>>> 8ab67445b429f5a10aa1ede9133423cc5407848c

module.exports = User;