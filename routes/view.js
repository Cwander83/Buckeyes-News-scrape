console.log("view-route connected");

module.exports = function () {
    var router = require("express").Router();
    var scrape = require('../scripts/scrape.js');
    var Headline = require("../models").Headline;
    var fetchController = require("../controllers/fetch.js")
    var headlinesController = require('../controllers/headline.js');
    var notesController = require('../controllers/note.js');


    router.get("/", function (req, res) {
        Headline.find({})

            .then(function (dbHeadlines) {

                res.render("saved", {
                    headlines: dbHeadlines
                });
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // testing the scrape        // IT WORKS IT WORKS YAYY!!
    router.get('/test', function (req, res) {

        scrape("http://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes", function (data) {
            // send to browser as json
            res.json(data);
        });
    });

router.post("/fetch", function(req, res){

    fetchController.fetch();
    
    res.send("fetched!!")
})

    // router.get("/headline/:id", function (req, res) {

    //     Headline.findById(req.params.id)

    //         .then(function (dbHeadlines) {

    //             res.render();
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
    // });
    // router.get("/notes", function (req, res) {
    //     res.render()
    // });
    return router;
};