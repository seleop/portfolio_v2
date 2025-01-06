gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
const vezier = "M0,0 C0,0 0.187,-0.022 0.301,0.089 0.469,0.258 0.522,0.723 0.7,0.9 0.826,1.025 1,1 1,1 ";
const settingScroll = () => {
    const lenis = new Lenis({
        duration: 2,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
};
const refleshPage = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
};
const scrollSection1 = () => {
    ScrollTrigger.create({
        trigger: ".section1",
        start: "top top",
        end: "+=200%",
        pin: true,
        anticipatePin: 1,
        scrub: true,
    });
    gsap.to(".section1-bottom__name > span", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center center+=20%",
            end: "center top",
            scrub: true,
            markers: true,
        },
        stagger: 0.15,
        duration: 1,
        x: -300,
        opacity: 0,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.to(".section1-bottom__contents > div", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center center+=20%",
            end: "center top",
            scrub: true,
            markers: true,
        },
        delay: 0.15,
        duration: 1,
        stagger: 0.15,
        opacity: 0,
        x: 500,
        ease: CustomEase.create("custom", vezier),
    });
};
const sec1Fnc = () => {
    const contents = document.querySelectorAll(".section1-words");
    contents.forEach((e) => {
        content = new SplitType(e, { type: "chars" });
    });
    const allChars = document.querySelectorAll(".section1-words .char");
    const contentstl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
    });
    contentstl
        .to(allChars, {
            duration: 1,
            y: -50,
            stagger: 0.07,
        })
        .to(allChars, {
            duration: 1,
            y: -100,
            stagger: 0.07,
        })
        .to(allChars, {
            duration: 1,
            y: -150,
            stagger: 0.07,
        });
};
const functionInit = () => {
    refleshPage();
    settingScroll();
    scrollSection1();
    sec1Fnc();
};

/* 함수 실행 */
functionInit();
