$("#education-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 2000);
});

$("#work-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 3000);
});

$("#projects-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 4000);
});