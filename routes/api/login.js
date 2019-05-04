const router = require("express").Router();
const indexController = require("../../controllers/indexController");

router.route("/")
    .post(indexController.login);


module.exports = router;