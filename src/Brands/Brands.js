const oneCols = document.querySelector('.oneCols')
const twoCols = document.querySelector('.twoCols')
const countanierContent = document.querySelector('.countanierContent')
const activeCols = document.querySelector(".ActiveCols")
const deActiveCols = document.querySelector(".deActiveCols")
const deActiveTwoCols = document.querySelector(".deActiveTwoCols")
const activeTwoCols = document.querySelector(".activeTwoCols")
oneCols.addEventListener("click", () => {
    countanierContent.classList.remove("grid", "grid-cols-2", "gap-6")
    countanierContent.classList.add("grid", "grid-cols-1", "gap-y-6")
    // Show one column active state
    activeCols.classList.remove("hidden")
    activeCols.classList.add("block")
    deActiveCols.classList.remove("block")
    deActiveCols.classList.add("hidden")
    
    // Hide two column active state
    deActiveTwoCols.classList.remove("hidden")
    deActiveTwoCols.classList.add("block")
    activeTwoCols.classList.remove("block")
    activeTwoCols.classList.add("hidden")
})

twoCols.addEventListener("click", () => {
    countanierContent.classList.remove("grid", "grid-cols-1", "gap-y-6")
    countanierContent.classList.add("grid", "grid-cols-2", "gap-6")
    activeCols.classList.remove("block")
    activeCols.classList.add("hidden")
    deActiveCols.classList.remove("hidden")
    deActiveCols.classList.add("block")
    
    // Show two column active state
    deActiveTwoCols.classList.remove("block")
    deActiveTwoCols.classList.add("hidden")
    activeTwoCols.classList.remove("hidden")
    activeTwoCols.classList.add("block")
})