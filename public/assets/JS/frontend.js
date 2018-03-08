console.log("frontendJS connnected");

//var articleContainer = $(".articleContainer");
$(document).ready(function () {

    $("#articleContainer").hide()


    //renderCards();


    $("#scrapeBtn").on("click", function (data) {
        fetchHeadline();

    });


})

var renderCards = function (data) {
    $.ajax({
            method: "GET",
            url: "/api/headlines"
        })
        .then(function (data) {
            var pulledData = data;
            console.log(`pulledData: ${pulledData[1]}`);
            $("{{>articles this}}").append(pulledData);



        })
};


var fetchHeadline = function () {
    $.ajax({
            type: "POST",
            url: "/fetch"
        })
        .done(function () {
            renderCards()
            $("#articleContainer").show()
        })
}