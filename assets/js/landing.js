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
    pointWord.to(greeting.chars, {
        duration: 2,
        ease: "power3.out",
        fontSize: "220px",
        y: -360,
        color: "#15F5BA",
        stagger: { each: 0.03, from: "center" },
        onComplete: () => {
            gsap.fromTo(
                greeting.chars,
                {
                    y: -360,
                    fontSize: "220PX",
                },
                {
                    scrollTrigger: {
                        trigger: "#name01",
                        start: "center+=200 center",
                        end: "center+=800 top",
                        scrub: true,
                    },
                    y: -220,
                    stagger: 0.1,
                    fontSize: "300px",
                    rotateX: "360deg",
                    color: "#E55901",
                    ease: CustomEase.create("custom", vezier),
                }
            );
        },
    });
    gsap.fromTo(
        greeting.chars,
        {
            y: -220,
        },
        {
            scrollTrigger: {
                trigger: "#name01",
                start: "center+=1600 center",
                end: "center+=2500 top",
                scrub: 0.5,
            },
            duration: 0.5,
            yPercent: 300,
        }
    );
    gsap.to(
        greeting.chars,
        {
            scrollTrigger: {
                trigger: "#name01",
                start: "center+=2550 center",
                end: "center+=2600 top",
                scrub:true,
            },
            opacity: 0,
        }
    );
    gsap.to(".section1-horizon__line", {
        duration: 1,
        width: "100%",
        delay: 1.2,
        ease: "power3.out",
        onComplete: () => {
            gsap.fromTo(
                ".section1-horizon__line",
                {
                    width: "100%",
                },
                {
                    scrollTrigger: {
                        trigger: "#name01",
                        start: "center center+=20%",
                        end: "center top",
                        scrub: true,
                    },
                    delay: 0.15,
                    duration: 1,
                    width: "0%",
                    ease: CustomEase.create("custom", vezier),
                }
            );
        },
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
loading();
setTimeout(landing, 2900)

// landing();
