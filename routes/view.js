console.log("view-route connected");

module.exports = function () {
    var router = require("express").Router();
    var Headline = require("../models").Headline;


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