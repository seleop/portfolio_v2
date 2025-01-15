ScrollTrigger.create({
    trigger: ".othersection",
    start: "top top",
    end: "+=150%",
    pin: true,
});

const backgroundVideo = document.querySelector(".otherbgrvideo");
gsap.to(backgroundVideo, {
    scrollTrigger: { trigger: ".othersection", start: "top bottom", end: "bottom bottom", scrub: 1 },
    objectPosition: "50% 50%",
    filter: "brightness(0.25)",
});


const moveText = () => {
    const titleText = new SplitType("#othersectionTitle", { type: "chars" });
    const subText = new SplitType("#othersectionsub", { type: "chars" });
    const titleBox = document.querySelector(".othersection-title");
    const otherTl = gsap.timeline({ scrollTrigger: { trigger: ".othersection", start: "bottom bottom", end: "+=120%", scrub: 2 } });
    otherTl
        .from(titleText.chars, { stagger: 0.08, y: 100, opacity: 0 })
        .from(subText.chars, { stagger: 0.05, y: 100, opacity: 0 }, 0)
        .to(titleBox, { scale: "0.33", duration: 0.5, ease: CustomEase.create("custom", vezier) })
        .to(".othersection-bgr", { width: "100%", height: "100%", duration: 0.5, ease: CustomEase.create("custom", vezier) }, 1.2);
};

const showOtherWorks = () => {
    const works = document.querySelectorAll(".othersection-works");
    const worktrigger = { trigger: "#othersectionsub", start: "center+=1300 bottom", end: "center+=1700 bottom", scrub: 1 };
    gsap.from(works, { scrollTrigger: worktrigger, stagger: { from: "random", amount: 0.5 }, opacity: 0, y: 150, ease: CustomEase.create("custom", vezier) });
};

const moveOtherWorks = () => {
    const works = document.querySelectorAll(".othersection-works");
    works.forEach((e) => {
        gsap.to(e, {
            scrollTrigger:{
                trigger:".othersection",
                start :"bottom+=1 bottom",
                end :"bottom+=120% bottom",
                scrub:2,
            },
            yPercent:200
        })
    })
};

moveText();
showOtherWorks();
moveOtherWorks();
