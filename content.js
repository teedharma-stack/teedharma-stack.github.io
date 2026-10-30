/* =====================================================================
   CONTENT FILE  ·  This is the ONLY file you need to edit to add things.
   ---------------------------------------------------------------------
   HOW TO ADD A NEW ITEM
   1. Copy one of the templates below (everything from { to },).
   2. Paste it inside the "items" list further down, right after the
      line that says  items: [
   3. Fill in the text between the quotes. Keep the quotes.
   4. Every entry ends with  },   (a closing brace AND a comma).
   5. Commit. The site updates itself in 1-2 minutes.

   Dates are "YYYY-MM-DD" (or "YYYY-MM" if you don't know the day).
   Newest items appear first automatically.
   Anything optional can be deleted, or left as "" and it just won't show.

   ---------------- TEMPLATE: project / memo / model ----------------
   {
     type: "project",                       // "project", "memo" or "model"
     id: "my-new-project",                  // short name, no spaces
     title: "Company (TICKER): What I did",
     date: "2026-11-01",
     category: "Equity Research",           // "Deals & Valuation", "Equity Research", "Quant & Data"
     summary: "One or two sentences on what I found.",
     stats: [ { v: "+20%", k: "upside" }, { v: "11%", k: "WACC" } ],   // optional
     files: [ { label: "Model (xlsx)", href: "files/My_Model.xlsx" } ],  // optional
     image: "images/my_card.png",           // optional
     link: "projects.html#proj-my-new-project"
   },

   ---------------- TEMPLATE: certificate ----------------
   {
     type: "certificate",
     id: "my-cert",
     title: "Company X Job Simulation",
     issuer: "Forage",
     date: "2026-11-01",
     summary: "What the tasks covered.",
     image: "",                             // optional
     link: ""                               // optional: link to the certificate PDF
   },
   ===================================================================== */

window.SITE = {

  /* ---------- About you (sidebar) ---------- */
  profile: {
    name: "Teedharma Somsuk",
    role: "Finance Student · Equity Research",
    status: "Available · Thailand / SEA",
    photo: "photo.jpg",          // upload your photo with exactly this name (photo.jpg). No photo? Your initials show instead.
    cv: "Teedharma_Somsuk_CV.pdf",      // To update your CV: upload the new PDF with this exact name. Nothing else to change.
    email: "pufferfish211248@gmail.com",
    linkedin: "https://www.linkedin.com/in/teedharma-somsuk-b40ba3373/",
    github: "https://github.com/teedharma-stack"
  },

  /* ---------- Home page text ---------- */
  home: {
    eyebrow: "Equity Research · Valuation · Deal Analysis",
    intro: "<b class='g'>Finance student at Wuhan University's School of Economics and Management</b>, based in Thailand. I build the work analysts actually do: <b>DCFs, trading comps, LBOs and M&A models</b> on real companies, each with a written memo that takes a position. Recent work covers a Sea Limited DCF, a Crocs leveraged buyout and Kimberly-Clark's $48.7B Kenvue deal, plus two interactive deal modelers anyone can drive.",
    pill: "Open to summer analyst internships · Thailand / SEA",

    whatTitle: "Valuation and deal analysis on real companies",
    whatIntro: "I pick real companies and real deals, build the model from the filings, and write down what I think and why. Three areas where there is finished work you can open and check:",
    areas: [
      {
        title: "Deals & Valuation (M&A / LBO)",
        text: "Leveraged buyouts of Crocs and Planet Fitness (~15% and ~17% IRR) and accretion/dilution on Kimberly-Clark / Kenvue and GameStop / eBay. Every model comes with a memo on whether the deal actually makes sense.",
        linkText: "See the deal work", link: "projects.html#deals"
      },
      {
        title: "Equity Research",
        text: "A Sea Limited DCF (~$136 vs ~$108 market, Buy) paired with trading comps that partly disagree with it, plus an event study of Thai IPO first-day returns. I keep that kind of tension in rather than hiding it.",
        linkText: "Read the research", link: "projects.html#research"
      },
      {
        title: "Interactive Tools & AI Framework",
        text: "A Universal LBO Modeler and a Universal M&A Modeler you can drive in the browser, and an AI-assisted research workflow I am building to test AI earnings forecasts against real analysts, starting with BDMS.",
        linkText: "Open the tools", link: "tools.html"
      }
    ],
    closing: "Looking for a summer analyst internship in investment banking, private equity or equity research, in Thailand or anywhere in Southeast Asia. Based in Thailand, studying in Wuhan, happy to relocate."
  },

  /* ---------- CV page text ---------- */
  cvPage: {
    eyebrow: "Third-year Finance · Wuhan University · GPA 3.66",
    headline: "I build the models behind <em>deal decisions</em>, then write down what they say.",
    text: "BBA Finance at Wuhan University's School of Economics and Management, with an investment banking internship at Bualuang Securities and a portfolio of self-built DCF, comps, LBO and M&A models. I build models and tools in Python and Excel, and work across Thai, Chinese and Southeast Asian markets.",
    stats: [
      { v: "3.66", k: "GPA · Wuhan University" },
      { v: "IB", k: "Intern · Bualuang Securities" },
      { v: "7+", k: "Self-built models" },
      { v: "3", k: "Languages · TH · EN · ZH" }
    ],
    note: "Open to summer analyst internships in investment banking, private equity and equity research. Thailand / SEA.",
    updated: "October 2026"             // change this when you upload a new CV
  },

  /* ---------- All your work. Newest first is automatic. ---------- */
  items: [
    {
      type: "project", id: "kmb",
      title: "Kimberly-Clark / Kenvue: Accretion / Dilution",
      date: "2026-08-10", category: "Deals & Valuation",
      summary: "Accretion/dilution on Kimberly-Clark's real $48.7B acquisition of Kenvue. Lifts adjusted EPS ~30% and needs only ~12% of synergies to break even, yet the market still balked at the 46% premium.",
      stats: [ { v: "+30%", k: "adj-EPS accretion" }, { v: "2.9x", k: "pro-forma leverage" }, { v: "46%", k: "premium paid" } ],
      files: [ { label: "Model (xlsx)", href: "KMB_Kenvue_Accretion_Dilution.xlsx" }, { label: "Memo (docx)", href: "KMB_Kenvue_MA_Memo.docx" } ],
      image: "kmb_post_card.png", link: "projects.html#proj-kmb"
    },
    {
      type: "project", id: "seacomps",
      title: "Sea Limited (SE): Trading Comparables",
      date: "2026-08-08", category: "Equity Research",
      summary: "Sea on peer multiples. Already at a premium to the broad set (18x EBITDA vs 13x median); only against its closest premium comps does it look cheap.",
      stats: [ { v: "~$87", k: "comps (all peers)" }, { v: "~$115", k: "comps (premium)" }, { v: "18x", k: "EV/EBITDA" } ],
      files: [ { label: "Model (xlsx)", href: "Sea_Limited_Comps.xlsx" }, { label: "Note (docx)", href: "Sea_Limited_Comps_Note.docx" } ],
      image: "comps_post_card.png", link: "projects.html#proj-seacomps"
    },
    {
      type: "project", id: "crox",
      title: "Crocs (CROX) Leveraged Buyout: Project Foam",
      date: "2026-08-06", category: "Deals & Valuation",
      summary: "A five-year LBO of a 25%-margin cash machine priced on fad fears. ~15% IRR driven almost entirely by paying down debt with the company's own cash.",
      stats: [ { v: "~15%", k: "base-case IRR" }, { v: "2.0x", k: "MOIC" }, { v: "5.0x", k: "entry leverage" } ],
      files: [ { label: "Model (xlsx)", href: "Crocs_LBO_Model.xlsx" }, { label: "Memo (docx)", href: "Crocs_LBO_Memo.docx" } ],
      image: "crox_post_card.png", link: "projects.html#proj-crox"
    },
    {
      type: "project", id: "sea",
      title: "Sea Limited (SE) DCF Valuation",
      date: "2026-08-04", category: "Equity Research",
      summary: "Ground-up DCF of Shopee, Garena and SeaMoney. ~$136 per share vs ~$108 market, with a full sensitivity table and a Buy note.",
      stats: [ { v: "$136", k: "implied value" }, { v: "+26%", k: "upside" }, { v: "11.5%", k: "WACC" } ],
      files: [ { label: "Model (xlsx)", href: "Sea_Limited_DCF.xlsx" }, { label: "Note (docx)", href: "Sea_Limited_Research_Note.docx" } ],
      image: "sea_dcf_post_card.png", link: "projects.html#proj-sea"
    },
    {
      type: "project", id: "gme",
      title: "GameStop / eBay: Accretion / Dilution",
      date: "2026-07", category: "Deals & Valuation",
      summary: "+65% accretive with synergies, -29% without, at ~9.3x leverage. The whole deal rests on synergies.",
      stats: [ { v: "+65%", k: "with synergies" }, { v: "-29%", k: "without" }, { v: "9.3x", k: "leverage" } ],
      files: [ { label: "Model (xlsx)", href: "GME_eBay_Accretion_Dilution.xlsx" }, { label: "Memo (docx)", href: "GME_eBay_MA_Memo.docx" } ],
      image: "ma_post_card.png", link: "projects.html#proj-ma"
    },
    {
      type: "project", id: "plnt",
      title: "Planet Fitness (PLNT) Leveraged Buyout",
      date: "2026-05", category: "Deals & Valuation",
      summary: "LBO of a franchise-heavy gym chain. ~17% IRR and 2.2x money multiple in the base case.",
      stats: [ { v: "~17%", k: "IRR" }, { v: "2.2x", k: "MOIC" } ],
      files: [ { label: "Model (xlsx)", href: "PLNT_LBO_Model.xlsx" }, { label: "Memo (docx)", href: "PLNT_Investment_Memo.docx" } ],
      image: "", link: "projects.html#proj-lbo"
    },
    {
      type: "project", id: "ipo",
      title: "Thai IPO Event Study",
      date: "2026-03", category: "Equity Research",
      summary: "How Thai IPOs trade after listing, measured as excess returns over the market.",
      stats: [],
      files: [ { label: "Tracker (xlsx)", href: "thai_ipo_tracker.xlsx" }, { label: "Note (docx)", href: "Thai_IPO_Research_Note.docx" } ],
      image: "ipo_excess_chart.png", link: "projects.html#proj-ipo"
    },

    /* ---- Interactive tools ---- */
    {
      type: "tool", id: "lbo-modeler",
      title: "Universal LBO Modeler", date: "2026-08-06",
      summary: "Enter any company, drag the deal levers, watch IRR and MOIC update live.",
      link: "tools.html"
    },
    {
      type: "tool", id: "ma-modeler",
      title: "Universal M&A Modeler", date: "2026-08-10",
      summary: "Accretion/dilution for any deal, with live synergy and financing levers.",
      link: "tools.html"
    },

    /* ---- Certificates (extracurricular job simulations) ---- */
    {
      type: "certificate", id: "citi",
      title: "Citi Finance Job Simulation", issuer: "Forage",
      date: "2026-08-17",
      summary: "Balance sheet trends and KPI analysis, RWA validation, Omicron impact on card sales, limits monitoring and deposits tracking.",
      image: "", link: ""
    },
    {
      type: "certificate", id: "bofa",
      title: "Bank of America Investment Banking Job Simulation", issuer: "Forage",
      date: "2026-08",
      summary: "Webflix SWOT and financial summary, Nintendo DCF (~$78.71 per share), client summary email.",
      image: "", link: ""
    },
  ]
};
