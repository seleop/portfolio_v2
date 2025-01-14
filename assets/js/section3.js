gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

// ScrollTrigger.create({
//     trigger: ".mygoalsection",
//     start: "top top",
//     end: "+=75%",
//     pin: true,
//     scrub: true,
// });
const settings = {
    trigger : "#section3title",
    start : "bottom+=430 100%",
    end : "bottom+=1000 80%",
    scrub : true,
}
const moveWords = () => {
    gsap.to("#section3title", {
        scrollTrigger:settings,
        fontSize : "80px",
        color : "#15F5BA",
        ease: CustomEase.create("custom", vezier),
    })
    gsap.to(".mygoalsection-inner", {
        scrollTrigger:settings,
        gap:"100px",
        y:100,
        marginLeft:50,
        ease: CustomEase.create("custom", vezier),
    })
    gsap.to(".mygoalsection-inner-sentences > li", {
        scrollTrigger:settings,
        fontSize:"24px",
        ease: CustomEase.create("custom", vezier),
    })
    gsap.to(".mygoalsection-inner-sentences", {
        scrollTrigger:settings,
        gap:"20px", 
        ease: CustomEase.create("custom", vezier),
    })
}
const showWord = () => {
    const titleWord = new SplitType("#section3title", { type: "chars" });
    const words = document.querySelectorAll(".mygoalsection-inner-sentences > li");
    words.forEach((e) => {
        let liwords = new SplitType(e, { type: "chars" });
        gsap.from(liwords.chars, {
            scrollTrigger: {
                trigger: "#section3title",
                start: "100% 80%",
                end: "100% 35%",
                scrub: true,
            },
            y: 80,
            opacity: 0,
            stagger: 0.05,
            ease: CustomEase.create("custom", vezier),
        });
    });
    gsap.from(titleWord.chars, {
        scrollTrigger: {
            trigger: "#section3title",
            start: "100% 100%",
            end: "100% 60%",
            scrub: true,
        },
        y: 160,
        stagger: 0.05,
    });

};
const moveImage = () => {
    const image = document.querySelector("#section3img")
    gsap.from(image, {
        scrollTrigger: {
            trigger: "#section3title",
            start: "100% 100%",
            end: "100% 60%",
            scrub: true,
        },
        scale:2.5,
        y:500,
        ease: CustomEase.create("custom", vezier),
        onComplete : () => {
            gsap.to("#section3img", {
                scrollTrigger:{
                    trigger : "#section3title",
                    start : "bottom+=430 100%",
                    end : "bottom+=1000 80%",
                    scrub : true,
                },
                x : 600,
                scale:1.5,
                borderRadius:"0px",
                filter:"grayscale(0)",
                ease: CustomEase.create("custom", vezier),
            })
        }
    });
}
// moveImage();
// moveWords();
// showWord()