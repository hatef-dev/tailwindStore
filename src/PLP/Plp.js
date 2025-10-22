const oneColBtn = document.querySelector(".oneColBtn")
const twoColBtn = document.querySelector(".twoColBtn")
const twoColsProduct = document.querySelector(".twoColsProduct")
const oneColsProduct = document.querySelector(".oneColsProduct")

// Filter buttons functionality
const brightnessFilter = document.getElementById("brightness-filter")
const contrastFilter = document.getElementById("contrast-filter")
const resolutionFilter = document.getElementById("resolution-filter")
const clearAllFilters = document.getElementById("clear-all-filters")

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

// Remove filter buttons when clicked
brightnessFilter.addEventListener("click", () => {
    brightnessFilter.remove()
})

contrastFilter.addEventListener("click", () => {
    contrastFilter.remove()
})

resolutionFilter.addEventListener("click", () => {
    resolutionFilter.remove()
})

// Clear all filters 
clearAllFilters.addEventListener("click", () => {
    // Remove all filter buttons
    if (brightnessFilter) brightnessFilter.remove()
    if (contrastFilter) contrastFilter.remove()
    if (resolutionFilter) resolutionFilter.remove()
})