// forked from http://codepen.io/riogrande/pen/gbXxdx
$(document).ready(function(){
  $(".mm-btn a").click(function(){
    $(".overlay").fadeToggle(0);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
      $("html, body").toggleClass('scroll').toggleClass('no-scroll');
      $(".mobileNavFade").toggleClass('op100').toggleClass('op25');
  return false;
  });
});
$('').on('click', function(){
  $(".overlay").fadeToggle(0);
    $(".mm-btn a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
  return false;
});

// <script>
//   $(document).on('click', '.btn-open', function() {
//     if ($('html','body').css('#overlayWrap') == 'hidden') {
//       $('html','body').css("#overlayWrap", "auto");
//     }
//       else {
//           $('html','body').css("#overlayWrap", "hidden");
//       }
//   });
// </script>

// function toggleColor() {
//   $("html").toggleClass("scroll");
//   $("html").toggleClass("no-scroll");
// }
