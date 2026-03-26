let seconds = 19;

let hash = window.location.hash.substring(1);

let target = hash ? hash + ".html" : "index.html";

let timer = setInterval(function () {

    document.getElementById("count").textContent = seconds;

    if (seconds === 0) {
        clearInterval(timer);
        window.location.href = target;
    }

    seconds--;

}, 1000);