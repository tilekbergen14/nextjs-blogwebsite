const mongoose = require("mongoose");

const schema = mongoose.Schema({
  course: { type: String, required: true },
  title: { required: true, type: String },
  order: { required: true, type: Number },
  slug: { required: true, type: String },
  content: { required: true, type: String },
});

const Lesson = mongoose.model("Lesson", schema);

module.exports = Lesson;
