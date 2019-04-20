const db = require("../models");

module.exports = {

    login: function(req, res) {
        db.Users
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}