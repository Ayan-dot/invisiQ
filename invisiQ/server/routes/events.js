const router = require("express").Router();
const auth = require("../controllers/utils").authenticate;
const { createEvent, getEvent } = require('../controllers/eventControl')


router.post("/create", auth, (req, res, next) => {
    createEvent(req)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.get("/:name", auth, (req, res, next) => {
    getEvent(req, name)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

module.exports = router;
