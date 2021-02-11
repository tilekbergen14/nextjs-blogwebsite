const mongoose = require("mongoose");

const Blog = mongoose.model(
  "Blog",
  mongoose.Schema({
    title: { type: String, required: true },
    img: String,
    body: String,
    createdAt: { type: Date, default: Date.now() },
    author: String,
  })
);

module.exports = Blog;
