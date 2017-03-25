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
});

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

// Prevent automatic browser scroll on refresh
// http://stackoverflow.com/a/18633915
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// prevent a#SECTION from being added to URL on click
// http://stackoverflow.com/a/20215413
$('.mainShow').click(function(event){
  event.preventDefault();
});
$('.btn').click(function(event){
  event.preventDefault();
});

// run if iOS ver = 9.x.x
// http://stackoverflow.com/a/13280432
if(/(iPhone|iPad|iPod)\sOS\s9/.test(navigator.userAgent)) {
    var btn = $("#heroButtons");
    var bar = $(".et-hero-tabs-container");
    btn.remove();
    bar.css("position", "fixed");
    bar.css("top", "0");
    bar.css("height", "50px");
    bar.css("border-bottom", "1px solid #595959");
};
