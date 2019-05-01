const db = require("../models");

module.exports = {

    login: function(req, res) {
        console.log("In Function")
        db.Users
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}