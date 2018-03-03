// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
//var cheerio = require("cheerio");

// Set up out port to be either the host"s port, or 3000
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Use bodyParser in out app
app.use(bodyParser.urlencoded({
  extended: true
}));

// Database configuration
// var databaseUrl = "scraper";
// var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable

// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// Listen on port 3000
app.listen(PORT, function () {
  console.log("App running on port 3000!");
});