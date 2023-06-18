const bgImageE1=document.getElementById("bg-image")
window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    bgImageE1.style.opacity = 1 - window.pageYOffset / 900;
    bgImageE1.style.backgroundSize = 160 - window.pageYOffset / 12+ "%"
}