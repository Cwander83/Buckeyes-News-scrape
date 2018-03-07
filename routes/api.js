console.log("api route connected");

module.exports = function () {
    var router = require("express").Router();
    var scrape = require('../scripts/scrape.js');
    var Headline = require("../models").Headline;
    var fetchController = require("../controllers/fetch.js")
    var headlinesController = require('../controllers/headline.js');
    var notesController = require('../controllers/note.js');


    router.get("/headlines", headlinesController.FindAll);

    router.get("/headlines/:id", headlinesController.findOne);

    router.put("/headlines", headlinesController.update);

    router.post("/headlines", headlinesController.create);

    router.delete("/headlines", headlinesController.destroy);

    return router;
};