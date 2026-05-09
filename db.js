const mongoose = require("mongoose");
require('dotenv').config();
const connection = mongoose.connect(`mongodb+srv://ddalsania2002:memorychronicles@cluster1.uxpoepb.mongodb.net/?retryWrites=true&w=majority`);
module.exports = {
  connection,
};
