$(document).ready(function () {
  var modal = $('.modal'),
      popup = $('.popup'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      closeBtn2 = $('.popup__close');

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
  closeBtn2.on('click', function () {
    popup.removeClass('popup_visible');
  });
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
    popup.removeClass('popup_visible');
  });
  $( ".modal" ).on('click', function( event ) {
    if (event.target == popup[0]){
      popup.removeClass('popup_visible' );
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
    }, // собшения
    messages: {
      userName:{
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "footer-send.php",
        data: $('.footer__form').serialize(),
        success: function (response) {
          $(".footer__form")[0].reset(),
          popup.toggleClass('popup_visible');
        }
      });
    },
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
    }, // собшения
    messages: {
      controlUserName:{
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      controlUserPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "control-send.php",
        data: $('.control__form').serialize(),
        success: function (response) {
          $(".control__form")[0].reset(),
          popup.toggleClass('popup_visible');
        }
      });
    },
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
      modalUserPhone: "Телефон обязателен",
      modalUserEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "modal-send.php",
        data: $('.modal__form').serialize(),
        success: function (response) {
          $(".modal__form")[0].reset(),
          modal.removeClass('modal_visible'),
          popup.toggleClass('popup_visible');
        }
      });
    },
  });
  
  // маски
  
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "Ваш номер телефона:"})
  
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

});