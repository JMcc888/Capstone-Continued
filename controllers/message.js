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

// Create confirmed Appointments
exports.createMessage = async (req, res, next) => {
  const message = await Message.create(req.body);
  res.redirect("/");
};

exports.getMessage = async (req, res, next) => {
  Message.findById(req.params.id)
    .exec()
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

//DELETE
exports.deleteMessage = async (req, res, next) => {
  Message.findByIdAndDelete(req.params.id)
    .exec()
    .then(
      (deletedmessage) => {
        console.log(("Deleted:", deletedmessage));
        res.redirect("/messages");
      },
      (error) => {
        console.log(error);
      }
    );
};
