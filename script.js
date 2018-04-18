$(document).ready(function () {
    $(".btn").click(function () {
        $(this).toggleClass('open');
        $("nav ul").slideToggle(500);
    })
});


$('.carousel').carousel({
	interval: 3000
})


$(document).ready(function () {
	$('.smooth-scroll').click(function () {
        let hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500);
        return false;
    });
});
