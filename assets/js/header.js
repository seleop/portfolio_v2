const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
        header.classList.add('active');
        console.log('active')
    }
    else {
        header.classList.remove('active');
    }
})