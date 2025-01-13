const detailbox = document.querySelectorAll(".section6-detail");
const detailimgwrap = document.querySelectorAll(".detail-img");
const detailbgr = document.querySelectorAll(".detail-bgr");
const img = document.querySelectorAll(".detail-img > img");
const detailcontext = document.querySelectorAll(".detail-context");


detailbox.forEach((currentdetail, i) => {
    const currentimgwrap = detailimgwrap[i];
    const currentimages = img[i];
    const currentbgr = detailbgr[i];
    const currentContext = detailcontext[i];
    let isAnimating = false;

    const resetAnimation = () => {
        gsap.killTweensOf([currentdetail, currentContext, currentimages, currentimgwrap, currentbgr]);
    };

    currentdetail.addEventListener("mouseenter", () => {
        if (isAnimating) return;
        resetAnimation();
        isAnimating = true;

        gsap.timeline()
            .to(currentdetail, { width: "250%", height: "250%", duration: 0.5, ease: CustomEase.create("custom", vezier) })
            .to(currentContext, { opacity: 1, duration: 0.5, ease: CustomEase.create("custom", vezier) }, 0);
        
        gsap.to(currentimages, { borderRadius: "0px" });
        gsap.to(currentimgwrap, { width: "800px", height: "420px", top: "50%", right: "2%", translateY: "-50%",border: "3px solid #fff", ease: CustomEase.create("custom", vezier) });
    });

    currentdetail.addEventListener("mouseleave", () => {
        if (!isAnimating) return;
        resetAnimation();

        gsap.timeline({ onComplete: () => { isAnimating = false; } })
            .to(currentdetail, { width: "100%", height: "100%", ease: CustomEase.create("custom", vezier) })
            .to(currentContext, { opacity: 0 }, 0);
        
        gsap.to(currentimgwrap, { width: "593px", height: "324px", border: "none", right:"0%",ease: CustomEase.create("custom", vezier) });
        gsap.to(currentimages, { borderRadius: "20px" });
    });
});