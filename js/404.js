let seconds = 20;

let timer = setInterval(function () {

    document.getElementById("count").textContent = seconds;

    if (seconds === 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    }

    seconds--;


}, 1000);
