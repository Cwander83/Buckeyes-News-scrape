// // scrape script
console.log("scrape-script connected");

var cheerio = require("cheerio");
var request = require("request");

// // variable to store the url we will be scraping
var websiteUrl = `http://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes`;


var scrape = function (url, callback) {

    if (url == websiteUrl) {

        request(url, function (err, res, body) {

            var $ = cheerio.load(body);
            // empty object
            var article = {};
            
            $("div.item-info-wrap").each((i, element) => {

                // title of article scraped
                var title = $(element).children("h1").children("a.realStory").text();

                // the summary
                var summary = $(element).children("p").text();

                // the url link for the article scraped
                var link = $(element).children("h1").children("a").attr("href");

                if (title !== "" && summary !== "") {
                    var tidyTitle = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                    var tidySummary = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                    var tidyLink = link.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                    article[i] = [tidyTitle];
                    article[i].push(tidySummary);
                    article[i].push(tidyLink);
                }
            });

            console.log(JSON.stringify(article, null, 2));

            callback(article);
        });
    };
};

module.exports = scrape;