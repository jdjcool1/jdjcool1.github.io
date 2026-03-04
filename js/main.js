const menuLinks = [
    { text: "Home", url: "Home.html" },
    { text: "TriArc Technologies", url: "tat.html" },
    { text: "Data Stream Network", url: "dsn.html" },
    { text: "Delron Security Alliance", url: "dsa.html" },
    { text: "Cosmic Galactic Alliance", url: "cga.html" },
    { text: "J.D.D", url: "jdd.html" },
    { text: "Re Launch Site", url: "index.html" }
];

function buildMenu(containerId, separator = "") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = menuLinks
        .map(link => `<a href="${link.url}">${link.text}</a>`)
        .join(separator);
}

window.onload = function () {

    buildMenu("topMenuContainer", " - ");
    buildMenu("mainMenuContainer2", " ");
    buildMenu("leftMenuContainer", " ");
    buildMenu("bottomMenuContainer", " | ");

};