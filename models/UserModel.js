const mongoose = require("mongoose");

const usrSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date:{
      type: Date,
      default: Date.now,
    }
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", usrSchema);

module.exports = {
  UserModel,
};
