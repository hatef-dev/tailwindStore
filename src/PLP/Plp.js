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

// Checkbox functionality for usage filters
const usageDisplay = document.getElementById("usage-display")
const clearUsageCheckboxes = document.getElementById("clear-usage-checkboxes")

// Get all usage checkboxes
const usageCheckboxes = [
    { id: "usage-home", label: "خانگی" },
    { id: "usage-class", label: "کلاسی" },
    { id: "usage-outdoor", label: "فضای باز" },
    { id: "usage-portable", label: "قابل حمل" },
    { id: "usage-conference", label: "سالن کنفرانس" },
    { id: "usage-convention", label: "سالن همایش" }
]

// Function to update display text based on checked
function updateUsageDisplay() {
    const checkedBoxes = usageCheckboxes.filter(checkbox => {
        const element = document.getElementById(checkbox.id)
        return element && element.checked
    })
    
    if (checkedBoxes.length === 0) {
        usageDisplay.textContent = ""
        usageDisplay.className = "text-[10.24px] font-[400] text-[#B4B3C0]"
    } else if (checkedBoxes.length === 1) {
        usageDisplay.textContent = checkedBoxes[0].label
        usageDisplay.className = "text-[10.24px] font-[400] text-[#B4B3C0]"
    } else if (checkedBoxes.length === 2) {
        usageDisplay.textContent = checkedBoxes.map(cb => cb.label).join(" | ")
        usageDisplay.className = "text-[10.24px] font-[400] text-[#B4B3C0] "
    } else {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
        const persianCount = checkedBoxes.length.toString().split('').map(digit => persianNumbers[parseInt(digit)]).join('')
        usageDisplay.textContent = `(${persianCount})`
        usageDisplay.className = "text-[10.24px] font-[400] text-[#B4B3C0]"
    }
}


usageCheckboxes.forEach(checkbox => {
    const element = document.getElementById(checkbox.id)
    if (element) {
        element.addEventListener("change", updateUsageDisplay)
    }
})


clearUsageCheckboxes.addEventListener("click", () => {
    usageCheckboxes.forEach(checkbox => {
        const element = document.getElementById(checkbox.id)
        if (element) {
            element.checked = false
        }
    })
    updateUsageDisplay()
})