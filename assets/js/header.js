const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        header.classList.add("on");
        header.classList.add("off");
        console.log("active");
    } else {
        header.classList.remove("on");
        header.classList.add("off");
    }
});

const getTime = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const clock = document.querySelector("#clock");
    const today = document.querySelector("#clock-date");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
    today.innerHTML = date.toDateString();
};
getTime()
setInterval(() => {getTime()}, 1000);
