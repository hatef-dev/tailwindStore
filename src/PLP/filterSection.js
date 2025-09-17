const filterProducts = document.querySelector(".filterProducts");
const filterButton = document.querySelector(".filterButton");
const filterClose = document.querySelector(".filterClose");
function openFilter() {
  filterProducts.classList.add("right-0");
  filterProducts.classList.remove("-right-full");
  document.body.classList.add("overflow-hidden", "h-screen");
}
function closeFilter() {
  filterProducts.classList.remove("right-0");
  filterProducts.classList.add("-right-full");
  document.body.classList.remove("overflow-hidden", "h-screen");
}
filterButton.addEventListener("click", openFilter);
filterClose.addEventListener("click", closeFilter);
