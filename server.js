//mLab info
// Welcome to mLab.  Your new subscription is being created and will be available shortly.  
// Please consult the mLab Add-on Admin UI to check on its progress.
// Created mongolab-perpendicular-78725 as MONGODB_URI
// Use heroku addons:docs mongolab to view documentation






// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible

var axios = require("axios");
var cheerio = require("cheerio");

// Set up out port to be either the host"s port, or 3000
var PORT = process.env.PORT || 8080;

// Initialize Express
var app = express();

//Models
var models = require("./models");

// Use morgan logger for logging requests
app.use(logger("dev"));

//app.use(express.static(__dirname + "/public"));

// // Connect Handlebars to our Express app
// app.engine("handlebars", exphbs({
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// Use bodyParser in out app
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

//Routes 
const routes = require("./routes")();
app.use("/", routes);


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

// Listen on port 3000
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});