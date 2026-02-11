const main = document.querySelector(".main")
const cursor = document.querySelector(".cursor")
const goku = document.querySelector(".goku")


window.addEventListener("mousemove",(dets)=>{
gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})

})

goku.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:2,

    })
})
goku.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1,
        ease:"power3",
        duration:0.5
    })
})

