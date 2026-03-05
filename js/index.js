let seconds = 4;

let timer = setInterval(function () {

    document.getElementById("count").textContent = seconds;

    if (seconds === 0) {
        clearInterval(timer);
        window.location.href = "Home.html";
    }

    seconds--;


}, 1000);
