const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Username Exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide unique email"],
    unique: [true, "Email Exists"],
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
