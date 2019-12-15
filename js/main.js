$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      modal.removeClass('modal_visible');
  });
  $( ".modal" ).on('click', function( event ) {
    if (event.target == modal[0]){
      modal.removeClass('modal_visible' );
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('.go-up').is(':hidden')) {
            $('.go-up').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('.go-up').stop(true, false).fadeOut('fast'); }
  });
  $('.go-up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});

});