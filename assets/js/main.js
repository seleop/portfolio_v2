gsap.registerPlugin(ScrollTrigger);

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
    sec1Fnc();
};

/* 함수 실행 */
functionInit();
