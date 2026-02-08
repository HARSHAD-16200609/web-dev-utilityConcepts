gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body", 
        markers:true,
        start:"top 0%" ,
        end:"top -100%",
        scrub:2, // used to map the animation with the scroll
        pin:true // whenver used the trigger should be on the parent of the element being animated 

    }
})
