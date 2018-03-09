console.log("frontendJS connnected");
var newData;
var dataCount = 0;
$(document).ready(function () {

    $("#articlesContainer").hide()

    renderCards();

    //noteDisplay();
    //Scrape Button
    $("#scrapeBtn").on("click", function (data) {

        fetchHeadline(data);
    });
    // 
    $("#notesBtn").on("click", function (data) {

        $("#notes").empty();
        gatherNotes();

        console.log(gatherNotes());

    });
});

var fetchHeadline = function () {
    $.ajax({
            type: "POST",
            url: "/fetch"
        })
        .done(function () {
            renderCards()
            $("#articlesContainer").show()
        });
};

var renderCards = function () {

    $.getJSON("/api/check", function (data) {

        for (var i = 0; i < data.length; i++) {

            $("#articlesContainer").append(`${data[i]._id}<div class="card"><div class="card-header"><h1>${data[i].headline}</div><div class="card-body"><blockquote class="blockquote mb-0"><p><h4>Summary: </h4>${data[i].summary}</p><footer class="blockquote-footer">Article Link: <cite title="Source Title"><a href="${data[i].link}">${data[i].link}</a></cite></footer></blockquote></div><button id="notesBtn"><span class="badge badge-pill badge-secondary">Notes</span></button></div>`)

        };
    });
};

var gatherNotes = function () {

    var idCount = dataCount - 1;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: '/api/gather',
        data: {
            id: data[idCount]._id
        }
    }).done(function (noteGather) {
        console.log(note);
        noteDisplay(note);
        $("#notes").show()
    });

};

var noteDisplay = function (noteGather) {
    var note = "";
    for (var j = 0; j < noteGather.length; j++) {
        console.log(note[j]);
        note = note + noteGather[j].date;
        $("#notes").val(note);

        $("#notes").append(`<h2>Notes</h2><div>notes::${note._id}${note.date}${note.body}<button><span class="badge badge-pill badge-secondary">Add Notes</span></button></div>`);
    };
};

var saveNote = function (note) {

}