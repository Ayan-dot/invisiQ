const User = require("../database/models/user.model");
const utils = require("./utils").auth;

async function register(req) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    throw new Error("Email already exists, please login!");
  } else {
    const new_user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    await new_user.save();
    req.session.user = await utils.pushSess(new_user);
    return "User has been saved, logging you in...";
  }
}

async function login(req) {
  const user = await User.findOne({ email: req.body.email });
  if (user && utils.passVerify(req.body.password, user.password)) {
    req.session.user = await utils.pushSess(user);
    return "Logged in Successfully!";
  } else {
    throw new Error(
      "Invalid username or password. If you have not registered, please do so."
    );
  }
}

async function logout({ session }) {
  if (session.user) {
    try {
      session.destroy();
    } catch (err) {
      throw err;
    }
    return "Logged out succesfully";
  } else {
    throw new Error("An error occured.");
  }
}

module.exports = {
  register,
  login,
  logout,
};
