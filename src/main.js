

const menu = document.querySelector(".MobileMenu");
const menuButton = document.querySelector(".MenuButton");
const closeButton = document.querySelector(".CloseButton");
const Menubackground = document.querySelector(".Menubackground");
const dropdownMenu = document.querySelector(".dropdownMenu");
const dropdownBackground = document.querySelector(".dropdownBackground");
const dropdownItems = document.querySelector(".dropdownItems");
const videoProjectorItems = document.querySelectorAll(".videoProjectorItem");
const videoProjectNavs = document.querySelectorAll(".videoProjectNav");
const shoppingCountainer = document.querySelector(".shoppingCountainer");
const shoppingCard = document.querySelector(".ShoppingCard");
const deActiveShoppingCard = document.querySelector(".deActiveShoppingCard");
const ActiveShoppingCard = document.querySelector(".ActiveShoppingCard");

const toggle2 = document.getElementById("toggle2");

const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
let isToggle2On = false;

toggle2.addEventListener("click", () => {
  isToggle2On = !isToggle2On;

  if (isToggle2On) {
    // Switch to Dark Mode

    lightMode.classList.add("hidden");
    darkMode.classList.remove("hidden");
  } else {
    // Switch to Light Mode

    lightMode.classList.remove("hidden");
    darkMode.classList.add("hidden");
  }
});

dropdownMenu.addEventListener("click", () => {
  dropdownItems.classList.toggle("hidden");
  dropdownBackground.classList.toggle("hidden");
});

shoppingCard.addEventListener("click", (e) => {
  e.preventDefault();
  shoppingCountainer.classList.toggle("hidden");
  deActiveShoppingCard.classList.toggle("hidden");
  ActiveShoppingCard.classList.toggle("hidden");
});

videoProjectorItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    videoProjectNavs.forEach((nav) => {
      nav.classList.add("hidden");
    });
    videoProjectNavs[index].classList.remove("hidden");
  });
});

dropdownBackground.addEventListener("click", () => {
  dropdownItems.classList.add("hidden");
  dropdownBackground.classList.add("hidden");
});
menuButton.addEventListener("click", () => {
  menu.classList.add("right-0");
  menu.classList.remove("right-[-100%]");
  Menubackground.classList.add("right-0");
  Menubackground.classList.remove("right-[-100%]");
});
closeButton.addEventListener("click", () => {
  menu.classList.remove("right-0");
  menu.classList.add("right-[-100%]");
  Menubackground.classList.remove("right-0");
  Menubackground.classList.add("right-[-100%]");
});
Menubackground.addEventListener("click", () => {
  menu.classList.remove("right-0");
  menu.classList.add("right-[-100%]");
  Menubackground.classList.remove("right-0");
  Menubackground.classList.add("right-[-100%]");
});

function updateProgressBars() {
  const now = Date.now();

  document.querySelectorAll("li[data-start][data-end]").forEach(li => {
    const start = new Date(li.dataset.start).getTime();
    const end = new Date(li.dataset.end).getTime();

    if (isNaN(start) || isNaN(end)) {
      console.warn("Invalid dates:", li.dataset.start, li.dataset.end);
      return;
    }

    if (now < start) {
      
      li.querySelector(".progress-bar").style.width = "100%";
      return;
    }

    if (now > end) {
      
      li.querySelector(".progress-bar").style.width = "0%";
      return;
    }

    const total = end - start;
    const elapsed = now - start;
    const percent = Math.max(0, Math.min(100, ((total - elapsed) / total) * 100));

    li.querySelector(".progress-bar").style.width = percent + "%";
  });
}


updateProgressBars();

setInterval(updateProgressBars, 1000);
