const router = require("express").Router();
//const indexController = require("../../controllers/indexController");
const ticketRoutes = require("./helpdesk");
//const signuproutes = require("./signup")

// Matches with "/api/books"
/*router.route("/login")
    .post(indexController.login);*/

router.use("/tickets", ticketRoutes);
//router.use("/signup", signupRoutes);

module.exports = router;