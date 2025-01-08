gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const scrollSection1 = () => {
    ScrollTrigger.create({
        trigger: ".section1",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
    });
    gsap.to(".section1-bottom__name > span", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center center+=20%",
            end: "center top",
            scrub: true,
        },
        stagger: 0.15,
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
        },
        delay: 0.15,
        stagger: 0.15,
        opacity: 0,
        x: 500,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.to(".section1-bottom__subcontents > div", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center center+=20%",
            end: "center top",
            scrub: true,
        },
        delay: 0.15,
        opacity: 0,
        y: 100,
        ease: CustomEase.create("custom", vezier),
    })
    gsap.to(".section1_bg_video", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center+=200 center",
            end: "center+=800 top",
            scrub: true,
        },
        scale: 1.7,
        brightness : 1.5,
        ease: "expo.out",
    })
    gsap.to("#section1img", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center+=200 center",
            end: "center+=800 top",
            scrub: true,
        },
        opacity : 0,
        scale: 0.2,
        ease: CustomEase.create("custom", vezier),
    })
    gsap.to(
        ".section1_bg_video",
        {
            scrollTrigger: {
                trigger: "#name01",
                start: "center+=1600 center",
                end: "center+=2500 top",
                scrub: 0.5,
            },
            duration: 0.5,
            backgroundPosition: "50% 0px"
        }
    );
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

scrollSection1();
sec1Fnc();