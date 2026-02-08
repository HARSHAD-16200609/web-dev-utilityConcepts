gsap.registerPlugin(MorphSVGPlugin);

gsap.set("#lightning", { opacity: 0 });

gsap.to("#diamond", {
  morphSVG: "#lightning",
  duration: 2,
  ease: "expo.inOut",
  repeat: 1,
  yoyo: true
});
