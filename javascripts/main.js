$(".projectImg").hover(
    function(){$(this).animate({width: 400, height:400});},
    function(){$(this).animate({width: 400, height:400});}
);

$(document).ready(function(){
       $(window).bind('scroll', function() {
       var distance = 50;
             if ($(window).scrollTop() > distance) {
                 $('nav').fadeIn(500);
             }
             else {
                 $('nav').fadeOut(500);
             }
        });
    });
