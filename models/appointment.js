const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give a name for the appointment"],
  },
  email: {
    type: String,
    required: [true, "Please give an email address for contact purposes"],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    ],
    unique: true,
  },
  service: {
    type: String,
    // Temporary, will change later to actually choose from list of services
    required: true,
  },
  hours: {
    type: Number,
    required: [true, "Please give a number of hours requested"],
    // Temporary
    mintime: [1, "Cannot provide time less than an hour"],
  },
  confirmation: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  // Establish relationship between user and appointment data
  // Removed required tag, allows for appointment creation
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    unique: [true, "There is already an existing appointment for that time"],
    required: [true, "Please give a date and time for your appointment"],
    validate: {
      validator: function (v) {
        return (
          v && // check that there is a date object
          v.getTime() > Date.now() + 24 * 60 * 60 * 1000 &&
          v.getTime() < Date.now() + 90 * 24 * 60 * 60 * 1000
        );
      },
      message:
        "Your appointment must be at least 1 day from now and not more than 90 days.",
    },
  },
  end: {
    type: Date,
    default: mongoose.Schema.date + mongoose.Schema.hours * 60 * 60 * 1000,
    ref: "Appointment",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

// Add Middleware Post-Save to send confirmation email later
