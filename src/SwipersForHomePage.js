import Swiper from "swiper";
import "swiper/swiper-bundle.css";

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 40,
});
var swiper2 = new Swiper(".discountSecetion", {
  spaceBetween: 40,
});
var swiper3 = new Swiper(".articleSecetion", {
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
var swiper3 = new Swiper(".videoSection", {
  spaceBetween: 40,
});

