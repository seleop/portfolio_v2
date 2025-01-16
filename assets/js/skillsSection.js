const moveXElement = (e, line, amount) => {
    gsap.from(e, {
        scrollTrigger: {
            trigger: line,
            start: "center 100%",
            end: "100% 80%",
            scrub: true,
        },
        x: amount,
        ease: CustomEase.create("custom", vezier),
    });
};

const moveYElement = (e, line, amount) => {
    gsap.from(e, {
        scrollTrigger: {
            trigger: line,
            start: "center 100%",
            end: "100% 80%",
            scrub: true,
        },
        y: amount,
        ease: CustomEase.create("custom", vezier),
    });
};

const lineAnimation = () => {
    const settings = {
        trigger: ".appeal__line04",
        start: "center 100%",
        end: "100% 83%",
        scrub: 0.5,
    };
    const modifyColorSettings = {
        trigger: ".appeal__line04",
        start: "center 95%",
        end: "100% 75%",
        scrub: 0.5,
    };
    moveYElement("#html", ".appeal__line04", 170);
    moveXElement("#css", ".appeal__line04", 360);
    moveYElement("#scss", ".appeal__line04", 170);
    moveYElement("#js", ".appeal__line04", -170);
    moveYElement("#gsap", ".appeal__line04", -170);
    moveYElement("#jquery", ".appeal__line04", -170);
    moveYElement("#react", ".appeal__line04", 170);
    moveXElement("#figma", ".appeal__line04", 550);
    moveYElement("#photoshop", ".appeal__line04", -170);
    moveXElement("#git", ".appeal__line04", -300);
    gsap.from(".multifly", {
        scrollTrigger: settings,
        opacity: 0,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from(".multifly", {
        repeat: -1,
        rotate: "1080deg",
        duration: 3,
    });
    gsap.from(".arrow", {
        scrollTrigger: settings,
        x: -200,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#dollar", {
        scrollTrigger: settings,
        x: -200,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from(".circle", {
        scrollTrigger: settings,
        opacity: 0,
        scale: 2,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#leftsvg", {
        scrollTrigger: settings,
        x: 300,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#rightsvg", {
        scrollTrigger: settings,
        x: -300,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#slash", {
        scrollTrigger: settings,
        rotate: "360deg",
        y: 170,
        opacity: 0,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.to(".section2-square", {
        scrollTrigger: settings,
        backgroundColor: "#fff",
        height: "7.5vw",
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from(".section2-horizon__line", {
        scrollTrigger: settings,
        backgroundColor: "#000",
        x: 10,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#videobox1", {
        scrollTrigger: settings,
        x: -450,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#videobox2", {
        scrollTrigger: settings,
        x: -900,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.from("#videobox3", {
        scrollTrigger: settings,
        x: -800,
        ease: CustomEase.create("custom", vezier),
    });
    gsap.to(".section2", {
        scrollTrigger: settings,
        backgroundColor: "#121212",
    });
    gsap.to(".section2", {
        scrollTrigger: modifyColorSettings,
        color: "#fff",
    });
    gsap.to(".section2", {
        scrollTrigger: modifyColorSettings,
        fill: "#fff",
    });
};

const expandLine = () => {
    const line = document.querySelector(".section2-horizon__line");
    const originWidth = parseInt(getComputedStyle(line).width)
    const setNumber = 100;
    let isExpanded = false;
    setInterval(() => {
        if (isExpanded === false) {
            line.style.width = `${originWidth + setNumber}px`;
        } else {
            line.style.width = `${originWidth}px`;
        }
        isExpanded = !isExpanded;
    }, 1500);
};
expandLine();
lineAnimation();
