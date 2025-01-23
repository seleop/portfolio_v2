gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
const vezier = "M0,0 C0,0 0.187,-0.022 0.301,0.089 0.469,0.258 0.522,0.723 0.7,0.9 0.826,1.025 1,1 1,1 ";

const section1Video = document.querySelector(".section1_bg_video");
const workVideos = document.querySelectorAll(".workbgr");
const lenis = new Lenis({
    duration: 1,
});
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 300);
});
gsap.ticker.lagSmoothing(1000, 16);

const slowVideo = (video, rate) => {
    video.playbackRate = rate
};

const refleshPage = () => {
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    })
};

const scrollTo = () => {
    const navButtons = document.querySelectorAll(".categories li");
    const sections = [document.querySelector("body"), document.querySelector(".skillssection"), document.querySelector(".bandsection"), document.querySelector(".myselfsection")]
    navButtons.forEach((ele, index) => {
        ele.addEventListener('click', () => {
            lenis.stop();
            window.scrollTo({
                top : sections[index].offsetTop
            });
            lenis.start();
        })
    })
};
const cursorMove = () => {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
        if((e.target.tagName.toLowerCase() === 'a' ||
            e.target.tagName.toLowerCase() === 'button' ||
            e.target.tagName.toLowerCase() === 'i' ||
            e.target.classList.contains('click')
        )){
            gsap.to(cursor, {
                scale:0.3,
                duration :0.3
            })
            gsap.to(".cursor> span", {
                opacity:1,
                yPercent:30,
                duration :0.3
            })
        } else {
            gsap.to(cursor, {
                scale:1,
                duration:0.3
            })
            gsap.to(".cursor> span", {
                opacity:0,
                duration :0.3
            })
        }
    })
}

const checkVideo = () => {
    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target;
            if(entry.isIntersecting){
                target.play()
            } else {
                target.pause()
            }
        })
    }, {
        root : null,
        threshold : 0.3,
    })
    document.querySelectorAll('.observedVideo').forEach((video) => {
        ob.observe(video)
    })
}

const functionInit = () => {
    refleshPage();
    slowVideo(section1Video, 0.7);
    workVideos.forEach((e)=> {slowVideo(e, 0.6);})
    cursorMove()
    scrollTo();
    checkVideo();
};
/* 함수 실행 */
functionInit();
