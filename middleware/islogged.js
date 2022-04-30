// Checks to see if user is logged in
// Redirects to sign-in. Used for home routes
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
