const Course = require("./model");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    const result = await course.save();
    if (result) {
      res.send("Course created succesfully!");
    }
  } catch (err) {
    res.send("Couldn't create course!");
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (err) {
    res.send("Courses not found");
  }
});

module.exports = router;
