const axios = require("axios");
const Appointment = require("../models/appointment");
// Get appointments route on front-end
exports.getAppointments = async (req, res, next) => {
  const url = process.env.APPOINTMENTS;
  // Send request to API for information upon hitting route
  const response = await axios
    .get(url, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("schedule&booking", { user: req.user, data: data });
      },
      (error) => {
        console.log(error);
      }
    );
};

exports.newAppointment = async (req, res, next) => {
  res.render("newappointment", { user: req.user });
};

exports.createAppointment = async (req, res, next) => {
  req.body.user = req.user.id;
  const appointment = await Appointment.create(req.body);
  res.redirect("/schedule&booking");
};

exports.viewAppointments = async (req, res, next) => {
  //console.log(req.user.role);
  if (req.user.role !== process.env.AUTHORIZED) {
    res.redirect("/");
  }
  const url = process.env.APPOINTMENTS;
  // Send request to API for information upon hitting route
  const response = await axios
    .get(url, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("appointments", { user: req.user, data: data });
      },
      (error) => {
        console.log(error);
      }
    );
};
