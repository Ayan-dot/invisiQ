const router = require("express").Router();
const auth = require("../controllers/utils").authenticate;
const { getUser, deleteUser, updateUser } = require("../controllers/usersControl");

router.get("", auth, (req, res, next) => {
  getUser(req)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.delete("", auth, (req, res, next) => {
  deleteUser(req)
  .then((doc) => res.json(doc))
  .catch((err) => next(err));
})

router.patch("", auth, (req, res, next) => {
  updateUser(req)
  .then((doc) => res.json(doc))
  .catch((err) => next(err));
})

module.exports = router;
