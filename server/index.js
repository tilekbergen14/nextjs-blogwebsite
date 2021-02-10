const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs/", require("./blogs/routes"));

mongoose
  .connect(process.env.CONNECT_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to the MongoDB..."))
  .catch((err) => console.log(err));

app.listen(5000, console.log("Listening to port 5000..."));
