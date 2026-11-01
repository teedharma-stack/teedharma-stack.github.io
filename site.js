/* Shared layout: sidebar, mobile top bar, background, and home page.
   You should not need to edit this file. Edit content.js instead. */
(function () {
  var S = window.SITE || { profile: {}, home: {}, items: [] };
  var P = S.profile || {};
  var items = (S.items || []).slice().sort(function (a, b) { return String(b.date || "").localeCompare(String(a.date || "")); });

  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function initials(n) { return String(n || "").split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase(); }

  var I = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.15-.02-2.64-1.6-2.64-1.62 0-1.86 1.26-1.86 2.56v4.92h-4z"/></svg>',
    gh: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  function avatarInner() {
    var m = '<div class="mono">' + esc(initials(P.name)) + '</div>';
    if (!P.photo) return m;
    return '<img src="' + esc(P.photo) + '" alt="' + esc(P.name) + '" onerror="this.outerHTML=\'' + m.replace(/"/g, "&quot;") + '\'">';
  }

  /* ---------- which page are we on ---------- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";
  function act(file) { return page === file ? " active" : ""; }

  /* ---------- Sidebar ---------- */
  var latest = items.filter(function (x) { return x.type === "project" || x.type === "memo" || x.type === "model"; }).slice(0, 3);
  var cvLink = '<a class="' + act("cv.html").trim() + '" href="cv.html">' + I.cv + 'CV</a>';

  var side =
    '<div class="avatar">' + avatarInner() + '</div>' +
    '<div class="sname">' + esc(P.name) + '</div>' +
    '<div class="srole">' + esc(P.role) + '</div>' +
    '<div class="sstatus"><span class="dot"></span>' + esc(P.status) + '</div>' +
    '<ul class="snav"><li class="home"><a class="' + act("index.html").trim() + '" href="index.html">' + I.home + 'Home</a></li></ul>' +
    '<div class="glabel">About me</div>' +
    '<ul class="snav">' +
      '<li>' + cvLink + '</li>' +
      '<li><a class="' + act("projects.html").trim() + '" href="projects.html">' + I.grid + 'Portfolio</a></li>' +
      '<li class="sub"><a href="projects.html#deals">Deals &amp; Valuation (M&amp;A / LBO)</a></li>' +
      '<li class="sub"><a href="projects.html#research">Equity Research</a></li>' +
      '<li class="sub"><a class="' + act("tools.html").trim() + '" href="tools.html">Interactive Tools &amp; AI Framework</a></li>' +
      '<li><a href="index.html#contact">' + I.mail + 'Contact</a></li>' +
    '</ul>' +
    '<div class="glabel">Latest research</div>' +
    '<ol class="latest">' + latest.map(function (x, i) {
      return '<li><a href="' + esc(x.link || "projects.html") + '"><span class="n">0' + (i + 1) + '</span><span>' + esc(x.title) + '</span></a></li>';
    }).join("") + '</ol>' +
    '<div class="glabel">Get in touch</div>' +
    '<div class="social">' +
      (P.linkedin ? '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">' + I.li + '</a>' : '') +
      (P.github ? '<a href="' + esc(P.github) + '" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">' + I.gh + '</a>' : '') +
      (P.email ? '<a href="mailto:' + esc(P.email) + '" data-contact aria-label="Email" title="Email">' + I.mail + '</a>' : '') +
    '</div>' +
    '<div class="scopy">&copy; ' + new Date().getFullYear() + ' ' + esc(P.name) + '</div>';

  var aside = document.createElement("aside");
  aside.className = "sidebar"; aside.innerHTML = side;
  var top = document.createElement("div");
  top.className = "topbar";
  top.innerHTML = '<div class="tmono">' + avatarInner() + '</div><div class="tname">' + esc(P.name) + '</div><button aria-label="Open menu">' + I.menu + '</button>';
  var scrim = document.createElement("div"); scrim.className = "scrim";
  document.body.insertBefore(scrim, document.body.firstChild);
  document.body.insertBefore(aside, document.body.firstChild);
  var main = document.querySelector(".main");
  if (main) main.insertBefore(top, main.firstChild);
  top.querySelector("button").addEventListener("click", function () { document.body.classList.toggle("menu-open"); });
  scrim.addEventListener("click", function () { document.body.classList.remove("menu-open"); });
  aside.addEventListener("click", function (e) { if (e.target.closest("a")) document.body.classList.remove("menu-open"); });

  /* ---------- Background: out-of-focus trading screens ---------- */
  (function () {
    var bd = document.createElement("div"); bd.className = "backdrop";
    var seed = 7; function r() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var W = 1600, H = 1000, svg = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice">';
    var panels = [[60, 90, 640, 300], [780, 60, 760, 340], [40, 560, 560, 330], [700, 520, 860, 380]];
    panels.forEach(function (p) {
      var x0 = p[0], y0 = p[1], w = p[2], h = p[3];
      svg += '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" rx="10" fill="#0d2416" stroke="#24472e" stroke-width="2"/>';
      for (var g = 1; g < 5; g++) svg += '<line x1="' + x0 + '" x2="' + (x0 + w) + '" y1="' + (y0 + h * g / 5) + '" y2="' + (y0 + h * g / 5) + '" stroke="#183323" stroke-width="1"/>';
      var n = Math.floor(w / 16), price = 0.5, step = w / n;
      for (var i = 0; i < n; i++) {
        var o = price, c = Math.min(.9, Math.max(.1, o + (r() - .48) * .12));
        var hi = Math.max(o, c) + r() * .04, lo = Math.min(o, c) - r() * .04; price = c;
        var up = c >= o, col = up ? "#37c46a" : "#d2543e", cx = x0 + i * step + step / 2;
        var Y = function (v) { return y0 + h - v * h; };
        svg += '<line x1="' + cx + '" x2="' + cx + '" y1="' + Y(hi) + '" y2="' + Y(lo) + '" stroke="' + col + '" stroke-width="2"/>';
        svg += '<rect x="' + (cx - step * .32) + '" y="' + Y(Math.max(o, c)) + '" width="' + step * .64 + '" height="' + Math.max(3, Math.abs(c - o) * h) + '" fill="' + col + '"/>';
      }
    });
    svg += '</svg>';
    /* Portfolio pages: out-of-focus financial district at night */
    if (document.body.getAttribute("data-bg") === "city") {
      svg = '<svg class="chart city" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMax slice">' +
        '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#030906"/><stop offset=".5" stop-color="#0a1f13"/><stop offset="1" stop-color="#1b4a2c"/></linearGradient></defs>' +
        '<rect width="' + W + '" height="' + H + '" fill="url(#sky)"/>';
      var layers = [ { base: 520, hmin: 120, hmax: 330, wmin: 70, wmax: 140, fill: "#1a3f29", lit: .2, a: .6 },
                     { base: 700, hmin: 200, hmax: 520, wmin: 90, wmax: 170, fill: "#10301d", lit: .28, a: .85 },
                     { base: 1000, hmin: 300, hmax: 760, wmin: 120, wmax: 230, fill: "#071a0e", lit: .36, a: 1 } ];
      layers.forEach(function (L) {
        var x = -40;
        while (x < W) {
          var bw = L.wmin + r() * (L.wmax - L.wmin), bh = L.hmin + r() * (L.hmax - L.hmin), top = L.base - bh;
          svg += '<rect x="' + x + '" y="' + top + '" width="' + bw + '" height="' + (H - top) + '" fill="' + L.fill + '"/>';
          if (r() < .3) svg += '<rect x="' + (x + bw * .42) + '" y="' + (top - 40) + '" width="' + bw * .16 + '" height="40" fill="' + L.fill + '"/>';
          for (var wy = top + 14; wy < Math.min(L.base, H) - 10; wy += 18) {
            for (var wx = x + 10; wx < x + bw - 12; wx += 15) {
              if (r() < L.lit) {
                var c = r() < .72 ? "#e9c477" : (r() < .6 ? "#f4ead0" : "#5fd18a");
                svg += '<rect x="' + wx + '" y="' + wy + '" width="8" height="10" fill="' + c + '" opacity="' + (L.a * (.35 + r() * .6)).toFixed(2) + '"/>';
              }
            }
          }
          x += bw + 6 + r() * 26;
        }
      });
      svg += '</svg>';
    }
    /* Calmer background options: data-bg="skyline" | "contour" | "ledger" | "glow" */
    var bgType = document.body.getAttribute("data-bg");
    if (bgType === "skyline") {
      svg = '<svg class="chart soft" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMax slice">' +
        '<defs><linearGradient id="sk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#040b07"/><stop offset=".6" stop-color="#0b2014"/><stop offset="1" stop-color="#173d26"/></linearGradient></defs>' +
        '<rect width="' + W + '" height="' + H + '" fill="url(#sk2)"/>';
      [{ base: 640, hmin: 140, hmax: 320, fill: "#17402a", lit: .09 }, { base: 1000, hmin: 280, hmax: 560, fill: "#0b1f13", lit: .13 }].forEach(function (L) {
        var x = -40;
        while (x < W) {
          var bw = 110 + r() * 150, bh = L.hmin + r() * (L.hmax - L.hmin), top = L.base - bh;
          svg += '<rect x="' + x + '" y="' + top + '" width="' + bw + '" height="' + (H - top) + '" fill="' + L.fill + '"/>';
          for (var wy = top + 20; wy < Math.min(L.base, H) - 20; wy += 26) for (var wx = x + 14; wx < x + bw - 16; wx += 22)
            if (r() < L.lit) svg += '<rect x="' + wx + '" y="' + wy + '" width="10" height="12" fill="#e9c477" opacity="' + (.35 + r() * .4).toFixed(2) + '"/>';
          x += bw + 10 + r() * 30;
        }
      });
      svg += '</svg>';
    } else if (bgType === "contour") {
      svg = '<svg class="chart soft" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice"><rect width="' + W + '" height="' + H + '" fill="#06110a"/>';
      for (var k = 0; k < 26; k++) {
        var d = "", y0 = 40 + k * 38, amp = 30 + k * 2.2, ph = k * .35;
        for (var xx = 0; xx <= W; xx += 20) {
          var yy = y0 + Math.sin(xx / 260 + ph) * amp + Math.sin(xx / 97 + k) * 9;
          d += (xx ? " L" : "M") + xx + " " + yy.toFixed(1);
        }
        svg += '<path d="' + d + '" fill="none" stroke="' + (k % 5 === 0 ? "#d9b867" : "#3d8a58") + '" stroke-width="' + (k % 5 === 0 ? 1.6 : 1.1) + '" opacity="' + (k % 5 === 0 ? .6 : .55) + '"/>';
      }
      svg += '</svg>';
    } else if (bgType === "ledger") {
      svg = '<svg class="chart soft" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice"><rect width="' + W + '" height="' + H + '" fill="#06110a"/>';
      for (var gx = 0; gx <= W; gx += 40) svg += '<line x1="' + gx + '" x2="' + gx + '" y1="0" y2="' + H + '" stroke="#2a5a3d" stroke-width="' + (gx % 200 ? .8 : 1.6) + '"/>';
      for (var gy = 0; gy <= H; gy += 40) svg += '<line y1="' + gy + '" y2="' + gy + '" x1="0" x2="' + W + '" stroke="#2a5a3d" stroke-width="' + (gy % 200 ? .8 : 1.6) + '"/>';
      var pts = [], pv = 780;
      for (var px = 0; px <= W; px += 40) { pv += (r() - .62) * 46; pv = Math.max(160, Math.min(860, pv)); pts.push(px + "," + pv.toFixed(0)); }
      svg += '<polyline points="0,' + H + ' ' + pts.join(" ") + ' ' + W + ',' + H + '" fill="#d9b867" opacity=".09"/>';
      svg += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#d9b867" stroke-width="3" opacity=".75"/>';
      svg += '</svg>';
    } else if (bgType === "glow") {
      svg = '<svg class="chart soft" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice"><defs>' +
        '<radialGradient id="g1"><stop offset="0" stop-color="#36a056" stop-opacity=".75"/><stop offset="1" stop-color="#2f8a4a" stop-opacity="0"/></radialGradient>' +
        '<radialGradient id="g2"><stop offset="0" stop-color="#d9b867" stop-opacity=".4"/><stop offset="1" stop-color="#d9b867" stop-opacity="0"/></radialGradient>' +
        '<radialGradient id="g3"><stop offset="0" stop-color="#23807a" stop-opacity=".6"/><stop offset="1" stop-color="#1c5e5a" stop-opacity="0"/></radialGradient></defs>' +
        '<rect width="' + W + '" height="' + H + '" fill="#05100a"/>' +
        '<ellipse cx="300" cy="820" rx="700" ry="420" fill="url(#g1)"/><ellipse cx="1300" cy="180" rx="620" ry="380" fill="url(#g3)"/>' +
        '<ellipse cx="900" cy="560" rx="520" ry="300" fill="url(#g2)"/><ellipse cx="1500" cy="900" rx="420" ry="260" fill="url(#g1)"/></svg>';
    }
    if (bgType === "skyline" || bgType === "contour" || bgType === "ledger" || bgType === "glow") { bd.className += " calm"; }
    var dots = [[12, 20, 56, "#d9b867"], [84, 14, 36, "#e0533c"], [70, 62, 70, "#3ccf6e"], [24, 78, 34, "#e0533c"], [92, 48, 22, "#d9b867"], [46, 90, 26, "#3ccf6e"], [6, 52, 18, "#d9b867"]];
    var bk = dots.map(function (d, i) {
      return '<span class="bokeh" style="left:' + d[0] + '%;top:' + d[1] + '%;width:' + d[2] + 'px;height:' + d[2] + 'px;background:' + d[3] + ';animation-delay:-' + i * 3 + 's"></span>';
    }).join("");
    bd.innerHTML = svg + (/calm/.test(bd.className) ? '' : bk);
    document.body.insertBefore(bd, document.body.firstChild);
  })();

  /* ---------- Home page ---------- */
  var home = document.getElementById("home");
  if (home) {
    var H = S.home || {};
    var count = function (t) { return items.filter(function (x) { return t.indexOf(x.type) > -1; }).length; };
    var stats = [
      { v: count(["project", "memo", "model"]), k: "Published models<br>&amp; memos" },
      { v: "4", k: "Valuation methods<br>DCF · Comps · LBO · M&amp;A" },
      { v: count(["tool"]), k: "Live deal<br>modelers" },
      { v: count(["certificate"]), k: "Job simulations<br>Citi · BofA" }
    ];
    var parts = String(P.name || "").split(" ");
    home.innerHTML =
      '<section class="screen hero"><div class="wrap">' +
        '<div class="rise"><span class="eyebrow">' + esc(H.eyebrow) + '</span></div>' +
        '<h1 class="rise">Hello, I\'m<em>' + esc(P.name) + '.</em></h1>' +
        '<div class="divider rise"><i></i></div>' +
        '<p class="lead rise">' + (H.intro || "") + '</p>' +
        '<div class="rise"><span class="pill"><span class="dot"></span>' + esc(H.pill) + '</span></div>' +
        '<div class="rise"><div class="stats">' + stats.map(function (s) {
          return '<div class="stat"><div class="v">' + s.v + '</div><div class="k">' + s.k + '</div></div>';
        }).join("") + '</div></div>' +
        '<div class="cta rise">' +
          '<a class="btn gold" href="projects.html">See my work &rarr;</a>' +
          '<a class="btn" href="tools.html">Tools</a>' +
          '<a class="btn" href="cv.html">CV</a>' +
          '<a class="btn" href="#contact">Contact</a>' +
        '</div>' +
        '<div class="scrollhint rise">What I do<span></span></div>' +
      '</div></section>' +
      '<section class="screen what" id="what"><div class="wrap">' +
        '<div class="rise"><span class="eyebrow">What I do</span></div>' +
        '<h2 class="rise">' + esc(H.whatTitle) + '</h2>' +
        '<p class="sub rise">' + esc(H.whatIntro) + '</p>' +
        '<div class="cards">' + (H.areas || []).map(function (a, i) {
          return '<a class="card rise" href="' + esc(a.link) + '"><div class="num">0' + (i + 1) + '</div><h3>' + esc(a.title) + '</h3><p>' + esc(a.text) + '</p><span class="more">' + esc(a.linkText) + ' &rarr;</span></a>';
        }).join("") + '</div>' +
        '<p class="closing rise" id="contact">' + esc(H.closing) + ' <a href="mailto:' + esc(P.email) + '" data-contact>Start a conversation &rarr;</a></p>' +
      '</div></section>' +
      '<div class="foot">&copy; ' + new Date().getFullYear() + ' ' + esc(P.name) + ' · Figures come from independent research exercises and are not investment advice.</div>';
  }

  /* ---------- CV page ---------- */
  var cvp = document.getElementById("cvpage");
  if (cvp) {
    var C = S.cvPage || {}, pdf = P.cv || "";
    var dl = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>';
    cvp.innerHTML =
      '<section class="cvscreen"><div class="cvwrap rise"><div class="paper p2"></div><div class="paper p1"></div>' +
      '<article class="cvcard"><span class="corner"></span>' +
        '<div class="cvtop"><div class="badge">' + I.cv + '</div><div class="cveyebrow">' + esc(C.eyebrow) + '</div></div>' +
        '<h1>' + (C.headline || "") + '</h1>' +
        '<p class="cvtext">' + esc(C.text) + '</p>' +
        '<div class="cvstats">' + (C.stats || []).map(function (s) { return '<div><div class="v">' + esc(s.v) + '</div><div class="k">' + esc(s.k) + '</div></div>'; }).join("") + '</div>' +
        '<div class="cvactions">' +
          (pdf ? '<button class="btn gold" id="openCv">Open CV &rarr;</button><a class="cvpdf" href="' + esc(pdf) + '" download>' + dl + 'Download as PDF</a>'
               : '<span class="btn">CV coming soon</span>') +
        '</div>' +
        '<div class="cvnote"><span class="dot"></span><em>' + esc(C.note) + '</em></div>' +
        (C.updated ? '<div class="cvupd">Last updated ' + esc(C.updated) + '</div>' : '') +
      '</article></div></section>';

    if (pdf) {
      var modal = document.createElement("div");
      modal.className = "modal"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-label", "CV");
      modal.innerHTML = '<div class="sheet"><div class="mbar"><span>' + esc(P.name) + ' · CV</span>' +
        '<a href="' + esc(pdf) + '" download>' + dl + 'Download</a>' +
        '<button class="mx" aria-label="Close"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
        '<iframe title="CV" data-src="' + esc(pdf) + '#view=FitH&toolbar=0"></iframe></div>';
      document.body.appendChild(modal);
      var frame = modal.querySelector("iframe");
      var openM = function () {
        if (window.matchMedia("(max-width: 700px)").matches) { window.open(pdf, "_blank"); return; } // phones: open the PDF directly
        if (!frame.src) frame.src = frame.getAttribute("data-src");
        modal.classList.add("open"); document.body.style.overflow = "hidden";
      };
      var closeM = function () { modal.classList.remove("open"); document.body.style.overflow = ""; };
      document.getElementById("openCv").addEventListener("click", openM);
      modal.addEventListener("click", function (e) { if (e.target === modal) closeM(); });
      modal.querySelector(".mx").addEventListener("click", closeM);
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeM(); });
    }
  }

  /* ---------- Shared pop-up (memos) ---------- */
  function popup(title, html, footer) {
    var m = document.createElement("div");
    m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="sheet memo"><div class="mbar"><span>' + esc(title) + '</span>' +
      '<button class="mx" aria-label="Close"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
      '<div class="mbody">' + html + '</div>' + (footer ? '<div class="mfoot">' + footer + '</div>' : '') + '</div>';
    document.body.appendChild(m);
    var close = function () { m.classList.remove("open"); document.body.style.overflow = ""; setTimeout(function () { m.remove(); }, 400); document.removeEventListener("keydown", key); };
    var key = function (e) { if (e.key === "Escape") close(); };
    m.addEventListener("click", function (e) { if (e.target === m) close(); });
    m.querySelector(".mx").addEventListener("click", close);
    document.addEventListener("keydown", key);
    requestAnimationFrame(function () { m.classList.add("open"); document.body.style.overflow = "hidden"; });
  }

  /* ---------- Portfolio page ---------- */
  var pf = document.getElementById("portfolio");
  if (pf) {
    var DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>';
    var work = items.filter(function (x) { return x.type === "project" || x.type === "memo" || x.type === "model"; });
    var certs = items.filter(function (x) { return x.type === "certificate"; });
    var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var fdate = function (d) { var p = String(d || "").split("-"); return p.length > 1 ? (p[2] ? +p[2] + " " : "") + MON[+p[1] - 1] + " " + p[0] : (d || ""); };
    var sections = [
      { id: "deals", name: "Deals & Valuation", sub: "M&A and leveraged buyouts: would a buyer actually make money?" },
      { id: "research", name: "Equity Research", sub: "What a company is worth, and whether the market agrees." },
      { id: "quant", name: "Quant & Data", sub: "Original datasets and the patterns in them." }
    ];
    var known = sections.map(function (s) { return s.name; });
    var other = work.filter(function (x) { return known.indexOf(x.category) < 0; });
    if (other.length) sections.push({ id: "other", name: "More work", sub: "" });
    var inSec = function (s) { return work.filter(function (x) { return s.id === "other" ? known.indexOf(x.category) < 0 : x.category === s.name; }); };

    var media = function (x, big) {
      var top = (x.stats && x.stats[0]) || { v: x.category || "", k: "" };
      var fb = '<div class="noimg"><span class="nv">' + esc(top.v) + '</span><span class="nk">' + esc(top.k) + '</span></div>';
      if (!x.image) return '<div class="pmedia' + (big ? " big" : "") + '">' + fb + '</div>';
      return '<div class="pmedia' + (big ? " big" : "") + '"><img loading="lazy" src="' + esc(x.image) + '" alt="" onerror="this.parentNode.innerHTML=this.parentNode.getAttribute(\'data-fb\')"></div>';
    };
    var withFb = function (html, x) {
      var top = (x.stats && x.stats[0]) || { v: x.category || "", k: "" };
      var fb = '<div class="noimg"><span class="nv">' + esc(top.v) + '</span><span class="nk">' + esc(top.k) + '</span></div>';
      return html.replace('<div class="pmedia', '<div data-fb="' + esc(fb) + '" class="pmedia');
    };
    var statsHtml = function (x) {
      return (x.stats && x.stats.length) ? '<div class="pstats">' + x.stats.slice(0, 3).map(function (s) { return '<div><div class="v">' + esc(s.v) + '</div><div class="k">' + esc(s.k) + '</div></div>'; }).join("") + '</div>' : "";
    };
    var actions = function (x) {
      return '<div class="pact">' +
        (x.memo ? '<button class="btn sm gold" data-memo="' + esc(x.id) + '">Read memo &rarr;</button>' : '') +
        (x.files || []).map(function (f) { return '<a class="dl" href="' + esc(f.href) + '" download>' + DL + esc(f.label) + '</a>'; }).join("") +
      '</div>';
    };
    var card = function (x) {
      return '<article class="pcard rise" id="proj-' + esc(x.id) + '" data-date="' + esc(x.date) + '" data-title="' + esc(x.title) + '">' +
        withFb(media(x), x) +
        '<div class="pbody"><div class="pmeta"><span>' + esc(x.category) + '</span><span>' + esc(fdate(x.date)) + '</span></div>' +
        '<h3>' + esc(x.title) + '</h3><p>' + esc(x.summary) + '</p>' + statsHtml(x) + actions(x) + '</div></article>';
    };
    var feat = work[0];

    pf.innerHTML =
      '<section class="phead"><div class="wrap">' +
        '<div class="rise"><span class="eyebrow">Portfolio</span></div>' +
        '<h1 class="rise">Models and memos on <em>real companies.</em></h1>' +
        '<p class="sub rise">Every project is a working model plus a written view. Open the memo for the short version, or download the files and check my numbers.</p>' +
        '<div class="pbar rise"><div class="chips">' +
          '<button class="chip on" data-f="all">All</button>' +
          sections.filter(function (s) { return inSec(s).length; }).map(function (s) { return '<button class="chip" data-f="' + s.id + '">' + esc(s.name) + '</button>'; }).join("") +
        '</div><label class="sort">Sort <select id="psort"><option value="new">Newest</option><option value="old">Oldest</option><option value="az">A-Z</option></select></label></div>' +
      '</div></section>' +
      (feat ? '<section class="wrap"><div class="flabel rise">Latest project</div>' +
        '<article class="feat rise">' + withFb(media(feat, true), feat) +
        '<div class="pbody"><div class="pmeta"><span>' + esc(feat.category) + '</span><span>' + esc(fdate(feat.date)) + '</span></div>' +
        '<h2>' + esc(feat.title) + '</h2><p>' + esc(feat.summary) + '</p>' + statsHtml(feat) + actions(feat) + '</div></article></section>' : '') +
      sections.map(function (s) {
        var list = inSec(s); if (!list.length) return "";
        return '<section class="psec wrap" id="' + s.id + '" data-sec="' + s.id + '"><div class="shead rise"><h2>' + esc(s.name) + '</h2><span class="cnt">' + list.length + (list.length > 1 ? " projects" : " project") + '</span></div>' +
          (s.sub ? '<p class="ssub rise">' + esc(s.sub) + '</p>' : '') +
          '<div class="pgrid">' + list.map(card).join("") + '</div></section>';
      }).join("") +
      (certs.length ? '<section class="psec wrap" id="certificates" data-sec="certificates"><div class="shead rise"><h2>Certificates</h2><span class="cnt">Extracurricular job simulations</span></div>' +
        '<div class="cgrid">' + certs.map(function (c) {
          return '<div class="ccard rise"><div class="cbadge">' + I.cv + '</div><div><div class="pmeta"><span>' + esc(c.issuer || "") + ' · Job simulation</span><span>' + esc(fdate(c.date)) + '</span></div>' +
            '<h3>' + esc(c.title) + '</h3><p>' + esc(c.summary) + '</p>' + (c.link ? '<a class="dl" href="' + esc(c.link) + '" target="_blank" rel="noopener">View certificate &rarr;</a>' : '') + '</div></div>';
        }).join("") + '</div></section>' : '') +
      '<div class="foot">Figures come from independent research exercises and are not investment advice.</div>';

    /* filter chips */
    pf.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        pf.querySelectorAll(".chip").forEach(function (o) { o.classList.toggle("on", o === c); });
        var f = c.getAttribute("data-f");
        pf.querySelectorAll(".psec[data-sec]").forEach(function (s) { s.style.display = (f === "all" || s.getAttribute("data-sec") === f || s.id === "certificates" && f === "all") ? "" : "none"; });
        var fe = pf.querySelector(".feat"); if (fe) fe.parentNode.style.display = f === "all" ? "" : "none";
      });
    });
    /* sort */
    document.getElementById("psort").addEventListener("change", function () {
      var v = this.value;
      pf.querySelectorAll(".pgrid").forEach(function (g) {
        Array.prototype.slice.call(g.children).sort(function (a, b) {
          if (v === "az") return a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"));
          var d = a.getAttribute("data-date").localeCompare(b.getAttribute("data-date"));
          return v === "old" ? d : -d;
        }).forEach(function (el) { g.appendChild(el); });
      });
    });
    /* memo pop-ups */
    pf.addEventListener("click", function (e) {
      var b = e.target.closest("[data-memo]"); if (!b) return;
      var x = work.filter(function (w) { return w.id === b.getAttribute("data-memo"); })[0]; if (!x) return;
      var foot = (x.files || []).map(function (f) { return '<a class="dl" href="' + esc(f.href) + '" download>' + DL + esc(f.label) + '</a>'; }).join("") +
        '<span class="disc">Independent academic analysis. Not investment advice.</span>';
      popup(x.title, x.memo, foot);
    });
    /* jump to a project or section from a link */
    var jump = function () {
      var h = location.hash && document.getElementById(location.hash.slice(1));
      if (!h) return;
      pf.querySelectorAll(".chip")[0].click();
      setTimeout(function () { h.scrollIntoView({ behavior: "smooth", block: h.classList.contains("pcard") ? "center" : "start" }); if (h.classList.contains("pcard")) { h.classList.add("in", "flash"); setTimeout(function () { h.classList.remove("flash"); }, 2200); } }, 60);
    };
    window.addEventListener("hashchange", jump); setTimeout(jump, 150);
  }

  /* ---------- Tools page ---------- */
  var tp = document.getElementById("tools");
  if (tp) {
    var tools = (S.items || []).filter(function (x) { return x.type === "tool"; });
    var fws = (S.items || []).filter(function (x) { return x.type === "framework"; });
    var EXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>';
    tp.innerHTML =
      '<section class="phead"><div class="wrap">' +
        '<div class="rise"><span class="eyebrow">Interactive Tools &amp; AI Framework</span></div>' +
        '<h1 class="rise">Models you can <em>drive yourself.</em></h1>' +
        '<p class="sub rise">The same math as my Excel models, rebuilt to run in the browser. Type in any company, drag the levers, and the answer updates as you move.</p>' +
      '</div></section>' +
      '<section class="wrap"><div class="tgrid">' + tools.map(function (t) {
        return '<article class="tcard rise" id="' + esc(t.id) + '">' +
          '<div class="tprev" data-tool="' + esc(t.id) + '"><iframe tabindex="-1" loading="lazy" title="" src="' + esc(t.file) + '"></iframe><span class="tplay">Launch &rarr;</span></div>' +
          '<div class="pbody"><div class="pmeta"><span>' + esc(t.tag || "Interactive tool") + '</span><span>Live in browser</span></div>' +
          '<h3>' + esc(t.title) + '</h3><p>' + esc(t.summary) + '</p>' +
          ((t.levers || []).length ? '<div class="levers"><span class="lk">You control</span>' + t.levers.map(function (l) { return '<span class="lv">' + esc(l) + '</span>'; }).join("") + '</div>' : '') +
          '<div class="pact"><button class="btn sm gold" data-tool="' + esc(t.id) + '">Launch modeler &rarr;</button>' +
          '<a class="dl" href="' + esc(t.file) + '" target="_blank" rel="noopener">' + EXT + 'Open in new tab</a></div></div></article>';
      }).join("") + '</div></section>' +
      (fws.length ? '<section class="psec wrap" id="ai"><div class="shead rise"><h2>AI Framework</h2><span class="cnt">Research workflow</span></div>' +
        fws.map(function (f) {
          return '<article class="fwcard rise"><div class="fwtop"><div><div class="pmeta"><span>' + esc(f.company || "") + '</span></div><h3>' + esc(f.title) + '</h3></div>' +
            (f.status ? '<span class="fwstatus"><span class="dot"></span>' + esc(f.status) + '</span>' : '') + '</div>' +
            '<p class="fwsum">' + esc(f.summary) + '</p>' +
            '<ol class="fwsteps">' + (f.steps || []).map(function (st, i) {
              return '<li><span class="sn">0' + (i + 1) + '</span><div><b>' + esc(st.t) + '</b><p>' + esc(st.d) + '</p></div></li>';
            }).join("") + '</ol></article>';
        }).join("") + '</section>' : '') +
      '<div class="foot">Illustrative models for learning and discussion. Not investment advice.</div>';

    var openTool = function (id) {
      var t = tools.filter(function (x) { return x.id === id; })[0]; if (!t) return;
      if (window.matchMedia("(max-width: 700px)").matches) { window.open(t.file, "_blank"); return; }
      var m = document.createElement("div");
      m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
      m.innerHTML = '<div class="sheet tool"><div class="mbar"><span>' + esc(t.title) + '</span>' +
        '<a href="' + esc(t.file) + '" target="_blank" rel="noopener">' + EXT + 'New tab</a>' +
        '<button class="mx" aria-label="Close"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
        '<iframe title="' + esc(t.title) + '" src="' + esc(t.file) + '"></iframe></div>';
      document.body.appendChild(m);
      var close = function () { m.classList.remove("open"); document.body.style.overflow = ""; setTimeout(function () { m.remove(); }, 400); document.removeEventListener("keydown", key); };
      var key = function (e) { if (e.key === "Escape") close(); };
      m.addEventListener("click", function (e) { if (e.target === m) close(); });
      m.querySelector(".mx").addEventListener("click", close);
      document.addEventListener("keydown", key);
      requestAnimationFrame(function () { m.classList.add("open"); document.body.style.overflow = "hidden"; });
    };
    tp.addEventListener("click", function (e) { var b = e.target.closest("[data-tool]"); if (b) openTool(b.getAttribute("data-tool")); });
    var tj = function () { var h = location.hash && document.getElementById(location.hash.slice(1)); if (h) setTimeout(function () { h.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80); };
    window.addEventListener("hashchange", tj); setTimeout(tj, 150);
  }

  /* ---------- Contact pop-up (works without an email app) ---------- */
  function contactBox() {
    var e = P.email || "";
    var gm = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(e) + "&su=" + encodeURIComponent("Hello from your portfolio");
    var html = '<p class="cintro">Happy to talk about internships, my models, or anything on this site. The quickest way is email.</p>' +
      '<div class="crow"><div><div class="ck">Email</div><div class="cval">' + esc(e) + '</div></div><button class="btn sm" id="copyEmail">Copy</button></div>' +
      '<div class="cbtns"><a class="btn sm gold" href="' + esc(gm) + '" target="_blank" rel="noopener">Write in Gmail &rarr;</a>' +
      '<a class="btn sm" href="mailto:' + esc(e) + '">Email app</a>' +
      (P.linkedin ? '<a class="btn sm" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' : '') + '</div>';
    popup("Get in touch", html, "");
    var b = document.getElementById("copyEmail");
    if (b) b.addEventListener("click", function () {
      var done = function () { b.textContent = "Copied \u2713"; setTimeout(function () { b.textContent = "Copy"; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(e).then(done, function () { fallback(); });
      else fallback();
      function fallback() { var t = document.createElement("textarea"); t.value = e; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (x) {} t.remove(); }
    });
  }
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest("[data-contact]"); if (!a) return;
    ev.preventDefault(); document.body.classList.remove("menu-open"); contactBox();
  });

  /* ---------- Fade-in on scroll ---------- */
  var els = document.querySelectorAll(".rise");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i, 8) * 70) + "ms"; io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
