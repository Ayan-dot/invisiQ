const utils = require("./utils").users;
const User = require("../database/models/user.model"); // change this to destructuring impoort
async function getUser({ session }) {
  const user = await User.findOne({ _id: session.user.id });
  if (user) {
    return user.toJSON();
  } else {
    throw new Error("An error occured while fetching user, please try again.");
  }
}
async function deleteUser({ session }) {
  const user = await User.findOneAndDelete({ _id: session.user.id });
  if(user)
    return "User succesfully deleted";
  else
    throw new Error("An error occured while deleting user, please try again.");
}

async function updateUser( req ) {
  const user = await User.findOne({ _id: req.session.user.id });
  if(user) {
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    user.username = req.body.username || user.username;
    await user.save();
    return user.toJSON();
  }
  else {
    throw new Error("An error occured while updating user, please try again.");
  }
}

module.exports = {
  getUser,
  deleteUser,
  updateUser,
};
