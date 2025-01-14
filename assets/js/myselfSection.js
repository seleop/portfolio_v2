ScrollTrigger.create({
    trigger:".myselfsection",
    start:"bottom bottom",
    end :"+=100%",
    pin:true
})

const transSection = () => {
    const container = document.querySelector('.myselfsection')
    const textBoxs = document.querySelectorAll('.myselfsection-textwrap')
    const allTexts = document.querySelectorAll('.myselfsection-textwrap > li > span')
    const trigger = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=600 bottom", scrub:true}
    const imgtrigger1 = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=600 bottom", scrub:1.5}
    const imgtrigger2 = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=700 bottom", scrub:2}
    allTexts.forEach((e) => {
        new SplitType(e, {type:"line"})
    })
    gsap.from(container, {scrollTrigger:trigger, backgroundColor:"#121212", color:"#fcfcfc", ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-bold01 > li", {scrollTrigger:trigger, yPercent: -1000, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-sub01 > li", {scrollTrigger:trigger, yPercent: -1500,delay:0.4, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold02 > li", {scrollTrigger:trigger, xPercent:260, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold03 > li", {scrollTrigger:trigger, xPercent:270,delay:1, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper01", {scrollTrigger:trigger, yPercent:-350, scale:1.5, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper02", {scrollTrigger:imgtrigger1, yPercent:-350, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper03", {scrollTrigger:imgtrigger2, yPercent:-300, ease: CustomEase.create("custom", vezier)})
    gsap.to("#dateSince", {scrollTrigger:trigger, fontSize:"220px", x:-280, yPercent:50, ease: CustomEase.create("custom", vezier)})
    gsap.to("#since", {scrollTrigger:trigger, x:-1000, opacity:0,yPercent:300, ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-sub02 > li", {scrollTrigger:trigger, xPercent: -100,x:1400,yPercent:-350, fontSize:"68px", stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    textBoxs.forEach((e)=>{
        gsap.from(e.querySelectorAll('li > span'), {
            scrollTrigger:{
                trigger:e,
                start:"top 80%",
                end :"top 60%",
                scrub:true  
            },
            yPercent:100,
            stagger:0.08
        })
    })
    gsap.from(".myselfsection-myimg", {scrollTrigger:{trigger:".myselfsection-imgwrapper", start:"top 80%", end:"top 60%", scrub:true},yPercent:100})
}

transSection()