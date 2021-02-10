const express = require("express");
const Blog = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.json(result);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
