const router = require("express").Router();
const helpDeskController = require("../../controllers/helpDeskController");

// Matches with "/api/books"
router.route("/tickets")
    .get(helpDeskController.findAll)
    .post(helpDeskController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(helpDeskController.findById)
    .put(helpDeskController.update)
    .delete(helpDeskController.remove);

module.exports = router;