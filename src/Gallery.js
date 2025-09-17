import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./swiperStyle.css";

var GallerySwiper = new Swiper(".Gallery", {
  effect: "cards",
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 2,

  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  cardsEffect: {
    perSlideOffset: 20,
    perSlideRotate: 0,
    rotate: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
