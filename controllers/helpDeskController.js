const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Ticket
            .find({})
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Ticket
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Ticket
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Ticket
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};