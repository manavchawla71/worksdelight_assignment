const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["mr", "ms", "mrs", "miss", "dr", ""],
    default: "",
  },
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    min: "1900-01-01",
    max: Date.now(),
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
