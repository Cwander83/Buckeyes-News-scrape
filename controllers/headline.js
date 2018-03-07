console.log("headline-controller connected");



// bring in the Headline and Note mongoose models
var Headline = require('../models').Headline;
var Note = require('../models').Note;

module.exports = {
  FindAll: function (req, res) {
    Headline.find({})

      .then(function (dbHeadlines) {

        res.json(dbHeadlines)
      })
      .catch(function (err) {
        res.json(err);
      });
  },


  findOne: function (req, res) {

    Headline.findById(req.params.id).then(function (dbHeadlines) {
        res.json(dbHeadlines);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  update: function (req, res) {
    Headline.findByIdAndUpdate(req.body._id, {
        $set: req.body
      })
      .then(function (dbHeadlines) {
        res.json("Updated");
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  create: function (req, res) {
    Headline.create(req.body).then(function (dbHeadlines) {

        res.json(dbHeadlines);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  destroy: function (req, res) {

    Headline.findByIdAndRemove(req.body._id).then(function (dbHeadlines) {
        res.json("deleted")
      })
      .catch(function (err) {
        res.json(err);
      });
  }
}