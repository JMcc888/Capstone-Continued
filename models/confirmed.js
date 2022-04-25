const mongoose = require("mongoose");

const ConfirmedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a name for the appointment"],
  },
  start: {
    type: Date,
    required: [true, "Please provide a start time"],
  },
  end: {
    type: Date,
    required: [true, "Please provide an end time for the appointment"],
  },
});

module.exports = mongoose.model("Confirmed", ConfirmedSchema);
