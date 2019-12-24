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
    if ($(this).scrollTop() > 160) {
      $('.go-up').addClass('go-up_visible').fadeIn('6000');
    } else { $('.go-up').stop(true, false).fadeOut('4000'); }
  });
  $('.go-up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 650);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 15 + bullets.width() + 15);
  bullets.css('left', prev.width() + 15);

  new WOW().init();

  //Валидация формы
  $(".footer__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName:{
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-обект
      userEmail: {
        required: true,
      }
    }, // собшения
    messages: {
      userName:{
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Имя обязателен",
    }
    
  });
  $(".control__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      controlUserName:{
        required: true,
        minlength: 2,
        maxlength: 15
      },
      controlUserPhone: "required",
      // правило-обект
    }, // собшения
    messages: {
      controlUserName:{
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      controlUserPhone: "Имя обязателен",
      
      }
    
  });
  $(".modal__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      modalUserName:{
        required: true,
        minlength: 2,
        maxlength: 15
      },
      modalUserPhone: "required",
      // правило-обект
      modalUserEmail: {
        required: true,
        email: true
      }
    }, // собшения
    messages: {
      modalUserName:{
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      modalUserPhone: "Имя обязателен",
      modalUserEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
    
  });
  
  // маски

  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"})

});