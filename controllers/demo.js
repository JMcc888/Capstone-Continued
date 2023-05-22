const axios = require("axios");

// Get Submitted Demos
exports.getDemos = async (req, res, next) => {
    const url = process.env.DEMOS;
    const demos = await axios.get(url,
        {}).then((data) => data.data.data)
        .then(
          (data) => {
            res.render("demo", { data, user: req.user });
            //console.log(data, typeof data);
          },
          (error) => {
            console.log(error);
          }
        );
}
// Create Demo Appointment
exports.createDemo = async (req, res, next) => {
    const url = process.env.DEMOS;
    const response = await axios
      .post(url, {
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
      })
      .then(res.redirect("/demo"));
  };