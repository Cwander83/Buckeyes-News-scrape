console.log("api route connected");

module.exports = function () {
    var router = require("express").Router();
    var Headline = require("../models").Headline;


    router.get("/api/headlines", function (req, res) {
        Headline.find({})

            .then(function (dbHeadlines) {

                res.json(dbHeadlines)
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    router.get("/api/headlines/:id", function (req, res) {

        Headline.findById(req.params.id).then(function (dbHeadlines) {
                res.json(dbHeadlines);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    router.put("/api/headlines", function (req, res) {
        Headline.findByIdAndUpdate(req.body._id, {
                $set: req.body
            })
            .then(function (dbHeadlines) {
                res.json("Updated");
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    router.post("/api/headlines", function (req, res) {
        Headline.create(req.body).then(function (dbHeadlines) {

                res.json(dbHeadlines);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    router.delete("/api/headlines", function (req, res) {

        Headline.findByIdAndRemove(req.body._id).then(function (dbHeadlines) {
                res.json("deleted")
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    return router;
};