const Blog = require("../blogs/model");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let { search } = req.body;
    const result = await Blog.find({
      title: { $regex: search, $options: "i" },
    });
    res.send(
      result.map((blog) => {
        return { title: blog.title, id: blog._id };
      })
    );
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
