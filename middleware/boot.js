// Called boot because it quite literally gives someone the boot
// boot will kick users from a page if they aren't authorized
// Differs from isLogged, is used to protect admin routes
const passport = require("passport");

function boot(req, res, next) {
  // User logged in?
  if (req.isAuthenticated()) {
    // Yes? continue to check role
    return next();
  } else {
    res.redirect("/");
  }
}

module.exports = boot;
