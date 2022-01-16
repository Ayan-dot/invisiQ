function authenticate(req, res, next) {
  if (!req.session.user || !req.session.id) {
    return res
      .status(401)
      .send("Access Denied, Invalid Session. You are not logged in!");
  }
  next();
}

module.exports = {
  auth: require("./auth"),
  users: require("./users"),
  events: require("./events"),
  authenticate,
};
