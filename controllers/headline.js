console.log("headline-controller connected");

var scrape = require('../scripts/scrape.js');
// bring in the Headline and Note mongoose models
var Headline = require('../models').Headline;
var Note = require('../models').Note;

// export this function as check
exports.check = function (callback) {

  // sorted by id number
  Headline.find()
      .sort({
          _id: -1
      })

      .exec(function (err, doc) {

          callback(doc);
      });
};

