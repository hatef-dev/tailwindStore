import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

var swiper = new Swiper(".mySwiper", {});
var swiper2 = new Swiper(".discountSecetion", {})
var swiper3 = new Swiper(".articleSecetion", {})
var swiper3 = new Swiper(".videoSection", {})

const menu = document.querySelector(".MobileMenu")
const menuButton = document.querySelector(".MenuButton")
const closeButton = document.querySelector(".CloseButton")
const Menubackground = document.querySelector(".Menubackground")
menuButton.addEventListener("click",()=>{
  menu.classList.add("right-0")
  menu.classList.remove("right-[-100%]")
  Menubackground.classList.add("right-0")
  Menubackground.classList.remove("right-[-100%]")
})
closeButton.addEventListener("click",()=>{
  menu.classList.remove("right-0")
  menu.classList.add("right-[-100%]")
  Menubackground.classList.remove("right-0")
  Menubackground.classList.add("right-[-100%]")
})
Menubackground.addEventListener("click",()=>{
  menu.classList.remove("right-0")
  menu.classList.add("right-[-100%]")
  Menubackground.classList.remove("right-0")
  Menubackground.classList.add("right-[-100%]")
})
