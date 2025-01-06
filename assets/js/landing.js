const slowVideo = () => {
    const section1Video = document.querySelector(".section1_bg_video");
    section1Video.playbackRate = 0.8;
};

const landing = () => {
    const greeting = new SplitType("#point-word", { type: "chars" });
    const myname1 = new SplitType("#name01", { type: "chars" });
    const myname2 = new SplitType("#name02", { type: "chars" });
    const subCon01 = new SplitType("#subcontents1", { type: "chars" });
    const subCon02 = new SplitType("#subcontents2", { type: "chars" });
    const subCon03 = new SplitType("#subcontents3", { type: "chars" });
    const subCon04 = new SplitType("#studiedhard", { type: "chars" });
    const subCon05 = new SplitType("#forbetter", { type: "chars" });
    let pointWord = gsap.timeline();
    pointWord.to(greeting.chars, { duration: 0.5, ease: "expo.out", y: -200, opacity: 1 });
    pointWord.to(greeting.chars, {
        duration: 2,
        ease: "power3.out",
        fontSize: "220px",
        y: -360,
        color: "#15F5BA",
        stagger: { each: 0.03, from: "center" },
    });
    gsap.to(".section1", {
        duration: 1,
        delay: 0.5,
        backgroundColor: "transparent",
    });
    gsap.from(".section1-horizon__line", {
        duration: 1,
        width: "0%",
        delay: 1.2,
        ease: "power3.out",
    });
    gsap.from("header", {
        duration: 1,
        delay: 0.5,
        y: -150,
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
    gsap.from(subCon04.chars, {
        duration: 2,
        delay: 1.8,
        stagger: {
            each: 0.05,
            from: "end",
        },
        y: 80,
        ease: "expo.out",
    });
    gsap.from(".section1-spanwrap", {
        duration: 2,
        delay: 1.8,
        x: 200,
        ease: "expo.out",
    });
    gsap.from(subCon05.chars, {
        duration: 2,
        delay: 1.8,
        stagger: {
            each: 0.05,
            from: "end",
        },
        y: 80,
        ease: "expo.out",
    });
};

const loading = () => {
    const loadingText = new SplitType("#loading__name", { type: "chars" });

    const hideLoading = () => {
        gsap.to("#loading", {
            duration: 0.6,
            opacity: 0,
            onComplete: () => {
                document.querySelector("#loading").style.display = "none";
            },
        });
    };
    gsap.from(loadingText.chars, {
        duration: 1,
        x: 100,
        stagger: 0.1,
        autoAlpha: 0,
    });
    gsap.from(loadingText.chars, {
        duration: 2,
        y: 50,
        stagger: 0.1,
        ease: "power3.out",
        onComplete: () => {
            hideLoading();
            document.querySelector("#contents").style.display = "block";
        },
    });

    gsap.to(loadingText.chars, {
        delay: 1.2,
        duration: 2,
        letterSpacing: "1rem",
        stagger: 0.1,
        ease: "power1.out",
    });
};
// loading();
// setTimeout(landing, 2900)

landing();
slowVideo();
