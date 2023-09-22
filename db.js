const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(`mongodb+srv://ddalsania2002:2UFmjd3ycD3Su5c3@cluster1.uxpoepb.mongodb.net/?retryWrites=true&w=majority`);
module.exports = {
  connection,
};
