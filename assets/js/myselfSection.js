const transSection = () => {
    const container = document.querySelector('.myselfsection')
    const textBoxs = document.querySelectorAll('.myselfsection-textwrap')
    const image = document.querySelectorAll('.myselfsection-imgwrapper')
    const trigger = {trigger:'#dateSince', start:"bottom bottom"}
    gsap.from(container, {scrollTrigger:trigger, backgroundColor:"#121212", color:"#fcfcfc", duration : 2,ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-bold01 > li", {scrollTrigger:trigger, yPercent: -1000, stagger:{axios:"y", amount:0.05}, delay:1.25, duration : 2, ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-sub01 > li", {scrollTrigger:trigger, yPercent: -1500, stagger:{axios:"y", amount:0.05}, duration : 1.75, delay:0.75, opacity:0, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold02 > li", {scrollTrigger:trigger, xPercent:260, stagger:{axios:"y", amount:0.05}, duration : 2,ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold03 > li", {scrollTrigger:trigger, xPercent:280, stagger:{axios:"y", amount:0.05}, duration : 1.5, delay:1, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper01", {scrollTrigger:trigger, yPercent:-370, scale:2, duration : 1.5, delay:0.5,ease: CustomEase.create("custom", vezier), onComplete: () => {image[0].classList.add('hide')}})
    gsap.to(".myselfsection-imgwrapper02", {scrollTrigger:trigger, yPercent:-380, duration : 2.25, delay:0.2, ease: CustomEase.create("custom", vezier), onComplete: () => {image[1].classList.add('hide')}})
    gsap.to(".myselfsection-imgwrapper03", {scrollTrigger:trigger, yPercent:-310, duration : 1.75, delay:0.5, ease: CustomEase.create("custom", vezier), onComplete: () => {image[2].classList.add('hide')}})
    gsap.to("#dateSince", {scrollTrigger:trigger, fontSize:"220px", x:-280, yPercent:30, duration : 2, delay:0.25,ease: CustomEase.create("custom", vezier)})
    gsap.to("#since", {scrollTrigger:trigger, x:-1000, opacity:0,yPercent:300, duration : 2,ease: CustomEase.create("custom", vezier)})
    gsap.from(".myselfsection-contact-inner", {scrollTrigger:trigger, yPercent:110, delay:2.2, duration : 1.5,ease: "power3.out"})
    gsap.to(".textwrap-sub02 > li", {scrollTrigger:trigger, xPercent: -100,x:1350,yPercent:-340, marginBottom:"-20px", fontSize:"68px", duration:2, delay:1.25,stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.from(".myselfsection-resume", {scrollTrigger:trigger, yPercent:110, delay:2.5, duration : 1.5,ease: CustomEase.create("custom", vezier)})
    gsap.from(".resumeimg", {scrollTrigger:trigger, yPercent:110, delay:2.8, duration : 1.5,ease: CustomEase.create("custom", vezier)})
    textBoxs.forEach((e)=>{
        gsap.from(e.querySelectorAll('li > span'), {
            scrollTrigger:{
                trigger : e,
                start:"top 90%",
                end :"top 70%"
            },
            yPercent:100,
            stagger:0.08,
        })
    })
    gsap.from(".myselfsection-myimg", {scrollTrigger:{trigger:".myselfsection-imgwrapper01", start:"top bottom"},yPercent:100, duration:2})
}

const resumeRotate = () => {
    const text = document.querySelector('.resume-container p');
    const degree = 360 / text.innerHTML.length - 0.25
    text.innerHTML = text.innerHTML.split("").map((char, index) => `<span style="transform : rotate(${index * degree}deg);">${char}</span>`).join(" ")
}

const myselfSectionInit = () => {
    resumeRotate()
    transSection()
}

myselfSectionInit()