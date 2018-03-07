console.log("Note-controller connected");

var Headline = require('../models').Headline;
var Note = require('../models').Note;


exports.save = function (data, callback) {

    var newNote = new Note({
        _headlineId: data.id,
        body: data.body,
        date: data.date
    });

    newNote.save(function (err, doc) {

        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            callback(doc)
        }
    });
};

exports.gather = function (data, callback) {

    Note.find({
            _headlineId: data.id
        })
        .sort({
            id: -1
        })
        .exec(function (err, doc) {

            callback(doc);
        });
};

exports.delete = function (data, callback) {

    Note.remove({
        _headlineId: data.id
    }, function (err, deleted) {

        if (err) {
            console.log(err);
        } else {
            console.log("Delete Sucess!");

            callback(deleted)
        };
    });
};