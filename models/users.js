const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    staffid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('users', userSchema);



