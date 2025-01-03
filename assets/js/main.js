gsap.registerPlugin(ScrollTrigger);

const section1Video = document.querySelector(".section1_bg_video");
const slowVideo = () => {
    section1Video.playbackRate = 0.8;
};

const landingfnc = () => {
    const greeting = new SplitType("#point-word", { type: "chars" });
    const myname1 = new SplitType("#name01", { type: "chars" });
    const myname2 = new SplitType("#name02", { type: "chars" });
    let pointWord = gsap.timeline();
    pointWord.to(greeting.chars, { duration: 0.5, ease: "expo.out", y: -200 });
    pointWord.to(greeting.chars, { duration: 2, ease: "power3.out", fontSize: "240px", y: -320, color: "#15F5BA", stagger: { each: 0.03, from: "center" } });
    // pointWord.to("#point-word", {duration : 1, ease : "expo.out", scale : 0.8 , stagger : 0.1})
    gsap.from(".section1-horizon__line", {
        duration: 1,
        width: "0%",
        delay: 0.5,
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
    
};

const functionInit = () => {
    slowVideo();
    landingfnc();
};

/* 함수 실행 */
functionInit();
