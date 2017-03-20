// https://codepen.io/gannivella/pen/fdHhu
$(document).ready(function(){
  $('.blobCanvas').on('click', function(event){

    var newBlob = $('<div class="blobBlob"></div>');

    newBlob.css({
     top:  event.pageY-12,
     left: event.pageX-12
    });

    $('body').append(newBlob);

    setTimeout(function(){
      newBlob.remove();
    }, 850);

  });
});
