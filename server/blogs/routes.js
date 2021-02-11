const express = require("express");
const Blog = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  let blogs;
  if (req.query) {
    const { page } = req.query;
    blogs = await Blog.find()
      .sort("-createdAt")
      .skip((page - 1) * 6)
      .limit(6);
  } else {
    blogs = await Blog.find().sort("-createdAt").limit(6);
  }
  const numberOfBlogs = await Blog.countDocuments();
  res.json({ blogs, numberOfBlogs });
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
