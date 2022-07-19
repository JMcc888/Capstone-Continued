const axios = require("axios");
const Message = require("../models/message");

// Get confirmed Appointments
exports.getMessages = async (req, res, next) => {
  if (req.user.role !== process.env.AUTHORIZED) {
    res.redirect("/");
  }
  // Send request to API for information upon hitting route
  const conf = process.env.MESSAGES;
  const response = await axios
    .get(conf, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("messages", { data, user: req.user });
        //console.log(data, typeof data);
      },
      (error) => {
        console.log(error);
      }
    );
};

// Create Message
exports.createMessage = async (req, res, next) => {
  const url = process.env.MESSAGES;
  const response = await axios
    .post(url, {
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    })
    .then(res.redirect("/"));
};

// Get Single Message
exports.getMessage = async (req, res, next) => {
  const url = process.env.MESSAGE;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const response = await axios
    .get(url + `/${id}${KEY}`, {})
    .then((data) => data.data.data)
    .then(
      (data) => {
        res.render("message_show", {
          data: data,
          user: req.user,
        });
      },
      (error) => {
        console.log(error);
      }
    );
};

// Delete Message
exports.deleteMessage = async (req, res, next) => {
  const url = process.env.MESSAGE;
  const id = req.params.id;
  const KEY = process.env.KEY;
  const response = await axios.delete(url + `/${id}${KEY}`, {}).then(
    () => {
      res.redirect(`/messages/`);
    },
    (error) => {
      console.log(error);
    }
  );
};
