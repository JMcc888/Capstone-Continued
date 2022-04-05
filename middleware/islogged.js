const passport = require("passport");

function isLoggedIn(req, res, next) {
  // User logged in?
  if (req.isAuthenticated()) {
    // Yes? continue
    return next();
  } else {
    res.redirect("/login");
  }
}

module.exports = isLoggedIn;
