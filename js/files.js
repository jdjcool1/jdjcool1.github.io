const CONFIG = {
owner: "jdjcool1",
repo: "jdjcool1.github.io",
branch: "main",
path: "files"
};

function addRow(name, href, size, date) {

const tbody = document.getElementById("tbody");

const row = document.createElement("tr");

row.innerHTML =
`<td><a href="${href}">${name}</a></td>
<td class="detailsColumn">${size}</td>
<td class="detailsColumn">${date}</td>`;

tbody.appendChild(row);

}

function loadExample() {

addRow("example.png","example.png","2 KB","2026-03-04");
addRow("files","files/","","2026-03-04");

}

window.addEventListener("DOMContentLoaded", loadExample);