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