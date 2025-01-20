const container = document.querySelector(".clonesection");
const titleText = document.querySelector("#clonecoding");
const changeColor = { trigger: titleText, start: "center bottom", end: "bottom bottom", scrub: true };
gsap.from(container, { scrollTrigger: changeColor, backgroundColor: "#121212" });
gsap.from(titleText, { scrollTrigger: changeColor, color: "#fcfcfc" });
gsap.to(".clonesection-background > img", {
    scrollTrigger: { trigger: ".clonesection-background > img", start: "top 100%", endTrigger: ".othersection", end: "top top", scrub: 2.5 },
    objectPosition: "50% 0%",
});
gsap.to(".clonesection-container-title", { scrollTrigger: { trigger: titleText, start: "center 65%", end: "+=300%", scrub: 2 }, y: 2000 });
