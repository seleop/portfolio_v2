const detailbox = document.querySelectorAll(".section6-detail");
const detailimgwrap = document.querySelectorAll(".detail-img");
const detailbgr = document.querySelectorAll(".detail-bgr")
const img = document.querySelectorAll(".detail-img > img");
const detailcontext = document.querySelectorAll(".detail-context")
for (let i = 0; i < detailbox.length; i++) {
    let currentdetail = detailbox[i];
    let currentimgwrap = detailimgwrap[i];
    let currentimages = img[i];
    let currentbgr = detailbgr[i];
    let currentContext = detailcontext[i];
    currentdetail.addEventListener("mouseenter", () => {
        gsap.to(currentdetail, {
            width: "250%",
            height: "250%",
            duration:0.5,
            ease: CustomEase.create("custom", vezier),
        });
        gsap.to(currentimgwrap, {
            top: "50%",
            right :"2%",
            translateY: "-50%",
            width: "800px",
            height: "420px",
            duration:0.5,
            border: "3px solid #ffffff",
            ease: CustomEase.create("custom", vezier),
        });
        gsap.to(currentimages, {
            borderRadius: "0px",
        });
        gsap.from(currentbgr, {
            opacity: 0,
            duration:0.5,
            ease: CustomEase.create("custom", vezier),
        });
        gsap.to(currentContext, {
            delay:0.5,
            opacity:1,
            duration:0.5,
            ease: CustomEase.create("custom", vezier),
        });
        /* 마우스탈출 */
        currentdetail.addEventListener("mouseleave", () => {
            gsap.fromTo(
                currentdetail,
                {
                    width: "250%",
                    height: "250%",
                },
                {
                    width: "100%",
                    height: "100%",
                    ease: CustomEase.create("custom", vezier),
                }
            );
            gsap.fromTo(
                currentimgwrap,
                {
                    top: "50%",
                    translateY: "-50%",
                    width: "800px",
                    height: "420px",
                    border: "3px solid #ffffff",
                    right :"2%",
                },
                {
                    top: "-50%",
                    translateY: "50%",
                    width: "593px",
                    height: "324px",
                    border: "none",
                    right :"0%",
                    ease: CustomEase.create("custom", vezier),
                }
            );
            gsap.fromTo(
                currentimages,
                {
                    borderRadius: "0px",
                },
                {
                    borderRadius: "20px"
                }
            );
            gsap.fromTo(
                currentContext, {opacity:1},
                {opacity : 0}
            )
        });
    });
}
