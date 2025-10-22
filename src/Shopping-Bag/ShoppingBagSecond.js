const newAddressBtn = document.querySelector(".newAddressBtn")
const newAddressForm = document.querySelector(".newAddressForm")
const selectTimeBtn = document.querySelector(".selectTimeBtn")
const returnBtn = document.querySelector(".returnBtn")

// Handle label focus states
const inputs = document.querySelectorAll('input[type="text"]')
const labels = document.querySelectorAll('.label-focus')

inputs.forEach((input, index) => {
    input.addEventListener('focus', () => {
        // Find the corresponding label - check both direct sibling and parent's previous sibling
        let label = input.previousElementSibling
        if (!label || !label.classList.contains('label-focus')) {
            // If direct sibling is not the label, check parent's previous sibling
            label = input.parentElement.previousElementSibling
        }
        if (label && label.classList.contains('label-focus')) {
            label.classList.add('active')
        }
    })
    
    input.addEventListener('blur', () => {
        // Find the corresponding label - check both direct sibling and parent's previous sibling
        let label = input.previousElementSibling
        if (!label || !label.classList.contains('label-focus')) {
            // If direct sibling is not the label, check parent's previous sibling
            label = input.parentElement.previousElementSibling
        }
        if (label && label.classList.contains('label-focus')) {
            label.classList.remove('active')
        }
    })
})
newAddressBtn.addEventListener("click", () => {
    newAddressForm.classList.remove('hidden')
    newAddressForm.classList.add("block")
    newAddressBtn.classList.add("hidden")
    selectTimeBtn.classList.add("hidden")
})

returnBtn.addEventListener("click", () => {
    newAddressForm.classList.add('hidden')
    newAddressForm.classList.remove("block")
    newAddressBtn.classList.remove("hidden")
    selectTimeBtn.classList.remove("hidden")
})