console.log("frontendJS connnected");

//var articleContainer = $(".articleContainer");
$(document).ready(function () {

    $("#articlesContainer").hide()


    renderCards();


    $("#scrapeBtn").on("click", function (data) {
        fetchHeadline(data);

    });


})

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

            console.log(JSON.stringify(data[0], null, 2));

            $("#articlesContainer").append(`<div class="card"><div class="card-header"><h1>${data[i].headline}</div><div class="card-body"><blockquote class="blockquote mb-0"><p><h4>Summary: </h4>${data[i].summary}</p><footer class="blockquote-footer">Article Link: <cite title="Source Title"><a href="${data[i].link}">${data[i].link}</a></cite></footer></blockquote></div></div>`)
        }


    })


};