var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
var indexRouter = require("./routes/index");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
  .connect(mongoURI)
  .then(() => console.log(`Database connected at ${mongoURI}`))
  .catch((err) => console.log(err));

app.use("/", indexRouter);

module.exports = app;
