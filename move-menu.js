$("#second").click(function() {

    $('html,body').animate({
            scrollTop: $("#foot").offset().top},
        'slow');
});