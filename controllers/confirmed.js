const axios = require("axios");
const Confirmed = require("../models/confirmed");

// Get confirmed Appointments
exports.getConfirmed = async (req, res, next) => {
  // Send request to API for information upon hitting route
  const conf = process.env.CONFIRMED;
  const response = await axios
    .get(conf, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("confirmed", { data, user: req.user });
        //console.log(data, typeof data);
      },
      (error) => {
        console.log(error);
      }
    );
};

// Create confirmed Appointments
exports.createConfirmed = async (req, res, next) => {
  const confirmed = await Confirmed.create(req.body);
  res.redirect("/appointments/confirmed");
};
