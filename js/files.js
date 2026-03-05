/**
 * CONFIG — set these to match your repo/folder.
 * For your example URL:
 *   https://jdjcool1.github.io/files/
 * owner = "jdjcool1"
 * repo  = "jdjcool1.github.io"  (common for user sites)
 * path  = "files"               (no leading slash)
 */
const CONFIG = {
  owner: "jdjcool1",
  repo:  "jdjcool1.github.io",
  branch: "main",      // change to "master" if needed
  path:  "files",      // folder you want to browse
  showDotfiles: false, // set true if you want files like .gitignore listed
};

function $(id){ return document.getElementById(id); }

function formatBytes(bytes) {
  if (bytes === 0) return "";
  const units = ["B","KB","MB","GB","TB"];
  let i = 0, n = bytes;
  while (n >= 1024 && i < units.length-1) { n /= 1024; i++; }
  const rounded = (i === 0) ? String(Math.round(n)) : n.toFixed(n < 10 ? 1 : 0);
  return `${rounded} ${units[i]}`;
}

function formatDate(d) {
  // YYYY-MM-DD HH:mm (local)
  const pad = (x) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function createCell(value, text) {
  const cell = document.createElement("td");
  cell.className = "detailsColumn";
  cell.dataset.value = value ?? "";
  cell.textContent = text ?? "";
  return cell;
}

function addRow(name, href, isdir, sizeBytes, dateISO) {
  if (!CONFIG.showDotfiles && name.startsWith(".")) return;

  const tbody = $("tbody");
  const row = document.createElement("tr");

  const fileCell = document.createElement("td");
  const link = document.createElement("a");
  link.className = `icon ${isdir ? "dir" : "file"}`;
  link.textContent = isdir ? `${name}/` : name;
  link.href = href;

  fileCell.dataset.value = link.textContent.toLowerCase();
  fileCell.appendChild(link);

  const sizeString = isdir ? "" : formatBytes(sizeBytes);
  const sizeSort = isdir ? 0 : (sizeBytes ?? 0);

  const date = dateISO ? new Date(dateISO) : null;
  const dateString = date ? formatDate(date) : "";
  const dateSort = date ? date.getTime() : 0;

  row.appendChild(fileCell);
  row.appendChild(createCell(sizeSort, sizeString));
  row.appendChild(createCell(dateSort, dateString));
  tbody.appendChild(row);
}

function sortTable(column) {
  const theader = $("theader");
  const oldOrder = parseInt(theader.cells[column].dataset.order || "1", 10);
  const newOrder = -oldOrder;
  theader.cells[column].dataset.order = String(newOrder);

  const tbody = $("tbody");
  const rows = Array.from(tbody.rows);

  rows.sort((r1, r2) => {
    let a = r1.cells[column].dataset.value;
    let b = r2.cells[column].dataset.value;

    // size/date columns are numeric
    if (column !== 0) {
      a = parseInt(a || "0", 10);
      b = parseInt(b || "0", 10);
      return a > b ? newOrder : a < b ? oldOrder : 0;
    }

    // name column text
    return a > b ? newOrder : a < b ? oldOrder : 0;
  });

  rows.forEach(r => tbody.appendChild(r));
}

function addHandlers(el, col) {
  el.onclick = () => sortTable(col);
  el.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") { sortTable(col); e.preventDefault(); }
  };
}

function setHeader(locationText) {
  $("location").textContent = locationText;
  document.title = `Index of ${locationText}`;
}

function setStatus(msg) { $("status").innerHTML = msg; }

function showParentLink(currentPath) {
  // If browsing "files/sub", parent is "files"
  const parts = currentPath.split("/").filter(Boolean);
  if (parts.length <= 1) return; // no parent (at root of configured folder)

  parts.pop();
  const parentPath = parts.join("/");

  const url = new URL(window.location.href);
  url.searchParams.set("p", parentPath);

  $("parentDirLink").href = url.toString();
  $("parentDirLinkBox").style.display = "block";
}

function getPathToBrowse() {
  // allow browsing subfolders using ?p=files/subfolder
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");
  if (!p) return CONFIG.path;
  // basic safety: keep it within CONFIG.path
  if (!p.startsWith(CONFIG.path)) return CONFIG.path;
  return p.replace(/\/+$/,"");
}

async function githubJson(url) {
  const res = await fetch(url, {
    headers: { "Accept": "application/vnd.github+json" }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status}: ${text.slice(0,200)}`);
  }
  return res.json();
}

async function listFolder(owner, repo, branch, folderPath) {
  // 1) list entries (files + dirs)
  const api = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${encodeURIComponent(folderPath)}?ref=${encodeURIComponent(branch)}`;
  const entries = await githubJson(api);

  // 2) build "view" base URL (GitHub Pages) for links
  // For user/organization pages, base is https://owner.github.io/<repo?> ...
  // For your setup (jdjcool1.github.io repo), base is https://jdjcool1.github.io/
  const isUserSiteRepo = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  const pagesBase = isUserSiteRepo
    ? `https://${owner}.github.io/`
    : `https://${owner}.github.io/${repo}/`;

  // 3) we want last-modified: use commits API per item (best effort)
  // NOTE: This is extra API calls; fine for small folders.
  const items = entries
    .filter(e => e && e.name && e.path)
    .map(e => ({
      name: e.name,
      path: e.path,
      type: e.type,       // "file" or "dir"
      size: e.size || 0,
    }));

  async function lastModifiedISO(path) {
    // commits?path=... returns newest first
    const commitsApi = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits?path=${encodeURIComponent(path)}&per_page=1&sha=${encodeURIComponent(branch)}`;
    const commits = await githubJson(commitsApi);
    const c = Array.isArray(commits) && commits[0];
    const iso = c?.commit?.committer?.date || c?.commit?.author?.date || null;
    return iso;
  }

  // fetch last-modified with limited concurrency
  const concurrency = 6;
  let i = 0;
  const out = [];
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      const it = items[idx];
      let lm = null;
      try { lm = await lastModifiedISO(it.path); } catch { lm = null; }
      out[idx] = { ...it, lastModified: lm };
    }
  }
  await Promise.all(Array.from({length: Math.min(concurrency, items.length)}, worker));

  // 4) render (dirs first, then files)
  const dirs = out.filter(x => x.type === "dir").sort((a,b)=>a.name.localeCompare(b.name));
  const files = out.filter(x => x.type === "file").sort((a,b)=>a.name.localeCompare(b.name));

  return { pagesBase, dirs, files };
}

async function main() {
  addHandlers($("nameColumnHeader"), 0);
  addHandlers($("sizeColumnHeader"), 1);
  addHandlers($("dateColumnHeader"), 2);

  const folderPath = getPathToBrowse();
  setHeader(`/${folderPath}/`);
  showParentLink(folderPath);

  setStatus(`Loading from GitHub API… <code>${CONFIG.owner}/${CONFIG.repo}</code> (<code>${CONFIG.branch}</code>)`);

  try {
    const { pagesBase, dirs, files } = await listFolder(CONFIG.owner, CONFIG.repo, CONFIG.branch, folderPath);

    // clear any old rows
    $("tbody").innerHTML = "";

    // links:
    // - folders: reload same page with ?p=...
    // - files: direct to GitHub Pages URL
    const url = new URL(window.location.href);

    for (const d of dirs) {
      const u = new URL(url.toString());
      u.searchParams.set("p", d.path);
      addRow(d.name, u.toString(), true, 0, d.lastModified);
    }

    for (const f of files) {
      const fileUrl = pagesBase + f.path;
      addRow(f.name, fileUrl, false, f.size, f.lastModified);
    }

    setStatus(`Loaded <b>${dirs.length}</b> folder(s), <b>${files.length}</b> file(s).`);
  } catch (err) {
    console.error(err);
    setStatus(
      `❌ Couldn’t load directory.<br>` +
      `Reason: <code>${String(err.message || err)}</code><br><br>` +
      `Notes: GitHub API is rate-limited. If you hit limits, wait a bit or use a token-based approach.`
    );
  }
}

window.addEventListener("DOMContentLoaded", main);