// scrape script
console.log("scrape-script connected");

const cheerio = require("cheerio");
const axios = require("axios");

// variable to store the url we will be scraping
var url = `http://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes`;

var scrape = function () {
    // Use axios to get the html from the above link
    axios
        .get(url)
        // Our promise-based response
        .then((response) => {
            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            const $ = cheerio.load(response.data);
            //console.log(response.data);
            // An empty array to save the data that we'll scrape
            let results = [];


            // (i: iterator. element: the current element)
            $("div.item-info-wrap").each((i, element) => {

                //console.log(element);

                // text of the element in a "title" variable
                const title = $(element).children("h1").children("a.realStory").text();

                // text of the summary
                const summary = $(element).children("p").text();

                // the url link for the article scraped
                const link = $(element).children("h1").children("a").attr("href");

                // Save these results in an object that we'll push into the results array we defined earlier
                results.push({
                    headline: title,
                    summary: summary,
                    link: link

                });
            });
            // Log the results once you've looped through each of the elements found with cheerio
            console.log(JSON.stringify(results, null, 2));
        })
        .catch(error => {
            console.log(error);
        });
};
module.exports = scrape;