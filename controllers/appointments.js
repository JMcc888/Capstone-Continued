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
  const conf = process.env.CONFIRMED;
  const response = await axios
    .get(conf, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("newappointment", { data, user: req.user });
      },
      (error) => {
        console.log(error);
      }
    );
};

exports.createAppointment = async (req, res, next) => {
  req.body.user = req.user.id;
  const appointment = await Appointment.create(req.body);
  res.redirect("/schedule&booking");
};

exports.viewAppointments = async (req, res, next) => {
  //console.log(req.user._id);user
  //console.log(req.body);
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
        //console.log(data[0]._id);
      },
      (error) => {
        console.log(error);
      }
    );
};

exports.getAppointment = async (req, res, next) => {
  const url = process.env.APPOINTMENT;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const response = await axios
    .get(url + `/${id}${KEY}`, {})
    .then((data) => data.data.data)
    .then(
      (appointment) => {
        res.render("appointment_show", {
          appointment: appointment,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
};

//DELETE
exports.deleteAppointment = async (req, res, next) => {
  const url = process.env.APPOINTMENT;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const response = await axios.delete(url + `/${id}${KEY}`, {}).then(
    () => {
      res.redirect(`/appointments/view`);
    },
    (error) => {
      console.log(error);
    }
  );
};
