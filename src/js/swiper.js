import Swiper, { Pagination } from 'swiper'
let swiper

swiper = new Swiper('.swiper', {
  modules: [Pagination],
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  initialSlide: 0,

  slidesPerView: 'auto',

  spaceBetween: 16,

  breakpoints: {
    768: {
      initialSlide: 0,
      spaceBetween: 0,
      enabled: false
    }
  }
})
