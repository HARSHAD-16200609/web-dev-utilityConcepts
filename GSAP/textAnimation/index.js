function breakText(){
var h1 = document.querySelector("h1")
var h1text=h1.textContent;


var text = h1text.split("");
var clutter ="";

text.forEach((char,idx)=>{

    if(idx < text.length/2){
    clutter+=`<span class="left">${char}</span>`;

    }else{
    clutter+=`<span class="right">${char}</span>`;
    }
})    
h1.innerHTML=clutter;
}

breakText();

gsap.from("h1 .left",{
    y:200,
    stagger:0.3,
    duration:0.5,
    delay:0.5,
    opacity:0
})
gsap.from("h1 .right",{
    y:200,
    stagger:-0.3,
    duration:0.5,
    delay:0.5,
    opacity:0
})