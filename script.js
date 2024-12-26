gsap.registerPlugin(ScrollTrigger);
Shery.makeMagnet(".magnet")
Shery.mouseFollower();
Shery.hoverWithMediaCircle(".hvr", { videos: ["./video.mp4", "./video2.mp4", "./video3.mp4"] })

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: ".fimages",
    scroller: "body",
    pin: true,
    start: "top top",
    end: "bottom top",
    endTrigger: ".last",

    scrub: 1
  },
  y: "-300%",
  ease: Power1,


})



let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
