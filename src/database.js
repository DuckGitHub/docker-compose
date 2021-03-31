const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/mydatabase")
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log("err: ", err));
