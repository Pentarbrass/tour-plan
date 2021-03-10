var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
    },
    
});
var swiper = new Swiper('.swiper-container', {
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