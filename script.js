$(document).ready(function () {
    $(".btn").click(function () {
        $(this).toggleClass('open');
        $("nav ul").slideToggle(500);
    })
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        let hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500);
        return false;
    });
});