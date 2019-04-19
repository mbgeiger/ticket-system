const router = require("express").Router();
const indexController = require("../../controllers/indexController");

// Matches with "/api/books"
router.route("/login")
    .post(indexController.login);
    
module.exports = router;