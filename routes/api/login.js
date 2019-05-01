const router = require("express").Router();
const helpDeskController = require("../../controllers/indexController");

router.route("/login")
    .post(indexController.login);


module.exports = router;