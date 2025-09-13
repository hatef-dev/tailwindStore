const newAddressBtn = document.querySelector(".newAddressBtn")
const newAddressForm = document.querySelector(".newAddressForm")
const selectTimeBtn = document.querySelector(".selectTimeBtn")
const returnBtn = document.querySelector(".returnBtn")
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