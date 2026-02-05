//  gsap.to(".box", {
//       x: 300,
//     borderRadius:"50%",
//     backgroundColor:"cyan",
//       scale:2,
//       duration: 4,
//       rotation: 360
//     });


//  gsap.from(".box", {
//       x: 300,
//     backgroundColor:"cyan",
//       scale:2,
//       duration: 4,
//       rotation: 360
//     });


gsap.from("h1",{
  y:40,
opacity:0,
color:"crimson",
duration:2,
stagger:0.2 // if - sign used then stagger reversed direction
})