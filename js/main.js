const menuLinks = [
    { text: "Home", url: "Home.html" menus:["top","main","left","bottom"] },
    { text: "TriArc Technologies", url: "tat.html" menus:["top","main","bottom"] },
    { text: "Data Stream Network", url: "dsn.html" menus:["top","main","bottom"] },
    { text: "Delron Security Alliance", url: "dsa.html" menus:["top","main","bottom"] },
    { text: "Cosmic Galactic Alliance", url: "cga.html" menus:["top","main","bottom"] },
    { text: "J.D.D", url: "jdd.html" menus:["top","left","bottom"] },
    { text: "Re Launch Site", url: "index.html" menus:["top","bottom"] }
];

function buildMenu(containerId, menuName, separator = "") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const links = menuLinks
        .filter(item => item.menus.includes(menuName))
        .map(item => `<a href="${item.url}">${item.text}</a>`);

    container.innerHTML = links.join(separator);
}

window.onload = function () {

    buildMenu("topMenuContainer", "top", " - ");
    buildMenu("mainMenuContainer2", "main", " ");
    buildMenu("leftMenuContainer", "left", " ");
    buildMenu("bottomMenuContainer", "bottom", " | ");

};