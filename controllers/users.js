// Imports
const passport = require("passport");
const User = require("../models/user");
// Login
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

// Register User

exports.register = async (req, res, next) => {
  const newUser = await User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
    }),
    req.body.password
  );
  //console.log(newUser);
  passport.authenticate("local")(req, res, () => {
    res.redirect("/");
  });
};

// User profile
// exports.profile = async (req, res) => {
//   res.render("profile");
// };

// View User Accounts
exports.viewUsers = async (req, res) => {
  res.render("profile", { user: req.user });
};
