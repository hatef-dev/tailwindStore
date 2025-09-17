const oneColBtn = document.querySelector(".oneColBtn")
const twoColBtn = document.querySelector(".twoColBtn")
const twoColsProduct = document.querySelector(".twoColsProduct")
const oneColsProduct = document.querySelector(".oneColsProduct")


oneColBtn.addEventListener("click", () => {
    oneColsProduct.classList.remove("hidden")
    twoColsProduct.classList.add("hidden")
    oneColBtn.classList.remove("text-neutral")
    oneColBtn.classList.add("text-red")
    twoColBtn.classList.add("text-neutral")
    twoColBtn.classList.remove("text-red")

})
twoColBtn.addEventListener("click", () => {
    oneColsProduct.classList.add("hidden")
    twoColsProduct.classList.remove("hidden")
    oneColBtn.classList.add("text-neutral")
    oneColBtn.classList.remove("text-red")
    twoColBtn.classList.remove("text-neutral")
    twoColBtn.classList.add("text-red")

})