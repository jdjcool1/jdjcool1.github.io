const menuLinks = [
    { id: "ad",texth1: "right ad", textp: "right ad", menus:["right"] },
    { id: "ad",texth1: "left ad", textp: "left ad", menus:["left"] },

];

function buildMenu(containerId, menuName, separator="") {

    const container = document.getElementById(containerId);
    if (!container) return;

    const links = menuLinks
        .filter(ad => ad.menus.includes(menuName))
        .map(ad => `<h1>${ad.texth1}</h1><p>${ad.textp}</p>`)
        .join(separator);
}

window.onload = function() {

    buildMenu("rightboxContainer","right"," ");

    buildMenu("leftboxContainer","left"," ");

};