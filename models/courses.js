const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  lecturer: {
    type: String,
    required: true,
  },
  coursecode: {
    type: String,
    required: true,
    
  },
  coursename: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('courses', courseSchema);



