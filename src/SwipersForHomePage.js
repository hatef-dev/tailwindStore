import Swiper from "swiper";
import "swiper/swiper-bundle.css";

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
var swiper2 = new Swiper(".discountSecetion", {
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
var swiper3 = new Swiper(".articleSecetion", {
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
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
var swiper4 = new Swiper(".videoSection", {
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: false,
  breakpoints: {
    480: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
  },
});

// Brand Icons Swiper
var swiper5 = new Swiper(".brandIcons", {
  spaceBetween: 8,
  slidesPerView: 2,
  // centeredSlides: false,
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    480: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 32,
    },
  },
});

