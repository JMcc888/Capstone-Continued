const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    ],
    unique: true,
  },
  role: {
    type: String,
    enum: ["user"],
    // administrative roles will be assigned manually
    default: "user",
  },
  password: {
    type: String,
    minlength: 10,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// ======================
// MIDDLEWARE
// ======================

UserSchema.plugin(plm);

module.exports = mongoose.model("User", UserSchema);
