import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 40
});
var swiper2 = new Swiper(".discountSecetion", {
  spaceBetween: 40
})
var swiper3 = new Swiper(".articleSecetion", {
  spaceBetween: 40
})
var swiper3 = new Swiper(".videoSection", {
  spaceBetween: 40
})

const menu = document.querySelector(".MobileMenu")
const menuButton = document.querySelector(".MenuButton")
const closeButton = document.querySelector(".CloseButton")
const Menubackground = document.querySelector(".Menubackground")
const dropdownMenu = document.querySelector(".dropdownMenu")
const dropdownBackground = document.querySelector(".dropdownBackground")
const dropdownItems = document.querySelector(".dropdownItems")
const videoProjectorItems = document.querySelectorAll(".videoProjectorItem")
const videoProjectNavs = document.querySelectorAll(".videoProjectNav")
const shoppingCountainer = document.querySelector(".shoppingCountainer")
const shoppingCard = document.querySelector(".ShoppingCard")
const deActiveShoppingCard = document.querySelector(".deActiveShoppingCard")
const ActiveShoppingCard = document.querySelector(".ActiveShoppingCard")



dropdownMenu.addEventListener("click",()=>{
  dropdownItems.classList.toggle("hidden")
  dropdownBackground.classList.toggle("hidden")
})

shoppingCard.addEventListener("click",(e)=>{
  e.preventDefault()
  shoppingCountainer.classList.toggle("hidden")
  deActiveShoppingCard.classList.toggle("hidden")
  ActiveShoppingCard.classList.toggle("hidden")
})

videoProjectorItems.forEach((item,index)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault()
    videoProjectNavs.forEach(nav=>{
      nav.classList.add("hidden")
    })
    videoProjectNavs[index].classList.remove("hidden")
  })

})

dropdownBackground.addEventListener("click",()=>{
  dropdownItems.classList.add("hidden")
  dropdownBackground.classList.add("hidden")
})
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
