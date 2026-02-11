

const box = document.getElementById("string");
const path = document.querySelector("#line");

const setPath = gsap.quickSetter(path, "attr", "d");


const initialPath = "M 10 80 Q 95 80 180 80";

let isDragging = false;

box.addEventListener("mousedown", () => {
  isDragging = true;
  box.style.cursor = "grabbing"; 
});

box.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = box.querySelector("svg").getBoundingClientRect();
  
  let relX = e.clientX - rect.left; 
  let relY = e.clientY - rect.top;

  relY = Math.max(10, Math.min(150, relY)); 

  const newPath = `M 10 80 Q ${relX} ${relY} 180 80`;

  gsap.to(path, {
    attr: { d: newPath },
    duration: 0.2,
    ease: "power2.out"
  });
});

const releaseString = () => {
  if (!isDragging) return;

  isDragging = false;
  box.style.cursor = "grab"; 

  gsap.to(path, {
    attr: { d: initialPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)" 
  });
};

box.addEventListener("mouseup", releaseString);
box.addEventListener("mouseleave", releaseString);

box.style.cursor = "grab";
