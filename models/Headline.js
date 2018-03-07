console.log("Headline-Model connected");

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
    headline: {
        type: String,
        
    },
    summary: {
        type: String,
     
    },
    link: {
        type: String,
      
    }
   
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;