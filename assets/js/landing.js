const section1Video = document.querySelector(".section1_bg_video");
const slowVideo = () => {
    section1Video.playbackRate = 0.8;
};

const greeting = new SplitType("#point-word", { type: "chars" });
const myname1 = new SplitType("#name01", { type: "chars" });
const myname2 = new SplitType("#name02", { type: "chars" });
const subCon01 = new SplitType("#subcontents1", { type: "chars" });
const subCon02 = new SplitType("#subcontents2", { type: "chars" });
const subCon03 = new SplitType("#subcontents3", { type: "chars" });

let pointWord = gsap.timeline();
pointWord.to(greeting.chars, { duration: 0.5, ease: "expo.out", y: -300, opacity: 1 });
pointWord.to(greeting.chars, {
    duration: 2,
    ease: "power3.out",
    fontSize: "220px",
    y: -360,
    color: "#15F5BA",
    stagger: { each: 0.03, from: "center" },
});
// pointWord.to("#point-word", {duration : 1, ease : "expo.out", scale : 0.8 , stagger : 0.1})
gsap.from(".section1-horizon__line", {
    duration: 1,
    width: "0%",
    delay: 1.2,
    ease: "power3.out",
});
gsap.from("header", {
    duration: 1,
    delay: 0.5,
    y: -100,
});
gsap.from(".main-imgwrap", {
    duration: 2,
    delay: 0.5,
    scale: 0.8,
    y: -50,
    opacity: 0,
    ease: "expo.out",
});
gsap.from(myname1.chars, {
    duration: 2,
    delay: 1.4,
    stagger: 0.05,
    y: 80,
    ease: "expo.out",
});
gsap.from(myname2.chars, {
    duration: 2,
    delay: 1.35,
    stagger: 0.05,
    y: 80,
    ease: "expo.out",
});
gsap.from(subCon01.chars, {
    duration: 2,
    delay: 1.8,
    stagger: {
        each: 0.05,
        from: "left",
    },
    y: -80,
    ease: "expo.out",
});
gsap.from(subCon02.chars, {
    duration: 2,
    delay: 1.8,
    stagger: {
        each: 0.05,
        from: "center",
    },
    y: -80,
    ease: "expo.out",
});
gsap.from(subCon03.chars, {
    duration: 2,
    delay: 1.8,
    stagger: {
        each: 0.05,
        from: "right",
    },
    y: -80,
    ease: "expo.out",
});

slowVideo();
