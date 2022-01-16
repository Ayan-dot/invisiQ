const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

linktoDb = async (connection) => {
  mongoose.connection.on("error", (err) => {
    console.log("error occured in database ", err);
  });
  const conn = await mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return conn.client;
};

module.exports = {
  linktoDb,
};
