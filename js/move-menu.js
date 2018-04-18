//Home move by click
$("#first").click(function() {

    $('html,body').animate({
            scrollTop:$(".logo").offset().top},
        1500);
});


//About move by click
$("#second").click(function() {

    $('html,body').animate({
            scrollTop:$("#hr").offset().top},
        500);
});

//Grid goes to
$("#third").click(function() {

    $('html,body').animate({
            scrollTop:$("#grid").offset().top},
        500);
});
//Futures move by click
$("#fourth").click(function() {

    $('html,body').animate({
            scrollTop:$("#futures").offset().top},
        500);
});

//contact move by click
$("#fifth").click(function() {

    $('html,body').animate({
            scrollTop:$("#contact").offset().top},
        500);
});
// var sec = document.getElementById("second")
//
// sec.onclick = function () {
//     alert("wow")
// }