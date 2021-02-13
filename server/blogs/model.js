const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: { type: String, required: true },
  img: String,
  body: String,
  createdAt: { type: Date, default: Date.now() },
  author: String,
});

//schema.index({ title: "text", body: "text" });

const Blog = mongoose.model("Blog", schema);

module.exports = Blog;
