const increaseBtns = document.querySelectorAll('.increase')
const decreaseBtns = document.querySelectorAll('.decrease')
const quantitySpans = document.querySelectorAll('.quantity')




let counts = Array.from(quantitySpans).map(() => 1)


increaseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        counts[index]++
        quantitySpans[index].textContent = counts[index]
        // updateTotalPrice(index)
    })
})


decreaseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (counts[index] > 1) {
            counts[index]--
            quantitySpans[index].textContent = counts[index]
            // updateTotalPrice(index)
        }
    })
})

// for total price i hope you see it  
/*
function updateTotalPrice(index) {
    const unitPriceElement = document.querySelectorAll('.unit-price')[index]
    const totalPriceElement = document.querySelectorAll('.total-price')[index]
    
    if (unitPriceElement && totalPriceElement) {
        const unitPrice = parseInt(unitPriceElement.textContent.replace(/[^\d]/g, ''))
        const totalPrice = unitPrice * counts[index]
        totalPriceElement.textContent = totalPrice.toLocaleString('fa-IR') + ' تومان'
    }
}
*/