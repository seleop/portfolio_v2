const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1700) {
        header.classList.add("on");
    } else {
        header.classList.remove("on");
    }
});

const getTime = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const clock = document.querySelector("#clock");
    const today = document.querySelector("#clock-date");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    today.innerHTML = date.toDateString();
};


const headerFunctionInit = () => {
    getTime();
    setInterval(() => {
        getTime();
    }, 1000);
}


headerFunctionInit()