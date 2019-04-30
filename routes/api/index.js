const router = require("express").Router();
//const indexController = require("../../controllers/indexController");
const ticketRoutes = require("./helpdesk");
const signuproutes = require("./signup")

// Matches with "/api/books"
/*router.route("/login")
    .post(indexController.login);*/

<<<<<<< HEAD
router.use("/tickets", ticketRoutes);
=======
router.route("/tickets", ticketRoutes);
router.route("/signup", signupRoutes);
>>>>>>> master

module.exports = router;