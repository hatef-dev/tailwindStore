import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./Product.css";
const relatedProducts = new Swiper(".relatedProducts", {
  slidesPerView: 1,
  slideClass: "relatedProducts-slider",
  spaceBetween: 32,
  breakpoints: {
    640: {
      // sm
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      // md
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      // lg
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
