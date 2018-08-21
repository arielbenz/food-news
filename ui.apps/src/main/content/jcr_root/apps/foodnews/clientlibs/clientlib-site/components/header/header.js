(function (site, $) {
    'use strict';
    var foodnewsheader = $(site + " .foodnews-header"),
        scroll,
        mobileBreakpoint = 992;

    if($(window).scrollTop() > 0 && $(window).width() > mobileBreakpoint) {
        foodnewsheader.addClass("navbar-sticky");
    }

    $(window).scroll(function(){

         scroll = $(window).scrollTop();
    if(scroll > 0 && $(window).width() > mobileBreakpoint) {
        foodnewsheader.addClass("navbar-sticky");
    } else {
        foodnewsheader.removeClass("navbar-sticky");
    }
});
}('.root',jQuery));
