const router = require("express").Router();
//const indexController = require("../../controllers/indexController");
const ticketRoutes = require("./helpdesk");

// Matches with "/api/books"
/*router.route("/login")
    .post(indexController.login);*/

router.use("/tickets", ticketRoutes);

module.exports = router;