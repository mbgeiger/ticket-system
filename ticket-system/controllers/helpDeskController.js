const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Helpdesk
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Helpdesk
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Helpdesk
            .findOneAndUpdate({ _ })
    }
}