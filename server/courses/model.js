const mongoose = require("mongoose");

const Course = mongoose.model(
  "Course",
  mongoose.Schema({
    name: { type: String, required: true },
    description: String,
  })
);

module.exports = Course;
