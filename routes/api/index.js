const router = require("express").Router();
const ticketRoutes = require("./helpdesk");
//const signuproutes = require("./signup")
const loginRoutes = require("./login")

router.use("/tickets", ticketRoutes);
//router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);


module.exports = router;