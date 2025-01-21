ScrollTrigger.create({
    trigger:".introduceSection",
    start:"top top",
    end:"+=40%",
    pin:true,
    scrub: true,
})
const creative = new SplitType("#creative", {type:"chars"});
const spans = document.querySelectorAll("[data-key]")
spans.forEach((span) => {
    gsap.from(span, {
        scrollTrigger:{
            trigger:span,
            start : "0% 100%",
            end :"0% 92%",
            scrub:true,
        },
        y:100,
        opacity:0,
    })
})

const afterSettings = {
    trigger : ".introduceSection-rightblock-line1",
    start :"bottom+=750 bottom",
    end :"bottom+=1100 bottom",
    scrub : true,
}

gsap.from("#gladtolearn",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line1").offsetWidth - document.querySelector("#gladtolearn").offsetWidth)
    },
    // duration:1,
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#new",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line2").offsetWidth - document.querySelector("#something").offsetWidth)
    },
    // duration:1,
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#meeting",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector("#meeting").offsetWidth - document.querySelector("#like").offsetWidth)
    },
    ease: CustomEase.create("custom", vezier),
})
gsap.to("#new2",{
    scrollTrigger:afterSettings,
    x : () => {
        return document.querySelector("#new2").offsetWidth / 1.8
    },
    ease: CustomEase.create("custom", vezier),
})
gsap.to("#people",{
    scrollTrigger:afterSettings,
    x : () => {
        return -( document.querySelector("#new2").offsetWidth)
    },
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#my",{
    scrollTrigger:afterSettings,
    x : () => {
        return ( document.querySelector("#new2").offsetWidth)
    },
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#communicate",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line2").offsetWidth -  document.querySelector("#communicate").offsetWidth)
    },
    delay:0.1,
    color:"#fcfcfc",
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#passionate",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line2").offsetWidth -  document.querySelector("#passionate").offsetWidth)
    },
    delay:0.2,
    color:"#fcfcfc",
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#flexible",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line2").offsetWidth -  document.querySelector("#flexible").offsetWidth)
    },
    // duration:1,
    delay:0.3,
    color:"#fcfcfc",
    ease: CustomEase.create("custom", vezier),
})
gsap.from("#and",{
    scrollTrigger:afterSettings,
    x : () => {
        return (document.querySelector(".introduceSection-rightblock-line2").offsetWidth - document.querySelector("#and").offsetWidth)
    },
    delay:0.4,
    ease: CustomEase.create("custom", vezier),
})
// gsap.from(".introduceSection-background > img",{
//     scrollTrigger:{trigger:".introduceSection-background > img", start :"top 100%", end :"top top   ", scrub:2},
//     opacity : 0,
//     ease: CustomEase.create("custom", vezier),
// })
// gsap.from(".introduceSection-background > img",{
//     scrollTrigger:afterSettings,
//     objectPosition : "50% 100%",
//     delay:0.4,
//     ease: CustomEase.create("custom", vezier),
// })
gsap.from(creative.chars,{
    scrollTrigger:{
        trigger : ".introduceSection-rightblock-line1",
        start :"bottom+=900 bottom",
        end :"bottom+=1150 bottom",
        scrub : true,
    },
    x : () => {
        return document.querySelector("#creative").offsetWidth
    },
    delay:1.5,
    stagger:0.05,
    color:"#fcfcfc",
    ease: CustomEase.create("custom", vezier),
})
gsap.from('.introduceSection-left-third > strong', {scrollTrigger:afterSettings, color:"#E55901", border:"1px solid #E55901"})
new Ukiyo(".ukiyo")