$(document).ready(function () {
    $("#btnHome").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });

    $("#btnAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#btnSkills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1500);
    });

    $("#btnService").click(function () {
        $('html, body').animate({
            scrollTop: $("#service").offset().top
        }, 1500);
    });

    $("#btnProject").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1500);
    });

    $("#btnComment").click(function () {
        $('html, body').animate({
            scrollTop: $("#comment").offset().top
        }, 1500);
    });

    $("#btnContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });

    $("#btnContact2").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});