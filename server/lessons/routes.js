const express = require("express");
const Lesson = require("./model");
const Course = require("../courses/model");
const router = express.Router();

router.post("/", async (req, res) => {
  Course.exists({ _id: req.body.course }, async (err, result) => {
    if (result) {
      try {
        const lesson = new Lesson(req.body);
        const result = await lesson.save();
        res.send(result);
      } catch (err) {
        console.log(err);
      }
    } else {
      res.send("Course isn't existed!");
    }
  });
});

router.get("/", async (req, res) => {
  try {
    const lesson = await Lesson.find();
    res.send(lesson);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
