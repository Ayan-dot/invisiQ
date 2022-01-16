const express = require("express");
const config = require("./config");
const { auth, users, events } = require("./routes");

const { MONGO_URI, MONGO_CONNECT, SESSION_CONF } = config;

const app = express();

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(SESSION_CONF(MONGO_URI));
MONGO_CONNECT(MONGO_URI);
app.use("/auth", auth);

app.use("/users", users);

app.use("/events", events);

app.get("", (req, res) => {
  res.send("Welcome to ");
});

app.use(function (err, req, res, next) {
  return res.status(500).send(err.message);
});


module.exports = app;
