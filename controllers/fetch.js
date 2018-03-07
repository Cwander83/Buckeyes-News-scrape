console.log("Fetch-controller connected");

var scrape = require('../scripts/scrape.js');
var Headline = require('../models').Headline;
var Note = require('../models').Note;


// export function as a fetch 
exports.fetch = function () {

    // run scrape function
    scrape("http://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes", function (data) {

        var scrapedData = data;


        for (var i in scrapedData) {
            // checks for duplicates
            renderArticle(i);
        }

        function renderArticle(current) {
            // look for a match by the headline of the current article
            Headline.findOne({
                'headline': scrapedData[current][0]
            }, function (err, res) {
                
                if (err) {
                    console.log(err);
                }
                // or, if there is no match
                if (res === null) {
                    // create a new entry object using our Headline model
                    var headlineEntry = new Headline({
                        headline: scrapedData[current][0],
                        summary: scrapedData[current][1],
                        link: scrapedData[current][2]
                    });
                    // save new entry to db
                    headlineEntry.save(function (err) {
                        
                        if (err) {
                            console.log(err);
                        }
                        
                        else {
                            console.log('successfully added');
                        }
                    });
                }
            });
        }

    });
};

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