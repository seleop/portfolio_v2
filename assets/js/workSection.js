const titletext = document.querySelector("#featuredWork")
const showWorks = () => {
    const works = document.querySelectorAll('.worksection-workplace-work')
    works.forEach((e) => {
        const workstrigger = {trigger : e, start : "top bottom", end :"top 70%", scrub : 2}
        gsap.from(e, {
            scrollTrigger : workstrigger,
            opacity:0,
            x : 1400,
            rotateY:"50deg",
            duration : 1,
            ease: CustomEase.create("custom", vezier),
        })
    })
}

ScrollTrigger.create({
    trigger: ".worksection",
    start: "bottom bottom",
    end: "+=300%",
    pin: true,
    pinSpacing: false,
});

gsap.to(".worksection-title", {
    scrollTrigger:{
        trigger:"titletext",
        start :"center center",
        end :"+=500%",
        scrub : 2
    },
    y: () => { return document.querySelector('.worksection').offsetHeight}
})

showWorks()