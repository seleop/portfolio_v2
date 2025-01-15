ScrollTrigger.create({
    trigger:".myselfsection",
    start:"top top",
    end :"+=90%",
    pin:true
})

const transSection = () => {
    const container = document.querySelector('.myselfsection')
    const textBoxs = document.querySelectorAll('.myselfsection-textwrap')
    const trigger = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=600 bottom", scrub:true}
    const imgtrigger1 = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=600 bottom", scrub:1.5}
    const imgtrigger2 = {trigger:'#dateSince', start:"bottom+=200 bottom", end:"bottom+=700 bottom", scrub:2}
    gsap.from(container, {scrollTrigger:trigger, backgroundColor:"#121212", color:"#fcfcfc", ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-bold01 > li", {scrollTrigger:trigger, yPercent: -1000, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-sub01 > li", {scrollTrigger:trigger, yPercent: -1500, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold02 > li", {scrollTrigger:trigger, xPercent:260, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myself-textwrap-bold03 > li", {scrollTrigger:trigger, xPercent:280, stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper01", {scrollTrigger:trigger, yPercent:-370, scale:1.5, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper02", {scrollTrigger:imgtrigger1, yPercent:-380, ease: CustomEase.create("custom", vezier)})
    gsap.to(".myselfsection-imgwrapper03", {scrollTrigger:imgtrigger2, yPercent:-310, ease: CustomEase.create("custom", vezier)})
    gsap.to("#dateSince", {scrollTrigger:trigger, fontSize:"220px", x:-280, yPercent:30, ease: CustomEase.create("custom", vezier)})
    gsap.to("#since", {scrollTrigger:trigger, x:-1000, opacity:0,yPercent:300, ease: CustomEase.create("custom", vezier)})
    gsap.from(".myselfsection-contact-inner", {scrollTrigger:trigger, yPercent:110, delay:2, ease: CustomEase.create("custom", vezier)})
    gsap.to(".textwrap-sub02 > li", {scrollTrigger:trigger, xPercent: -100,x:1350,yPercent:-340, marginBottom:"-20px", fontSize:"68px", stagger:{axios:"y", amount:0.05}, ease: CustomEase.create("custom", vezier)})
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