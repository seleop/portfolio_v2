const loadingText = new SplitType("#loading__name", {type : "chars"});

const hideLoading = () => {
    gsap.to("#loading", {
        duration:0.6,
        opacity:0,
        onComplete : () => {
            document.querySelector('#loading').style.display = 'none';
        }
    })
}
gsap.from(loadingText.chars, {
    duration : 1,
    x : 100,
    stagger: 0.1,
    autoAlpha:0,
})
gsap.from(loadingText.chars, {
    duration : 2,
    y : 50,
    stagger :0.1,
    ease:"power3.out",
    onComplete : () => {
        hideLoading();
        document.querySelector('#contents').style.display = 'block';
    }
})

gsap.to(loadingText.chars, {
    delay:1.2,
    duration:2,
    letterSpacing : "1rem",
    stagger :0.1,
    ease:"power1.out",
})