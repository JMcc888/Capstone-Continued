const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, "Please provide a number"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    ],
  },
  message: {
    type: String,
    required: [true, "Bro what"],
  },
});

module.exports = mongoose.model("Message", MessageSchema);
