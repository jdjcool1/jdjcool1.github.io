const menuLinks = [
{
    id: "home",
    url: "home.html",
    labels: {
        top: "HOME",
        main: "Home",
        left: "Home",
        bottom: "HOME"
    },
    menus: ["top","main","left","bottom"]
},

{
    id: "tat",
    url: "tat.html",
    labels: {
        top: "T.A.T",
        main: "TriArc Technologies",
        bottom: "T.A.T"
    },
    menus: ["top","main","bottom"]
},

{
    id: "dsn",
    url: "dsn.html",
    labels: {
        top: "D.S.N",
        main: "Data Stream Network",
        bottom: "D.S.N"
    },
    menus: ["top","main","bottom"]
},

{
    id: "dsa",
    url: "dsa.html",
    labels: {
        top: "D.S.A",
        main: "Delron Security Alliance",
        bottom: "D.S.A"
    },
    menus: ["top","main","bottom"]
},

{
    id: "cga",
    url: "cga.html",
    labels: {
        top: "C.G.A",
        main: "Cosmic Galactic Alliance",
        bottom: "C.G.A"
    },
    menus: ["top","main","bottom"]
},

{
    id: "jdjcool1",
    url: "jdjcool1.html",
    labels: {
        top: "jdjcool1",
        left: "jdjcool1",
        bottom: "jdjcool1"
    },
    menus: ["top","left","bottom"]
},

{
    id: "drakai217",
    url: "drakai217.html",
    labels: {
        top: "drakai217",
        left: "Drakai217",
        bottom: "drakai217"
    },
    menus: ["top","left","bottom"]
},

{
    id: "drexon69",
    url: "drexon69.html",
    labels: {
        top: "drexon69",
        left: "Drexon69",
        bottom: "drexon69"
    },
    menus: ["top","left","bottom"]
},

{
    id: "Re Launch Site",
    url: "index.html",
    labels: {
        top: "Re Launch Site",
        bottom: "Re Launch Site"
    },
    menus: ["top","bottom"]
},

{
    id: "404",
    url: "404.html",
    labels: {
        top: "404",
        bottom: "404"
    },
    menus: ["top","bottom"]
}

];

function buildMenu(containerId, menuName, separator="") {

    const container = document.getElementById(containerId);
    if (!container) return;

    const links = menuLinks
        .filter(item => item.menus.includes(menuName))
        .map(item => {

            const label = item.labels[menuName] || item.labels.default || item.id;

            return `<a id="${item.id}" href="${item.url}">${label}</a>`;

        });

    container.innerHTML = links.join(separator);
}

window.onload = function() {

    buildMenu("topMenuContainer","top","<as>-</as>");

    buildMenu("mainMenuContainer2","main","");

    buildMenu("leftMenuContainer","left","");

    buildMenu("bottomMenuContainer","bottom","<as>|</as>");


};


