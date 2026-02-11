//  gsap.to(".box", {
//       x: 300,
//       duration: 4,
//       rotation: 360,
//       repeat:3, // -1 makes it infinite
//       yoyo:true // this makes the animation of form   gsap.to then gsap.from 

//     });


//  gsap.from(".box", {
//       x: 300,
//     backgroundColor:"cyan",
//       scale:2,
//       duration: 4,
//       rotation: 360
//     });


// gsap.from("h1",{
//   y:40,
// opacity:0,
// color:"crimson",
// duration:2,
// stagger:0.2 // if - sign used then stagger reversed direction
// })



// TIMELINE


// var t1 = gsap.timeline();

// // timeline makes all animation work one after another

// t1.to(".box1",{
//   x:600,
//   rotate:360,
//   duration:1.5,
//   delay:1
// })
// t1.to(".box2",{
//   x:400,
//   duration:1,
 
//     rotate:360,
// })
// t1.to(".box3",{
//   x:200,
//   duration:2,

//     rotate:360,
// })


var tl = gsap.timeline();


tl.from("h2",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5
})
tl.from("h4",{
  y:-30,
  opacity:0,
  duration:0.6,
 stagger:0.5
})
