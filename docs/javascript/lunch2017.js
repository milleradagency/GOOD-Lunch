// document [when website] loads
$(document).ready(function() {
  $("main").animate({
    opacity: 1,
  }, 500, function() {
    // Animation complete.
  });
  $("nav").animate({
    opacity: 1,
  }, 1000, function() {
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
$(function() {
  // open/close mobile nav
  $("#mobileNavBar").on("click", function() {
    if ($("#mobileNav").hasClass("showMeMore") == false) {
      $("#mobileNav").addClass('showMeMore');
      $("body").addClass('noscroll');
      $("#mobileNavBars i").toggleClass('fa-share-alt fa-times');
      $("#navFade").toggleClass('hidden visible');
    } else {
      $("#mobileNav").removeClass('showMeMore');
      $("body").removeClass('noscroll');
      $("#mobileNavBars i").toggleClass('fa-times fa-share-alt');
      $("#navFade").toggleClass('visible hidden');
    };
  });
});

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


// run if iOS ver = 9.x.x
// http://stackoverflow.com/questions/13280343/how-can-i-detect-specific-ios-version-with-jquery
if(/(iPhone|iPad|iPod)\sOS\s9/.test(navigator.userAgent)) {
    var btn = $("#heroButtons");
    var bar = $(".et-hero-tabs-container");
    btn.remove();
    bar.css("position", "fixed");
    bar.css("top", "0");
    bar.css("height", "50px");
    bar.css("border-bottom", "1px solid #595959");
};

// run if IE
// http://codepen.io/gapcode/pen/vEJNZN
// Get IE or Edge browser version
var version = detectIE();
var btn = $("#heroButtons");

if (version === true) {
  btn.remove();
} else {
  // foo
}

// add details to debug result
// document.getElementById('details').innerHTML = window.navigator.userAgent;

// detect IE
// returns version of IE or false, if browser is not Internet Explorer
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
