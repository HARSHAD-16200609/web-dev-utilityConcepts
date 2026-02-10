function breakText(){
var h1 = document.querySelector("h1")
var h1text=h1.textContent;


var text = h1text.split("");
var clutter ="";

text.forEach((char)=>{

    clutter+=`<span>${char}</span>`;
    
})

h1.innerHTML=clutter;
}

breakText();

gsap.from("h1 span",{
    y:200,
    stagger:0.3,
    duration:1,
    ease:"power3.out",
    delay:0.5,
    opacity:0
})