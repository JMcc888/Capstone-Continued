const passport = require("passport");

// LOGIN
exports.login = async (req, res, next) => {
  res.render("login");
};

exports.trylogin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

exports.logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};
