const router = require("express").Router();
const helpdeskRoutes = require("./helpdesk");

// Book routes
router.use("/tickets", helpdeskRoutes);

module.exports = router;