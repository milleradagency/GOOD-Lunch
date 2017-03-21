// document [when website] loads
$(document).ready(function() {
  $("main").animate({
    opacity: 1,
  }, 1500, function() {
    // Animation complete.
  });
  $("nav").animate({
    opacity: 1,
  }, 2000, function() {
    // Animation complete.
  });

  // scrollSpy
  // $('.scrollspy').scrollSpy();

  // fullPage
  // https://github.com/alvarotrigo/fullPage.js/#initialization
  // $('#fullpageIntro').fullpage({
  //   // Scrolling
  //   setAllowScrolling: false,
  //   // Design
  //   controlArrows: false
  // });
  //   // un-comment to edit main site content
  //   $.fn.fullpage.destroy('all');
  //   $('#fullpageIntro').remove();
});

// # Neat Parallax Hero Effect
// ## http://codepen.io/magnificode/pen/GpqGOm
// var heroShinker = function() {
//   // vars
//   var hero = $('.hero-nav'),
//     heroHeight = $('.hero-nav').outerHeight(true);
//     $(hero).parent().css('padding-top', heroHeight + 15);
//   var jumbo = $("#jumboHero");
//   var mobile = $("#topBar");
//   var nav = $("#topNav");
//   var main = $("main");
//   var mobile = $("#mobileNav");
//   var logoOld = $("#lunchLogoOld");
//   // var vw = $(hero).css('height', '100vh');
//
//   $(window).scroll(function() {
//     var scrollOffset = $(window).scrollTop();
//     if (scrollOffset < heroHeight) {
//       $(hero).css('height', (heroHeight - scrollOffset));
//     }
//
//     // add & remove .hero-nav class based on scrollOffset
//     if (scrollOffset > (heroHeight - 555)) {
//       hero.addClass('fixMe');
//     } else {
//       hero.removeClass('fixMe');
//     };
//
//     // change stats of #topNavMobileBars based on scrollOffset
//     // http://stackoverflow.com/a/8389571
//     // if (scrollOffset > (heroHeight - 585)) {
//     //   $("#topNavMobileBars").animate({
//     //     fontSize: "45px",
//     //     top: 12,
//     //   }, 300, function() {
//     //     // Animation complete.
//     //   });
//     // } else {
//     //   $("#topNavMobileBars").animate({
//     //     fontSize: "1.5rem",
//     //     top: 35,
//     //   }, 300, function() {
//     //     // Animation complete.
//     //   });
//     // };
//
//     // add another .hero-nav class based on scrollOffset
//     // if (scrollOffset > (heroHeight + 100)) {
//     //   hero.addClass('fixMeAgain');
//     // } else {
//     //   hero.removeClass('fixMeAgain');
//     // };
//
//     // add #jumboHero class based on scrollOffset
//     // if (scrollOffset > (heroHeight + 1000)) {
//     //   jumbo.addClass('hideMe');
//     // } else {
//     //   jumbo.removeClass('hideMe');
//     // };
//
//     // #mobileNav
//     // add .showMe to #mobileNav based on scrollOffset
//     if (scrollOffset > (heroHeight - 400)) {
//       mobile.addClass('showMe');
//     } else {
//       mobile.removeClass('showMe');
//     };
//
//     // #lunchLogoOld
//     // add .showMe to #lunchLogoOld based on scrollOffset
//     if (scrollOffset > (heroHeight - 575)) {
//       logoOld.addClass('showMe');
//     } else {
//       logoOld.removeClass('showMe');
//     };
//
//     // add & remove main class based on scrollOffset
//     // if (scrollOffset > (heroHeight - 580)) {
//     //   nav.removeClass('topNav-hello');
//     //   nav.addClass('topNav-bye');
//     // } else {
//     //   nav.removeClass('topNav-bye');
//     //   nav.addClass('topNav-hello');
//     // };
//
//     // add & remove #topBar class based on scrollOffset
//     // if (scrollOffset > (heroHeight - 580)) {
//     //   top.removeClass('topBar-hello');
//     //   top.addClass('topBar-bye');
//     // } else {
//     //   top.removeClass('topBar-bye');
//     //   top.addClass('topBar-hello');
//     // };
//   }); // end $(window).scroll
// }
// heroShinker();

// #mobileNav controls
// $(function() {
//   // open/close mobile nav
//   $("#mobileNavBar").on("click", function() {
//     if ($("#mobileNav").hasClass("showMeMore") == false) {
//       $("#mobileNav").addClass('showMeMore');
//       $("body").addClass('noscroll');
//       $("#mobileNavBars i").toggleClass('fa-bars fa-times');
//     } else {
//       $("#mobileNav").removeClass('showMeMore');
//       $("body").removeClass('noscroll');
//       $("#mobileNavBars i").toggleClass('fa-times fa-bars');
//     };
//   });
//
//   // scrollSpy link activates mobile close
//   $(".mainShow").on("click", function() {
//     if ($("#mobileNav").hasClass("showMeMore") == true) {
//       $("#mobileNav").removeClass('showMeMore');
//       $("body").removeClass('noscroll');
//       $("#mobileNavBars i").toggleClass('fa-times fa-bars');
//     } else {
//       //
//     };
//   });
// });

// http://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh/18633915#18633915
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// smooth scrolling
// forked: http://codepen.io/chriscoyier/pen/dpBMVP
// $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top + 30
//       }, 1000);
//       return false;
//     }
//   }
// });

// prevent a#SECTION from being added to URL on click
// http://stackoverflow.com/questions/20215248/prevent-href-link-from-changing-the-url-hash
$('.mainShow').click(function(event){
  event.preventDefault();
});
$('.btn').click(function(event){
  event.preventDefault();
});

// sponsorshipOpp tables
// http://codepen.io/grayghostvisuals/pen/gGxfh
// function priceToggle(e) {
//   e.preventDefault();
//   $(this).parent().next().toggleClass('opened');
// }
//
// $('.price-block__trigger').on('click', priceToggle);
// $('.price-block__trigger').on('touchstart', priceToggle);



// http://stackoverflow.com/questions/15056620/jquery-check-if-browser-is-ie
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
//     ie === undefined
// If you're in IE (>5) then you can determine which version:
//     ie === 7; // IE7
// Thus, to detect IE:
//     if (ie) {}
// And to detect the version:
//     ie === 6 // IE6
//     ie> 7 // IE8, IE9 ...
//     ie <9 // Anything less than IE9
// ----------------------------------------------------------
var ie = (function(){
    var undef, v = 3, div = document.createElement('div');

    while (
        div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
        div.getElementsByTagName('i')[0]
    );

    return v> 4 ? v : undef;
}());

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
   var rv = -1; // Return value assumes failure.

   if (navigator.appName == 'Microsoft Internet Explorer')
   {
       var ua = navigator.userAgent;
       var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

       if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
   }
   return rv;
}
