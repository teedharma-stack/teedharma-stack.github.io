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
     link: "projects.html#proj-my-new-project",
     memo: "<p><b>View:</b> My main point.</p><p><b>Risks:</b> What could go wrong.</p>"   // optional: short memo shown in a pop-up
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
      image: "kmb_post_card.png", link: "projects.html#proj-kmb",
      memo: "<p><b>View:</b> This is the kind of deal GameStop's bid for eBay was not: strategically logical, prudently financed, and genuinely accretive. On an adjusted-earnings basis it lifts KMB's adjusted EPS by about <b>30%</b>, and it needs only ~12% of the promised $2.1B synergies just to break even, so the margin of safety is real. Leverage lands near <b>3x</b>. And yet KMB stock fell ~12% on the news. The reason is the price.</p><p><b>The deal:</b> ~$48.7B for Kenvue (Tylenol, Band-Aid), $3.50 cash + 0.14625 KMB shares (~$21.01, a 46% premium). KMB issues ~280M new shares on a ~330M base, so Kenvue holders end up owning ~46% of the combined company. Close to a merger of equals.</p><p><b>The catch:</b> the 30% is adjusted; on a GAAP basis, amortization of the acquired intangibles makes it dilutive for years. And a 46% premium for a litigation-clouded target, paid largely in stock, is a lot. The market's 12% haircut to KMB says the buyer is taking the risk.</p><p><b>Bottom line:</b> a sound, accretive, prudently-levered deal that may simply have cost too much.</p>"
    },
    {
      type: "project", id: "seacomps",
      title: "Sea Limited (SE): Trading Comparables",
      date: "2026-08-08", category: "Equity Research",
      summary: "Sea on peer multiples. Already at a premium to the broad set (18x EBITDA vs 13x median); only against its closest premium comps does it look cheap.",
      stats: [ { v: "~$87", k: "comps (all peers)" }, { v: "~$115", k: "comps (premium)" }, { v: "18x", k: "EV/EBITDA" } ],
      files: [ { label: "Model (xlsx)", href: "Sea_Limited_Comps.xlsx" }, { label: "Note (docx)", href: "Sea_Limited_Comps_Note.docx" } ],
      image: "comps_post_card.png", link: "projects.html#proj-seacomps",
      memo: "<p><b>View:</b> I valued Sea a second way, on trading comparables, to test the DCF. They do not fully agree, and that is the useful part. My DCF implied ~$136. Comps are more sobering: against the full peer set Sea already trades at a premium, and the peer median implies only about <b>$87</b> (below the $108 market). Only against its closest premium comps (MercadoLibre, Coupang) does it imply about <b>$115</b>.</p><p><b>The peer set splits in two:</b> premium growth names (MELI ~25x EBITDA, ~50x earnings) and cheap China-discount names (single-digit to low-teens EBITDA, ~10-12x earnings). Sea sits at the premium end, ~18x EBITDA and ~41x earnings, above the peer median of 13x and 37x.</p><p><b>Reconciling with the DCF:</b> the DCF rewards Sea for future growth and its swing to profit, which trailing multiples cannot see. The two agree only if Sea keeps earning premium, MELI-like multiples, a bet on execution rather than a margin of safety.</p><p><b>Bottom line:</b> on absolute cash flows Sea looks cheap; on relative multiples it looks fully valued against the broad group. A good business with real upside if it executes, not a deep-value bargain.</p>"
    },
    {
      type: "project", id: "crox",
      title: "Crocs (CROX) Leveraged Buyout: Project Foam",
      date: "2026-08-06", category: "Deals & Valuation",
      summary: "A five-year LBO of a 25%-margin cash machine priced on fad fears. ~15% IRR driven almost entirely by paying down debt with the company's own cash.",
      stats: [ { v: "~15%", k: "base-case IRR" }, { v: "2.0x", k: "MOIC" }, { v: "5.0x", k: "entry leverage" } ],
      files: [ { label: "Model (xlsx)", href: "Crocs_LBO_Model.xlsx" }, { label: "Memo (docx)", href: "Crocs_LBO_Memo.docx" } ],
      image: "crox_post_card.png", link: "projects.html#proj-crox",
      memo: "<p><b>View:</b> I would take Crocs private at roughly 9x EBITDA. It is a business that throws off enormous cash (about $625M of free cash flow on $4B of revenue, a 25% operating margin) and trades at a modest multiple because the market keeps betting the brand is a fad. Base case: a <b>15% IRR and a 2.0x return</b> over five years.</p><p><b>The deal:</b> take-private at 9x EBITDA (~$9B EV), funded with 5x leverage ($5B debt, $4B equity). Over five years EBITDA grows a modest 3% a year and all free cash flow sweeps into debt paydown.</p><p><b>Why it works:</b> debt falls from $5B to about $2.2B (~$2.8B repaid), and exiting at the same 9x, equity grows from $4B to ~$8.2B. Almost all of the return comes from paying down debt with Crocs' own cash, not from the multiple going up.</p><p><b>The catch:</b> Crocs is effectively a single-product brand with real fad risk. Leverage cuts both ways: if sales roll over, the same debt that drives the return drives a large loss. Do the deal only at a disciplined entry, not by chasing the 2026 rally.</p>"
    },
    {
      type: "project", id: "sea",
      title: "Sea Limited (SE) DCF Valuation",
      date: "2026-08-04", category: "Equity Research",
      summary: "Ground-up DCF of Shopee, Garena and SeaMoney. ~$136 per share vs ~$108 market, with a full sensitivity table and a Buy note.",
      stats: [ { v: "$136", k: "implied value" }, { v: "+26%", k: "upside" }, { v: "11.5%", k: "WACC" } ],
      files: [ { label: "Model (xlsx)", href: "Sea_Limited_DCF.xlsx" }, { label: "Note (docx)", href: "Sea_Limited_Research_Note.docx" } ],
      image: "sea_dcf_post_card.png", link: "projects.html#proj-sea",
      memo: "<p><b>View:</b> Sea screens as modestly undervalued. My DCF implies a value of about <b>$136 per share</b> versus roughly $108 in the market, around <b>26% upside</b>, and it looks cheap across most reasonable assumptions. Recommendation: <b>Buy</b>.</p><p><b>The thesis:</b> a real profitability inflection (FY2025 net income ~$1.6B, roughly triple the prior year, on revenue up 36% to $22.9B), growth that re-accelerated to +47% in Q1 2026, and a long runway as Southeast Asia's digital leader.</p><p><b>The valuation:</b> seven years of free cash flow discounted at 11.5% with 3.5% terminal growth. Flexing those gives a range of roughly <b>$91 to $177</b>; the stock only screens fully valued above a ~13.5% discount rate.</p><p><b>Risks:</b> competition (TikTok Shop, Lazada), the fintech loan book, Free Fire concentration, and a valuation where ~71% of value sits in the terminal year.</p>"
    },
    {
      type: "project", id: "gme",
      title: "GameStop / eBay: Accretion / Dilution",
      date: "2026-07", category: "Deals & Valuation",
      summary: "+65% accretive with synergies, -29% without, at ~9.3x leverage. The whole deal rests on synergies.",
      stats: [ { v: "+65%", k: "with synergies" }, { v: "-29%", k: "without" }, { v: "9.3x", k: "leverage" } ],
      files: [ { label: "Model (xlsx)", href: "GME_eBay_Accretion_Dilution.xlsx" }, { label: "Memo (docx)", href: "GME_eBay_MA_Memo.docx" } ],
      image: "ma_post_card.png", link: "projects.html#proj-ma",
      memo: "<p><b>View:</b> the offer screens as roughly <b>65% accretive</b> to GameStop's EPS, but that accretion is manufactured almost entirely by $2.0B of promised, unrealized synergies. Strip them out and it turns <b>~29% dilutive</b>, while levering the combined company to about <b>9x EBITDA</b> at close. Skeptical.</p><p><b>The math:</b> ~$56B deal, 50% cash and 50% stock, ~1.26B new shares issued (nearly three times GameStop's base). Pro-forma EPS ~$1.54 versus $0.93 standalone; breakeven near $620M of synergies, about 31% of the $2.0B claimed.</p><p><b>Leverage:</b> ~$30.6B pro-forma debt against ~$3.3B EBITDA is ~9x at close, above the ~5x prudence ceiling.</p>"
    },
    {
      type: "project", id: "plnt",
      title: "Planet Fitness (PLNT) Leveraged Buyout",
      date: "2026-05", category: "Deals & Valuation",
      summary: "LBO of a franchise-heavy gym chain. ~17% IRR and 2.2x money multiple in the base case.",
      stats: [ { v: "~17%", k: "IRR" }, { v: "2.2x", k: "MOIC" } ],
      files: [ { label: "Model (xlsx)", href: "PLNT_LBO_Model.xlsx" }, { label: "Memo (docx)", href: "PLNT_Investment_Memo.docx" } ],
      image: "", link: "projects.html#proj-lbo",
      memo: "<p><b>Recommendation:</b> acquire via take-private at ~$62/share (~19% premium, ~12&times; EBITDA). A high-quality, cash-generative franchise trading at half its year-ago value on attrition fears we view as overdone.</p><p><b>Base-case returns:</b> ~17% IRR and ~2.2&times; money multiple over 5 years, driven by EBITDA growth (~$552M to ~$800M) and debt paydown (~$3.3B to ~$2.1B), not multiple expansion.</p><p><b>Key risks:</b> membership attrition (the very reason it is cheap), leverage and interest-rate sensitivity, and multiple contraction on exit.</p>"
    },
    {
      type: "project", id: "ipo",
      title: "Thai IPO Event Study",
      date: "2026-03", category: "Equity Research",
      summary: "If you had bought every Thai IPO of 2025-26, would you have beaten the market? An original dataset of all 19 SET and mai listings says no.",
      stats: [ { v: "-23%", k: "median return" }, { v: "-51pp", k: "vs. SET index" }, { v: "4 of 19", k: "beat the market" } ],
      files: [ { label: "Tracker (xlsx)", href: "thai_ipo_tracker.xlsx" }, { label: "Note (docx)", href: "Thai_IPO_Research_Note.docx" } ],
      image: "ipo_excess_chart.png", link: "projects.html#proj-ipo",
      memo: "<p><b>The question:</b> if you had bought every Thai IPO of the last two years, would you have beaten simply buying the market?</p><p>I built an original dataset of all 19 companies that listed on the SET and mai in 2025-26, and measured each one's return since listing against the SET Index over the identical window, isolating the stock's own performance from the market's move.</p><p><b>Findings:</b></p><ul><li>Median return since listing: <b>-23%</b> (63% now trade below their offer price)</li><li>Median return versus the market: <b>-51 percentage points</b></li><li>Only <b>21% (4 of 19)</b> beat simply holding the index</li></ul><p>What makes it stark: the SET rose 20-44% over these windows, so IPO buyers lost ground while the broad market gained.</p><p><b>Method &amp; limitations:</b> self-collected data benchmarked per listing date; a small, recent sample (n=19) over a single window; simple, non-dividend-adjusted prices. Directionally robust; magnitudes would tighten with a longer history.</p>"
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
