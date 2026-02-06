gsap.from(" #page1 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

 // basic scroll trigger 

// gsap.from(" #page2 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:" #page2 .box",
//     backgroundColor:"red"
// })

gsap.from(" #page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body", 
        markers:true,
        start:"top 60%" // when this matche swith the stat of object animation is triggered 
    },
    
})



