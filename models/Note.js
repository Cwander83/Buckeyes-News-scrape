console.log("Note-model connected");

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: 'Headline'
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