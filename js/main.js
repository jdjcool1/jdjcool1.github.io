const menuLinks = [
    { id:"home", text:"Home", url:"Home.html", menus:["top","main","left","bottom"] },

    { id:"tat", text:"TriArc Technologies", url:"tat.html", menus:["main","left"] },

    { id:"dsn", text:"Data Stream Network", url:"dsn.html", menus:["main","left"] },

    { id:"dsa", text:"Delron Security Alliance", url:"dsa.html", menus:["main","left"] },

    { id:"cga", text:"Cosmic Galactic Alliance", url:"cga.html", menus:["main","left"] },

    { id:"jdd", text:"J.D.D", url:"jdd.html", menus:["top","left","bottom"] },

    { id:"relaunch", text:"Re Launch Site", url:"index.html", menus:["top","bottom"] }
];

function buildMenu(containerId, menuName, separator="") {

    const container = document.getElementById(containerId);
    if (!container) return;

    const links = menuLinks
        .filter(item => item.menus.includes(menuName))
        .map(item => `<a id="${item.id}" href="${item.url}">${item.text}</a>`);

    container.innerHTML = links.join(separator);
}

window.onload = function() {

    buildMenu("topMenuContainer","top"," - ");

    buildMenu("mainMenuContainer2","main"," ");

    buildMenu("leftMenuContainer","left","<br>");

    buildMenu("bottomMenuContainer","bottom"," | ");

};