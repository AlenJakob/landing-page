


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("#toggle").addClass("ct");
    }
    else {
        $("#toggle").removeClass("ct");
    }
});
