console.log("Note-model connected");

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

    title: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;