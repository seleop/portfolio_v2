gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const scrollSection1 = () => {
    ScrollTrigger.create({
        trigger: ".section1",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
    });
    gsap.to(".section1-bottom__name > span", {
        scrollTrigger: {
            trigger: "#name01",
            start: "center center+=20%",
            end: "center top",
            scrub: true,
            invalidateOnRefresh: true,
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
            invalidateOnRefresh: true,
        },
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
            invalidateOnRefresh: true,
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
            invalidateOnRefresh: true,
        },
        scale: 1.7,
        filter:"brightness(1.5)",
        ease: "expo.out",
    })
    gsap.to(
        ".section1_bg_video",
        {
            scrollTrigger: {
                trigger: "#name01",
                start: "center+=1600 center",
                end: "center+=2500 top",
                scrub: 0.5,
                invalidateOnRefresh: true,
            },
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
            yPercent: -100,
            stagger: 0.07,
        })
        .to(allChars, {
            duration: 1,
            yPercent: -200,
            stagger: 0.07,
        })
        .to(allChars, {
            duration: 1,
            yPercent: -300,
            stagger: 0.07,
        });
};

scrollSection1();
sec1Fnc();