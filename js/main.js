const menuLinks = [
{
    id: "home",
    url: "home.html",
    labels: {
        top: "HOME",
        navdash: "HOME",
        main: "Home",
        left: "Home",
        bottom: "HOME"
    },
    menus: ["top","navdash","left","bottom"]
},

{
    id: "tat",
    url: "tat.html",
    labels: {
        top: "T.A.T",
        navdash: "TriArc Technologies",
        main: "TriArc Technologies",
        left: "TriArc Technologies",
        bottom: "T.A.T"
    },
    menus: ["top","navdash","main","bottom"]
},

{
    id: "rgn",
    url: "rgn.html",
    labels: {
        top: "R.G.N",
        navdash: "Rift Gate Network",
        main: "Rift Gate Network",
        left: "Rift Gate Network",
        bottom: "R.G.N"
    },
    menus: ["top","navdash","main","bottom"]
},

{
    id: "dsn",
    url: "dsn.html",
    labels: {
        top: "D.S.N",
        navdash: "Data Stream Network",
        main: "Data Stream Network",
        left: "Data Stream Network",
        bottom: "D.S.N"
    },
    menus: ["top","navdash","main","bottom"]
},

{
    id: "dsa",
    url: "dsa.html",
    labels: {
        top: "D.S.A",
        navdash: "Delron Security Alliance",
        main: "Delron Security Alliance",
        left: "Delron Security Alliance",
        bottom: "D.S.A"
    },
    menus: ["top","navdash","main","bottom"]
},

{
    id: "cga",
    url: "cga.html",
    labels: {
        top: "C.G.A",
        navdash: "Cosmic Galactic Alliance",
        main: "Cosmic Galactic Alliance",
        left: "Cosmic Galactic Alliance",
        bottom: "C.G.A"
    },
    menus: ["top","navdash","main","bottom"]
},

{
    id: "jdjcool1",
    url: "jdjcool1.html",
    labels: {
        top: "jdjcool1",
        navdash: "jdjcool1",
        main: "jdjcool1",
        left: "jdjcool1",
        bottom: "jdjcool1"
    },
    menus: ["top","navdash","left","bottom"]
},

{
    id: "drakai217",
    url: "drakai217.html",
    labels: {
        top: "drakai217",
        navdash: "Drakai217",
        main: "Drakai217",
        left: "Drakai217",
        bottom: "drakai217"
    },
    menus: ["top","navdash","left","bottom"]
},

{
    id: "drexon69",
    url: "drexon69.html",
    labels: {
        top: "drexon69",
        navdash: "Drexon69",
        main: "Drexon69",
        left: "Drexon69",
        bottom: "drexon69"
    },
    menus: ["top","navdash","left","bottom"]
},

{
    id: "dashboard",
    url: "dash.html",
    labels: {
        top: "dash",
        navdash: "Dashboard",
        main: "Dashboard",
        left: "Dashboard",
        bottom: "dash"
    },
    menus: ["top","navdash","bottom"]
},

{
    id: "Re Launch Site",
    url: "index.html",
    labels: {
        top: "Re Launch Site",
        navdash: "Re Launch Site",
        main: "Re Launch Site",
        left: "Re Launch Site",
        bottom: "Re Launch Site"
    },
    menus: ["top","navdash","bottom"]
},

{
    id: "404",
    url: "404.html",
    labels: {
        top: "404",
        navdash: "404",
        main: "404",
        left: "404",
        bottom: "404"
    },
    menus: ["top","navdash","bottom"]
}

];

window.onload = function() {

    buildMenu("topMenuContainer","top","<as>-</as>");

    buildMenu("navdashjs","navdash"," |-| ");

    buildMenu("mainMenujs","main","");

    buildMenu("leftMenuContainer","left","");

    buildMenu("bottomMenuContainer","bottom","<as>|</as>");

};

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
