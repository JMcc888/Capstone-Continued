const axios = require("axios");

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
