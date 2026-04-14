window.addEventListener("DOMContentLoaded", function () {

    let seconds = 59;

    let hash = window.location.hash.substring(1);
    let target = hash ? hash + ".html" : "loop.html";

    let box = document.getElementById("box");

    let timer = setInterval(function () {

        document.getElementById("count").textContent = seconds;

        box.classList.remove("boxg", "boxw", "boxr");

        if (seconds > 30) {
            box.className = "boxg";
        } else if (seconds > 10) {
            box.className = "boxw";
        } else {
            box.className = "boxr";
        }

        if (seconds === 0) {
            clearInterval(timer);
            window.location.href = target;
        }

        seconds--;

    }, 1000);

});
