const bcrypt = require("bcryptjs");
const passHash = async function (password) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const passVerify = function (pass, hashed_pass) {
  return bcrypt.compareSync(pass, hashed_pass);
};

const pushSess = async function (user) {
  return {
    id: user.id,
    username: user.username,
  };
};

module.exports = {
  passHash,
  passVerify,
  pushSess,
};
