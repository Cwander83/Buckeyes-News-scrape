console.log("frontendJS connnected");
//$('.carousel').carousel()

$("#scrapeBtn").on("click", function (data) {

    $.post("/fetch", data)

        .then(function (data) {
            
        })
        .catch(function (err) {
            if (err)
                throw err;
        });
});


$(document).ready(function () {



})

// var renderCards = function(){
//     $.ajax({
//         type:"POST",
//         url: "/fetch"
//     })
//     .done(function(){

//     })
// }