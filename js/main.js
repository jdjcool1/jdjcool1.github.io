const menuLinks = [
{
    id: "home",
    url: "Home.html",
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
    id: "jdd",
    url: "jdd.html",
    labels: {
        top: "J.D.D",
        left: "JDJCOOL DrakAI Drexon",
        bottom: "J.D.D"
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

    buildMenu("topMenuContainer","top"," - ");

    buildMenu("mainMenuContainer2","main"," ");

    buildMenu("leftMenuContainer","left"," ");

    buildMenu("bottomMenuContainer","bottom"," | ");

};