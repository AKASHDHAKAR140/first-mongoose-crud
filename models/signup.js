const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
});
const UserList = new mongoose.model("UserList", Schema);
module.exports = UserList;
