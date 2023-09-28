const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  lastname: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
});
const UserList1 = new mongoose.model("UserList1", Schema);
module.exports = UserList1;
