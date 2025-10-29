import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./CommaredPage.css";
const relatedProducts = new Swiper(".relatedProducts", {
  slidesPerView: 1,
  slideClass: 'relatedProducts-slider',
  spaceBetween: 12,
  autoHeight: true,
  breakpoints: {
    640: { // sm
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: { // md
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: { // lg
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
