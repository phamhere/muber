const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(
    "mongodb://localhost/muber",
    {
      useNewUrlParser: true
    }
  );
}

app.use(express.json());
routes(app);

module.exports = app;
