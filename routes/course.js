
const express = require('express');
const router = express.Router();

// Student model
const Course = require('../models/courses.js');

// @route   GET /api/course/
// @desc    Get all course
// @access  Public
router.get('/', async (req, res) => {
  try {
    const course = await Course.find({});
    res.send({ course })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

/**      lecturer
coursecode
coursename
level */


// @route   POST /api/course/
// @desc    Create a student
// @access  Public
router.post('/', async (req, res) => {
    console.log("hiting this route")
  try {
    const newStudent = await Course.create({ lecturer: req.body.lecturer, coursecode: req.body.coursecode,level: req.body.level, coursename: req.body.coursename });
     res.send({ newStudent });
  } catch (err) {
      console.log(err.message)
    res.status(400).send({ error: err });
  }

});





module.exports = router;