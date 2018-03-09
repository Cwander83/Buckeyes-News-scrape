console.log("api route connected");

module.exports = function () {
    var router = require("express").Router();
    var scrape = require('../scripts/scrape.js');
    var Headline = require("../models").Headline;
    var fetchController = require("../controllers/fetch.js")
    var headlinesController = require('../controllers/headline.js');
    var notesController = require('../controllers/note.js');



    router.get("/check", function (req, res) {

        headlinesController.check(function (data) {

            res.json(data);

        });
    });

    router.post("/save", function (req, res) {

        notesController.save(req.body, function (data) {

            res.json(data);

        });
    });

    router.delete("/delete", function (req, res) {

        notesController.delete(req.body, function (data) {

            res.json(data);

        });
    });

    return router;
};



