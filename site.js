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
      (P.email ? '<a href="mailto:' + esc(P.email) + '" aria-label="Email" title="Email">' + I.mail + '</a>' : '') +
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
    var dots = [[12, 20, 56, "#d9b867"], [84, 14, 36, "#e0533c"], [70, 62, 70, "#3ccf6e"], [24, 78, 34, "#e0533c"], [92, 48, 22, "#d9b867"], [46, 90, 26, "#3ccf6e"], [6, 52, 18, "#d9b867"]];
    var bk = dots.map(function (d, i) {
      return '<span class="bokeh" style="left:' + d[0] + '%;top:' + d[1] + '%;width:' + d[2] + 'px;height:' + d[2] + 'px;background:' + d[3] + ';animation-delay:-' + i * 3 + 's"></span>';
    }).join("");
    bd.innerHTML = svg + bk;
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
        '<p class="closing rise" id="contact">' + esc(H.closing) + ' <a href="mailto:' + esc(P.email) + '">Start a conversation &rarr;</a></p>' +
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

  /* ---------- Fade-in on scroll ---------- */
  var els = document.querySelectorAll(".rise");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i, 8) * 70) + "ms"; io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
