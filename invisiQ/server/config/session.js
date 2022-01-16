const session = require("express-session");
const MongoStore = require("connect-mongo");

returnSession = function (client) {
  return session({
    name: process.env.SESSION_NM,
    secret: process.env.SESSION_SEC,
    saveUninitialized: false,
    resave: false,
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(process.env.SESSION_LT),
    },
    store: MongoStore.create({
      collectionName: "sessions",
      mongoUrl: client,
      ttl: process.env.SESSION_LT,
    }),
  });
};

module.exports = {
  returnSession,
};
