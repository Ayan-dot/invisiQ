const dotenv = require("dotenv");

const dbconfig = require("./db");
const sessionconfig = require("./session");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_CONNECT: dbconfig.linktoDb,
  SESSION_CONF: sessionconfig.returnSession,
  SESSION_NM: process.env.SESSION_NM,
};
