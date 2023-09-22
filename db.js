const mongoose = require("mongoose");
require('dotenv').config();
const uri= MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
module.exports = {
  connection,
};
