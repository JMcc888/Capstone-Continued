const axios = require("axios");
const Confirmed = require("../models/confirmed");

// Get confirmed Appointments
exports.getConfirmed = async (req, res, next) => {
  if (req.user.role !== process.env.AUTHORIZED) {
    res.redirect("/");
  }
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

exports.schedule = async (req, res, next) => {
  // Send request to API for information upon hitting route
  const conf = process.env.CONFIRMED;
  const response = await axios
    .get(conf, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("schedule&booking", { data, user: req.user });
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
  res.redirect("/schedule&booking");
};

exports.getConfirm = async (req, res, next) => {
  Confirmed.findById(req.params.id)
    .exec()
    .then(
      (data) => {
        res.render("confirmed_show", {
          data: data,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
};

//DELETE
exports.deleteConfirm = async (req, res, next) => {
  const url = process.env.CONFIRM;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const response = await axios.delete(url + `/${id}${KEY}`, {}).then(
    () => {
      res.redirect(`/appointments/confirmed/`);
    },
    (error) => {
      console.log(error);
    }
  );
};

// Update Form
exports.updateConfirm = async (req, res, next) => {
  const url = process.env.CONFIRM;
  const id = req.params.id;
  const KEY = process.env.KEY;
  Confirmed.findById(req.params.id)
    .exec()
    .then((data) => {
      res.render("confirmed_edit", { data: data, user: req.user });
      console.log(`${url}/${id}${KEY}`);
    });
};

// Actual Update Confirmed Item
exports.updateConfirmed = async (req, res, next) => {
  const url = process.env.CONFIRM;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const updated = {
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  };

  const response = await axios.put(url + `/${id}${KEY}`, updated).then(
    () => {
      res.redirect(`/appointments/confirmed/${req.params.id}`);
    },
    (error) => {
      console.log(error);
    }
  );
};
