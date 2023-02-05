const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const path = require('path');

const userRouter = require("./routes/userRoute");
const officerRouter = require("./routes/officerRoute");
const caseRouter = require("./routes/caseRoute");
const shiftRouter = require("./routes/shiftRoute");
const eventRouter = require("./routes/eventRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

const DB = mongoose
  .connect(
    "mongodb+srv://rohit:yadav@cluster0.rtm3sxt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connnected");
  })
  .catch((err) => console.log(err));

app.use(morgan("combined"));

// app.use("", route);

app.use("", userRouter);
app.use("", officerRouter);
app.use("", caseRouter);
// app.use("", eventRouter);
app.use("", shiftRouter);

dotenv.config({path:'../backend/config/config.env'});


app.listen(4000, () => {
  console.log("Server is running");
  console.log(process.env.JWT_SECRET);
});