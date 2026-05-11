const menuLinks = [
{
    id: "home",
    url: "home.html",
    labels: {
        top: "HOME",
        topX: "HOME",
        navloop: "HOME",
        main: "Home",
        mainX: "Home",
        left: "Home",
        right: "Home",
        bottom: "HOME",
        bottomX: "HOME"
    },
    menus: ["top","navloop","left","bottom","topX","bottomX"]
},

{
    id: "tat",
    url: "tat.html",
    labels: {
        top: "T.A.T",
        navloop: "TriArc Technologies",
        main: "TriArc Technologies",
        left: "TriArc Technologies",
        bottom: "T.A.T"
    },
    menus: ["top","navloop","main","bottom"]
},

{
    id: "rgn",
    url: "rgn.html",
    labels: {
        top: "R.G.N",
        navloop: "Rift Gate Network",
        main: "Rift Gate Network",
        left: "Rift Gate Network",
        bottom: "R.G.N"
    },
    menus: ["top","navloop","main","bottom"]
},

{
    id: "dsn",
    url: "dsn.html",
    labels: {
        top: "D.S.N",
        navloop: "Data Stream Network",
        main: "Data Stream Network",
        left: "Data Stream Network",
        bottom: "D.S.N"
    },
    menus: ["top","navloop","main","bottom"]
},

{
    id: "dsa",
    url: "dsa.html",
    labels: {
        top: "D.S.A",
        navloop: "Delron Security Alliance",
        main: "Delron Security Alliance",
        left: "Delron Security Alliance",
        bottom: "D.S.A"
    },
    menus: ["top","navloop","main","bottom"]
},

{
    id: "cga",
    url: "cga.html",
    labels: {
        top: "C.G.A",
        navloop: "Cosmic Galactic Alliance",
        main: "Cosmic Galactic Alliance",
        left: "Cosmic Galactic Alliance",
        bottom: "C.G.A"
    },
    menus: ["top","navloop","main","bottom"]
},

{
    id: "jdjcool1",
    url: "jdjcool1.html",
    labels: {
        top: "jdjcool1",
        navloop: "jdjcool1",
        main: "jdjcool1",
        left: "jdjcool1",
        bottom: "jdjcool1"
    },
    menus: ["top","navloop","left","bottom"]
},

{
    id: "drakai217",
    url: "drakai217.html",
    labels: {
        top: "drakai217",
        navloop: "Drakai217",
        main: "Drakai217",
        left: "Drakai217",
        bottom: "drakai217"
    },
    menus: ["top","navloop","left","bottom"]
},

{
    id: "drexon69",
    url: "drexon69.html",
    labels: {
        top: "drexon69",
        navloop: "Drexon69",
        main: "Drexon69",
        left: "Drexon69",
        bottom: "drexon69"
    },
    menus: ["top","navloop","left","bottom"]
},

{
    id: "carrd",
    url: "https://jdd-tat.carrd.co",
    labels: {
        top: "TriArc Technologies [TAT] Home",
        navloop: "TriArc Technologies [TAT] Home",
        main: "TriArc Technologies [TAT] Home",
        left: "TriArc Technologies [TAT] Home",
        lefticons: "TriArc Technologies [TAT] Home",
        bottom: "TriArc Technologies [TAT] Home"
    },
    menus: ["lefticons"]
},

{
    id: "gravatar",
    url: "https://gravatar.com/classytriumphbc0ad472ab",
    labels: {
        top: "jdjcool1 | Gravatar",
        navloop: "jdjcool1 | Gravatar",
        main: "jdjcool1 | Gravatar",
        left: "jdjcool1 | Gravatar",
        lefticons: "jdjcool1 | Gravatar",
        bottom: "jdjcool1 | Gravatar"
    },
    menus: ["lefticons"]
},

{
    id: "linktree",
    url: "https://linktr.ee/jdjcool1",
    labels: {
        top: "jdjcool1 | Linktree",
        navloop: "jdjcool1 | Linktree",
        main: "jdjcool1 | Linktree",
        left: "jdjcool1 | Linktree",
        lefticons: "jdjcool1 | Linktree",
        bottom: "jdjcool1 | Linktree"
    },
    menus: ["lefticons"]
},

{
    id: "github",
    url: "https://github.com/jdjcool1/jdjcool1.github.io",
    labels: {
        topX: "jdjcool1/jdjcool1.github.io",
        navloop: "jdjcool1/jdjcool1.github.io",
        mainX: "jdjcool1/jdjcool1.github.io",
        left: "jdjcool1/jdjcool1.github.io",
        bottomX: "jdjcool1/jdjcool1.github.io"
    },
    menus: ["topX","navloop","bottomX"]
},

{
    id: "Re Launch Site",
    url: "index.html",
    labels: {
        top: "Re Launch Site",
        navloop: "Re Launch Site",
        main: "Re Launch Site",
        left: "Re Launch Site",
        bottom: "Re Launch Site"
    },
    menus: ["top","navloop","bottom"]
},

{
    id: "loop",
    url: "loop.html",
    labels: {
        top: "loop",
        navloop: "loop",
        main: "loop",
        left: "loop",
        bottom: "loop"
    },
    menus: ["top","left","bottom"]
},

{
    id: "temp",
    url: "temp.html",
    labels: {
        top: "temp",
        navloop: "temp",
        main: "temp",
        left: "temp",
        bottom: "temp"
    },
    menus: ["navloop"]
},

{
    id: "404",
    url: "404.html",
    labels: {
        top: "404",
        navloop: "404",
        main: "404",
        left: "404",
        bottom: "404"
    },
    menus: ["navloop"]
}

];

window.onload = function() {

    buildMenu("topMenuContainer","top","<as>-</as>");

    buildMenu("topMenuContainerX","topX","<as>-</as>");

    buildMenu("navloopjs","navloop","<p> |-| </p>");

    buildMenu("mainMenujs","main","");

    buildMenu("mainMenuXjs","mainX","");

    buildMenu("leftMenuContainer","left","");

    buildMenu("leftboxContainer","lefticons","");

    buildMenu("rightboxContainerjdjcool1","jdjcool1","");

    buildMenu("rightboxContainerDrakai217","Drakai217","");

    buildMenu("rightboxContainerDrexon69","Drexon69","");

    buildMenu("bottomMenuContainer","bottom","<as>|</as>");

    buildMenu("bottomMenuContainerX","bottomX","<as>|</as>");

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