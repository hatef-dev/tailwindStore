const oneCols = document.querySelector('.oneCols')
const twoCols = document.querySelector('.twoCols')
const countanierContent = document.querySelector('.countanierContent')
const activeCols = document.querySelector(".ActiveCols")
const deActiveCols = document.querySelector(".deActiveCols")
const deActiveTwoCols = document.querySelector(".deActiveTwoCols")
const activeTwoCols = document.querySelector(".activeTwoCols")
const brandImage = document.querySelectorAll(".brandImage")
const brandContent = document.querySelectorAll(".brandContent")
oneCols.addEventListener("click", () => {
    countanierContent.classList.remove("grid", "grid-cols-2", "gap-6")
    countanierContent.classList.add("grid", "grid-cols-1", "gap-y-6")
    // Mark state for one column
    countanierContent.classList.remove("twoColsActive")
    brandImage.forEach(image => {
        image.classList.remove("w-[120px]", "md:w-[180px]", "lg:w-[124px]")
        image.classList.add("w-[80px]", "md:w-[120px]", "lg:w-[200px]")
    })
    brandContent.forEach(content => {
        content.classList.remove("line-clamp-3")
        content.classList.add("line-clamp-6", "lg:line-clamp-6")
    })
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
    // Mark state for two columns
    countanierContent.classList.add("twoColsActive")
    brandImage.forEach(image => {
        image.classList.remove("w-[80px]", "md:w-[120px]", "lg:w-[200px]")  
        image.classList.add("w-[120px]", "md:w-[180px]", "lg:w-[124px]")
    })
    brandContent.forEach(content => {
        content.classList.remove("line-clamp-6", "lg:line-clamp-6")
        content.classList.add("line-clamp-3")
    })
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