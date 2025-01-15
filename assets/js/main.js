gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
const vezier = "M0,0 C0,0 0.187,-0.022 0.301,0.089 0.469,0.258 0.522,0.723 0.7,0.9 0.826,1.025 1,1 1,1 ";

const section1Video = document.querySelector(".section1_bg_video");
const workVideos = document.querySelectorAll(".workbgr");

const slowVideo = (video, rate) => {
    video.playbackRate = rate
};
const settingScroll = () => {
    const lenis = new Lenis({
        duration: 1,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 150);
    });
    gsap.ticker.lagSmoothing(0);
};
const refleshPage = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
};
// const lockScrolling = () => {
//     window.addEventListener("wheel", preventScroll, { passive : false})
//     window.addEventListener("scroll", preventScroll, { passive : false})
// }
// const unlockScrolling = () => {
//     window.removeEventListener("wheel", preventScroll, { passive : false })
//     window.removeEventListener("scroll", preventScroll, { passive : false })
// }
// function preventScroll(e){
//     e.preventDefault();
// }

const functionInit = () => {
    refleshPage();
    settingScroll();
    slowVideo(section1Video, 0.7);
    workVideos.forEach((e)=> {slowVideo(e, 0.6);})
};

/* 함수 실행 */
functionInit();
