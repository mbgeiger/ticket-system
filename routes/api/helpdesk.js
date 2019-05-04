const router = require("express").Router();
const helpDeskController = require("../../controllers/helpDeskController");

router.route("/")
    .get(helpDeskController.findAll)
    .post(helpDeskController.create);

router
    .route("/:id")
    .get(helpDeskController.findOne)
    .put(helpDeskController.update);

/*
router
    .route("/usersTickets")
    .get(helpDeskController.getOneUser);*/

module.exports = router;