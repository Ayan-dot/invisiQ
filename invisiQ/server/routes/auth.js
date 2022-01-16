const express = require("express");
const router = express.Router();
const { SESSION_NM } = require("../config/index");

const { register, login, logout } = require("../controllers/authControl");

router.post("/register", (req, res, next) => {
  register(req)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => next(err));
});

router.post("/login", (req, res, next) => {
  login(req)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => next(err));
});
router.delete("/logout", (req, res, next) => {
  logout(req)
    .then((doc) => {
      res.clearCookie(SESSION_NM);
      res.json(doc);
    })
    .catch((err) => next(err));
});

module.exports = router;
