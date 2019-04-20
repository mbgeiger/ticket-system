const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Helpdesk.findAll({}).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    },

    create: function(req, res) {
        db.Helpdesk.create(req.body).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    },

    update: function(req, res) {
        db.Helpdesk.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    },

    getOneUser: function(req, res) {
        db.Users.findOne({
            where: {
                username: req.params.username
            }
        }).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    },

    findById: function(req, res) {
        db.Helpdesk.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    },

    getAllUserTickets: function(req, res) {
        db.Helpdesk.findAll({
            where: {
                Created_By: req.params.Created_By
            }
        }).then(function(dbHelpdesk) {
            res.json(dbHelpdesk);
        });
    }
};