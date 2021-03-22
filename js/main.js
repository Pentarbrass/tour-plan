$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = $('.menu-button');
menuButton.on('click', function () {
  $('.navbar-bottom').toggleClass('navbar-bottom--visible')
})
  
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

    function openModal() {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
  };
  function closeModal(event) {
    event.preventDefault();
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
  };
  $(document).on('keydown',function(event) {
    if (event.keyCode == 27) {
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
  });
//Обработка форм
  $('.valid-form').each(function () {
    $(this).validate({
      errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Sorry, but your name is to short"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Please, enter your phone number",
        minlength: "Sorry, but your phone is to short"
      },
      }
  });
  });
//Настройка маски
  $(document).ready(function () {
    $('.phone-with-ddd').mask('+7 (999) 999-99-99');
  });
});




// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//     center: [7.890703, 98.294772],
//     zoom: 14
//   }, {
//     searchControlProvider: 'yandex#search'
//   }),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'DoubleTree by Hilton',
//       balloonContent: 'DoubleTree by Hilton Phuket Banthai Resort'
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: '../img/map.svg',
//       // Размеры метки.
//       iconImageSize: [30, 30],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-5, -38]
//     });

//     myMap.geoObjects
//         .add(myPlacemark)

// });