


$(".slide1, .slide1h, .2nd, .slide2, .slide2h, .3rd, .slide3, .slide3h, .4th, .slide4, .slide4h, .5th, .slide5, .slide5h, .6th, .slide6, .slide6h, .7th, .slide7, .slide7h, .8th, .slide8, .slide8h, .9th, .slideFin").hide();

$(".1st").click(function() {
    $(".index, .1st").fadeOut();
    $(".slide1, .slide1h, .2nd").delay(750).fadeIn();
});

$(".2nd").click(function() {
    $(".slide1, .slide1h, .2nd").fadeOut();
    $(".slide2, .slide2h, .3rd").delay(750).fadeIn();
});

$(".3rd").click(function() {
    $(".slide2, .slide2h, .3rd").fadeOut();
    $(".slide3, .slide3h, .4th").delay(750).fadeIn();
});

$(".4th").click(function() {
    $(".slide3, .slide3h, .4th").fadeOut();
    $(".slide4, .slide4h, .5th").delay(750).fadeIn();
});

$(".5th").click(function() {
    $(".slide4, .slide4h, .5th").fadeOut();
    $(".slide5, .slide5h, .6th").delay(750).fadeIn();
});

$(".6th").click(function() {
    $(".slide5, .slide5h, .6th").fadeOut();
    $(".slide6, .slide6h, .7th").delay(750).fadeIn();
});

$(".7th").click(function() {
    $(".slide6, .slide6h, .7th").fadeOut();
    $(".slide7, .slide7h, .8th").delay(750).fadeIn();
});

$(".8th").click(function() {
    $(".slide7, .slide7h, .8th").fadeOut();
    $(".slide8 , .slide8h, .9th").delay(750).fadeIn();
});

$(".9th").click(function() {
    $(".slide8, .slide8h, .9th").fadeOut();
    $(".slideFin").delay(750).fadeIn();
});


//<li><p>Schooling:$0 (family paid)</p> 38,568 USD






