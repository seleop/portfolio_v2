const detailbox = document.querySelectorAll(".section6-detail");
const detailimgwrap = document.querySelectorAll(".detail-img");
const detailbgr = document.querySelectorAll(".detail-bgr");
const videos = document.querySelectorAll(".workVideo");
const detailcontext = document.querySelectorAll(".detail-context");
const featuredWork = new SplitType(document.querySelector("#featuredWork"), { type: "chars" });

// let mm = gsap.matchMedia()
// let breakPoint = 1280;

// mm.add({
//     isDesktop : `(min-width: ${breakPoint}px)`,
//     isLaptop : `(min-width : ${breakPoint}px)`
// }, (context) => {
//     let { isDesktop, isLaptop} = context.conditions
// })

gsap.from(featuredWork.chars, {
    scrollTrigger: { trigger: "#featuredWork", start: "top 80%", end: "top center", scrub: 2 },
    yPercent: 50,
    stagger: 0.05,
    opacity: 0,
});
for (let i = 0; i < detailbox.length; i++) {
    {
        const currentdetail = detailbox[i];
        const currentimgwrap = detailimgwrap[i];
        const currentVideo = videos[i];
        const currentbgr = detailbgr[i];
        const currentContext = detailcontext[i];
        const windowWidth = window.innerWidth; /* 해상도 넓이 */
        let isAnimating = false;

        const resetAnimation = () => {
            gsap.killTweensOf([currentdetail, currentContext, currentVideo, currentimgwrap, currentbgr]);
        };

        currentimgwrap.addEventListener("mouseenter", () => {
            /* 분리할 기능 */
            const viewingDetail = (fullWidth, fullHeight, imgWidth) => {
                gsap.timeline()
                    .fromTo(currentdetail, {width:"100%", height:"100%"}, { width: fullWidth, height: fullHeight, duration: 0.5, ease: CustomEase.create("custom", vezier) })
                    .to(currentContext, { opacity: 1, duration: 0.5, ease: CustomEase.create("custom", vezier) }, 0);
                gsap.to(currentimgwrap, {
                    width: imgWidth,
                    aspectRatio: "1.83 / 1",
                    top: "50%",
                    right: "2%",
                    translateY: "-50%",
                    border: "3px solid #fff",
                    ease: CustomEase.create("custom", vezier),
                    invalidateOnRefresh: true
                });
            };

            /* 애니메이션 중첩 방지 */
            if (isAnimating) return;
            resetAnimation();
            isAnimating = true;

            /* 뷰포트 1440px 이상 */
            if (windowWidth >= 1440) {
                viewingDetail("250%", "250%", "800px");
            } else if (windowWidth >= 1280 && windowWidth < 1440) {
                /* 뷰포트 1280이상 */
                viewingDetail("250%", "150%", "700px");
            }
            if (i === 2) {
                /* 레노버 이미지, 영상 교체 */
                currentVideo.classList.remove("hide");
                document.querySelector(".detail-img > img").classList.add("hide");
            }
            gsap.to(currentVideo, {
                borderRadius: "0px",
                onComplete: () => {
                    currentVideo.play();
                },
            });
        });

        currentdetail.addEventListener("mouseleave", () => {
            if (!isAnimating) return;
            resetAnimation();

            const returnWidth = (originWidth, ratio) => {
                gsap.to(currentimgwrap, {
                    width: originWidth,
                    aspectRatio : ratio,
                    border: "none",
                    right: "0%",
                    ease: CustomEase.create("custom", vezier),
                    invalidateOnRefresh: true
                    
                });
            };
            if (windowWidth >= 1440) {
                returnWidth("593px", "1.83 / 1");
            }
            else if (windowWidth >= 1280 && windowWidth < 1440) {
                returnWidth("410px", "1.39 / 1");
            }

            gsap.timeline({
                onComplete: () => {
                    isAnimating = false;
                },
            })
                .to(currentdetail, { width: "100%", height: "100%", ease: CustomEase.create("custom", vezier) })
                .to(currentContext, { opacity: 0 }, 0);
            gsap.to(currentVideo, {
                borderRadius: "20px",
                onStart: () => {
                    currentVideo.pause();
                    currentVideo.currentTime = 0;
                    if (i === 2) {
                        currentVideo.classList.add("hide");
                        document.querySelector(".detail-img > img").classList.remove("hide");
                    }
                },
            });
        });
    }
}
