/* =========================================================================
   Portfolio-0.2 — router + render engine (v2 scroll-spy layout)
   Vanilla JS, no build step. Hash routing:
     #tog | #tbh   → project page (all sections rendered, scroll-based nav)
     #bio          → about page
   Empty / unknown hash → falls back to #tog.

   Deep-link into a project section: #tog#combat-puzzle (inner fragment
   smooth-scrolls after the project renders).
   ========================================================================= */
(function () {
  'use strict';

  // ── Constants ────────────────────────────────────────────────────────────
  var DEFAULT_LVL = 'tog';
  var MOBILE_BREAKPOINT = 900;
  var PROJECT_ORDER = ['tog', 'tbh'];

  // Placeholder hero asset — Phase B will surface real candidates.
  var PLACEHOLDER_HERO = {
    src: './PortfolioPieces/ThreadsOfGod/clips/extended-exchange.mp4',
    poster: './PortfolioPieces/ThreadsOfGod/clips/extended-exchange-poster.jpg'
  };

  // Software brand SVGs — keyed by exact string in projects[].tools.
  // Tools without an entry here are silently filtered from the rendered list
  // (so e.g. "Solo Developer" or "Behavior Trees" don't show as text). Paths
  // sourced from simple-icons (CC0 / MIT). currentColor lets CSS theme them.
  var TOOL_ICONS = {
    'Unreal Engine 5':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Unreal Engine 5</title>' +
      '<path fill="currentColor" d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z"/></svg>',
    'Unity':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Unity</title>' +
      '<path fill="currentColor" d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"/></svg>',
    'C++':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>C++</title>' +
      '<path fill="currentColor" d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>',
    'C#':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>C#</title>' +
      '<path fill="currentColor" d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>',
    'Cascadeur':
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Cascadeur</title>' +
      '<path d="M8.5 8 7 3l5 4 5-4-1.5 5A6.5 6.5 0 1 1 8.5 8z"/>' +
      '<ellipse cx="12" cy="13.5" rx="3.2" ry="6.5"/>' +
      '<path d="M5.5 13.5h13M12 7v13"/></svg>',
    'Maya':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Maya</title>' +
      '<path fill="currentColor" d="M4.348 0 .69 2.203v16.875l3.657-2.203h17.297V1.219c0-.67-.551-1.219-1.22-1.219H4.349zm18.297 3.75v14.125H4.627l-1.943 1.17v3.736c0 .67.55 1.219 1.218 1.219H23.31V3.75h-.664zm-14.471.025h2.937l1.885 7.508 1.977-7.48-.012-.028h2.857v9.354h-2.216v-6.04l-1.565 6.026v.014h-2.203l-1.656-6.28v6.28H8.174V3.775zm1.33 14.762h1.18l1.068 3.543h-.902l-.217-.773H9.568l-.197.773h-.88l1.013-3.543zm1.918 0h.932l.648 1.494.643-1.494h.894l-1.113 2.133v1.41h-.887v-1.406l-1.117-2.137zm3.826 0h1.18l1.068 3.543h-.9l-.217-.773h-1.065l-.197.773h-.88l1.011-3.543zm-5.156.582-.362 1.53h.73l-.368-1.53zm5.744 0-.36 1.53h.73l-.37-1.53z"/></svg>',
    'ZBrush':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>ZBrush</title>' +
      '<path fill="currentColor" d="M3 3h18v3.4L9 17.6h12V21H3v-3.4L15 6.4H3V3z"/></svg>',
    'Miro':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Miro</title>' +
      '<path fill="currentColor" d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z"/></svg>',
    'Fork':
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>Fork</title>' +
      '<circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
      '<path fill="currentColor" d="M8.5 11V4h1v5h1V4h1v5h1V4h1v5h1V4h1v7h-1.75v9h-3.5v-9z"/></svg>',
    'HacknPlan':
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<title>HacknPlan</title>' +
      '<path d="M12 2 3 7v10l9 5 9-5V7l-9-5z"/>' +
      '<path stroke-width="1.3" d="M12 8 6.5 11v6L12 20l5.5-3v-6z"/>' +
      '<path stroke-width="1.3" d="M12 8v6L6.5 11M12 14l5.5-3"/></svg>'
  };

  // Sidebar ASCII icon — one locked glyph per block label. Single coherent
  // shape, monospace, cyberpunk-retro register (box-drawing + block elements
  // + geometric markers). Cycle toggle was retired 2026-05-24 once picks landed.
  var SIDEBAR_ICONS = {
    'Summary':         '┌───┐\n├═══┤\n└───┘',     // framed document
    'Jump to Section': '┌──▶\n│\n└──▶',           // directional bracket
    'Software':        '╔═══╗\n║>_ ║\n╚═══╝',     // terminal window
    'Key Takeaways':   ' ◇◆◇\n◆ ◆ ◆\n ◇◆◇',       // gem facets
    'Projects':        '┌─╖\n╞═╡\n└─╜'            // index card with dog-ear
  };

  // Mount points (queried once on init)
  var headerMount;
  var heroMount;        // full-width hero, above the 2-col grid
  var sidebarMount;
  var contentMount;
  var lightboxMount;
  var drawerScrim;

  // State -------------------------------------------------------------------
  var heroState = null;     // hero canvas (#bio route): { canvas, ctx, nodes, raf, observer, onResize }
  var lightboxState = null; // { images, idx, onKeydown }
  var fadeObserver = null;  // fade-up IntersectionObserver
  var scrollSpy = null;     // TOC scroll-spy IntersectionObserver
  var liveVideos = [];      // live <video> elements (so we can pause them on route swap)
  var drawerOpen = false;
  var currentLvl = null;    // last-rendered project slug (for tile is-current state)
  var spySuppressedUntil = 0; // ts; scroll-spy bails out before this (TOC click smooth-scroll)

  // ── Hash parsing ─────────────────────────────────────────────────────────
  // v2 hash forms:
  //   ""            → tog
  //   "tog" "tbh"   → that project
  //   "bio"         → about
  //   "tog#sec-id"  → tog, then scrollIntoView('sec-id')
  function parseHash() {
    var raw = (window.location.hash || '').replace(/^#/, '').trim();
    if (!raw) return { route: 'project', lvl: DEFAULT_LVL, fragment: null };

    // Strip and stash an inner fragment used for post-render section scroll.
    var fragment = null;
    var hashIdx = raw.indexOf('#');
    if (hashIdx !== -1) {
      fragment = raw.slice(hashIdx + 1) || null;
      raw = raw.slice(0, hashIdx);
    }

    if (raw === 'bio') return { route: 'bio', fragment: fragment };

    if (getProject(raw)) return { route: 'project', lvl: raw, fragment: fragment };

    // Legacy form #lvl=<slug>&s=<section> — preserve compatibility.
    if (raw.indexOf('lvl=') === 0 || raw.indexOf('&lvl=') !== -1) {
      var params = {};
      raw.split('&').forEach(function (pair) {
        var i = pair.indexOf('=');
        if (i === -1) return;
        params[pair.slice(0, i)] = decodeURIComponent(pair.slice(i + 1));
      });
      if (params.lvl && getProject(params.lvl)) {
        return { route: 'project', lvl: params.lvl, fragment: params.s || null };
      }
    }

    return { route: 'project', lvl: DEFAULT_LVL, fragment: null };
  }

  // ── Data accessors ───────────────────────────────────────────────────────
  function getProject(lvl) {
    if (!window.PROJECTS) return null;
    return window.PROJECTS[lvl] || null;
  }
  function otherProjectSlug(lvl) {
    for (var i = 0; i < PROJECT_ORDER.length; i++) {
      if (PROJECT_ORDER[i] !== lvl && getProject(PROJECT_ORDER[i])) return PROJECT_ORDER[i];
    }
    return null;
  }

  // ── Tiny DOM helper ──────────────────────────────────────────────────────
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null) return;
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k.indexOf('data-') === 0 || k.indexOf('aria-') === 0 || k === 'role') {
          node.setAttribute(k, v);
        } else {
          node[k] = v;
        }
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  // ── Shell (sticky header) ────────────────────────────────────────────────
  function renderShell() {
    headerMount.innerHTML = '';
    var inner = el('div', { class: 'site-header__inner' });

    var burger = el('button', {
      type: 'button',
      class: 'nav-burger',
      'aria-label': 'Toggle navigation',
      'aria-expanded': 'false',
      'aria-controls': 'sidebar'
    });
    burger.innerHTML = '<span></span><span></span><span></span>';
    burger.addEventListener('click', toggleDrawer);

    var brand = el('a', { href: '#tog', class: 'brand', 'aria-label': 'Max Schenk, Combat Designer — home' });
    brand.innerHTML =
      '<span class="brand__name">MAX SCHENK</span>' +
      '<span class="brand__sep">//</span>' +
      '<span class="brand__role">Combat Designer</span>';

    var nav = el('nav', { class: 'global-nav', 'aria-label': 'Global' });
    nav.appendChild(el('a', { href: '#tog', 'data-nav': 'projects' }, 'Projects'));
    nav.appendChild(el('a', { href: '#bio', 'data-nav': 'about' }, 'About'));
    nav.appendChild(el('a', { href: 'mailto:mbschenked@gmail.com' }, 'Contact'));

    inner.appendChild(burger);
    inner.appendChild(brand);
    inner.appendChild(nav);
    headerMount.appendChild(inner);
  }

  function setGlobalNavActive(routeKey) {
    var links = headerMount.querySelectorAll('.global-nav a[data-nav]');
    for (var i = 0; i < links.length; i++) {
      var key = links[i].getAttribute('data-nav');
      links[i].classList.toggle('is-active', key === routeKey);
    }
  }

  // ═════════════════════════════════════════════════════════════════════════
  // PROJECT PAGE — top-level render
  // ═════════════════════════════════════════════════════════════════════════
  function renderProject(p) {
    teardownScrollSpy();
    teardownHeroCanvas();
    pauseLiveVideos();
    heroMount.innerHTML = '';
    contentMount.innerHTML = '';

    heroMount.setAttribute('data-accent', p.accent || 'amber');
    document.body.classList.remove('is-accent-amber', 'is-accent-tbh');
    document.body.classList.add('is-accent-' + (p.accent || 'amber'));
    heroMount.appendChild(renderHero(p));

    var inner = el('div', { class: 'content__inner', 'data-accent': p.accent || 'amber' });
    inner.appendChild(renderProjectTiles(p.slug));   // tiles start at sidebar's Y; sections follow
    inner.appendChild(renderAllSections(p));
    var footer = renderProjectFooter(p.slug);
    if (footer) inner.appendChild(footer);
    contentMount.appendChild(inner);

    rebuildSidebar(p);
    initScrollSpy(p);
    rebuildFadeObserver();
    playVideosInSection(heroMount);
    playVideosInSection(contentMount);
    trackLiveVideos(heroMount);
    trackLiveVideos(contentMount);
  }

  // ── Hero banner ──────────────────────────────────────────────────────────
  // Hero data forms:
  //   { src, poster }   → looping video, poster as fallback frame
  //   { src: null/undef, poster }  → still-image hero (TBH has no MP4 footage;
  //                                   live site uses a YouTube trailer iframe)
  //   missing entirely  → PLACEHOLDER_HERO
  function renderHero(p) {
    var hero = (p.hero && (p.hero.src || p.hero.poster)) ? p.hero : PLACEHOLDER_HERO;

    var wrap = el('div', { class: 'hero-banner' });
    var video = el('video', {
      class: 'hero-banner__video',
      'aria-label': hero.alt || (p.title + ' — gameplay clip, looping, muted'),
      autoplay: true,
      loop: true,
      muted: true,
      playsinline: true,
      preload: 'metadata',
      poster: hero.poster || null
    });
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    // Skip the <source> when there's no clip — the poster alone renders as a still.
    if (hero.src) video.appendChild(el('source', { src: hero.src, type: 'video/mp4' }));
    wrap.appendChild(video);
    wrap.appendChild(el('div', { class: 'hero-banner__vignette' }));
    return wrap;
  }

  // ── All-sections render ──────────────────────────────────────────────────
  function renderAllSections(p) {
    var host = el('div', { class: 'proj-sections' });
    (p.sections || []).forEach(function (sec) {
      var node = renderSectionByType(sec, p);
      if (node) host.appendChild(node);
    });
    return host;
  }

  // Section schema — one section object per entry in project.sections.
  // Renderer dispatches by sec.type; each renderer accepts these fields:
  //
  //   { type: 'header',    id, label, title|bigTitle, subtitle?, lead|body?, badges?, meta?, cta? }
  //   { type: 'gallery',   id, label, title?, body?, images: [{src, alt?, caption?}] }
  //   { type: 'pillar',    id, label, pillarNumber?, title, brief?,
  //                        blocks: [{type:'subsection', title?, body?, svg?, media?}] }
  //   { type: 'prose',     id, label, title?, body? | blocks: [{type:'paragraph'|'list'|'figure', ...}] }
  //   { type: 'media',     id, label, title?, body?,
  //                        media: {kind:'video'|'youtube'|'image', src|youtubeId, poster?, caption?} }
  //   { type: 'media-row', id, label, title?, body?, rows: [{caption?, clips:[{src, poster?, figcaption?}]}] }
  function renderSectionByType(sec, project) {
    switch (sec.type) {
      case 'header':     return renderSecHeader(sec, project);
      case 'gallery':    return renderSecGallery(sec);
      case 'pillar':     return renderSecPillar(sec);
      case 'prose':      return renderSecProse(sec);
      case 'media':      return renderSecMedia(sec);
      case 'media-row':  return renderSecMediaRow(sec);
      default:
        console.warn('[Portfolio-0.2] Unknown section type:', sec.type);
        return null;
    }
  }

  function sectionShell(sec) {
    return el('section', {
      id: sec.id,
      class: 'proj-section proj-section--' + (sec.type || 'prose'),
      'data-section-id': sec.id
    });
  }

  // ── Section: header (Project Overview lead) ──────────────────────────────
  function renderSecHeader(sec, project) {
    var s = sectionShell(sec);
    var wrap = el('div', { class: 'sec-header' });

    if (sec.badges && sec.badges.length) {
      var brow = el('div', { class: 'sec-header__badges' });
      sec.badges.forEach(function (b) {
        var label = (typeof b === 'string') ? b : (b && b.label) || '';
        var cls = (typeof b === 'object' && b && b.cls) ? b.cls : 'badge-cyan';
        brow.appendChild(el('span', { class: 'badge ' + cls }, label));
      });
      wrap.appendChild(brow);
    }

    // v2 fields: title + subtitle + lead. v1 fallback: bigTitle + body.
    var titleText = sec.title || sec.bigTitle || (project && project.title) || '';
    if (titleText) {
      var titleHtml = String(titleText).replace(/\s*\/\s*/, '<br/>');
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      wrap.appendChild(el('div', { id: titleId, class: 'sec-header__bigtitle', html: titleHtml }));
    }
    if (sec.subtitle) wrap.appendChild(el('div', { class: 'sec-header__subtitle' }, sec.subtitle));

    var leadHtml = sec.lead != null ? sec.lead : sec.body;
    if (leadHtml) {
      var leadEl = el('div', { class: 'sec-header__body section-prose' });
      leadEl.innerHTML = Array.isArray(leadHtml) ? leadHtml.map(function (p) { return '<p>' + p + '</p>'; }).join('') : leadHtml;
      wrap.appendChild(leadEl);
    }

    // meta: accepts array (v1) or object (v2 — Phase C may emit { role, engine, timeframe })
    if (sec.meta) {
      var pills = el('div', { class: 'meta-pills' });
      var items = Array.isArray(sec.meta)
        ? sec.meta
        : Object.keys(sec.meta).map(function (k) { return sec.meta[k]; });
      items.forEach(function (m) { if (m) pills.appendChild(el('span', { class: 'meta-pill' }, m)); });
      if (pills.childNodes.length) wrap.appendChild(pills);
    }

    if (sec.cta && sec.cta.href) {
      var ctaRow = el('div', { class: 'sec-header__cta-row' });
      var ext = /^https?:/i.test(sec.cta.href);
      var ctaCls = sec.cta.cls || 'btn-amber';
      ctaRow.appendChild(el('a', {
        href: sec.cta.href,
        class: 'btn ' + ctaCls,
        target: ext ? '_blank' : null,
        rel: ext ? 'noopener noreferrer' : null
      }, sec.cta.label || 'View'));
      wrap.appendChild(ctaRow);
    }

    s.appendChild(wrap);
    return s;
  }

  // ── Section: gallery ─────────────────────────────────────────────────────
  function renderSecGallery(sec) {
    var s = sectionShell(sec);
    if (sec.title) {
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      s.appendChild(el('h2', { id: titleId, class: 'proj-section__title' }, sec.title));
    }

    if (sec.body) {
      var intro = el('div', { class: 'sec-gallery__intro section-prose' });
      intro.innerHTML = sec.body;
      s.appendChild(intro);
    }

    var grid = el('div', { class: 'gallery-grid' });
    var imageList = (sec.images || []).map(function (img) {
      return { src: img.src, alt: img.alt || '' };
    });
    imageList.forEach(function (img, i) {
      var thumb = el('button', {
        type: 'button',
        class: 'gallery-thumb',
        'aria-label': 'Open ' + (img.alt || 'image') + ' in lightbox'
      });
      thumb.appendChild(el('img', { src: img.src, alt: img.alt, loading: 'lazy' }));
      thumb.addEventListener('click', function () { openLightbox(img.src, imageList, i); });
      grid.appendChild(thumb);
    });
    s.appendChild(grid);

    // Optional captions row when supplied
    if (sec.images && sec.images.some(function (im) { return im.caption; })) {
      var caps = el('div', { class: 'gallery-captions' });
      sec.images.forEach(function (im) {
        if (im.caption) caps.appendChild(el('div', { class: 'gallery-caption' }, im.caption));
      });
      s.appendChild(caps);
    }
    return s;
  }

  // ── Section: pillar (v2 — flattened decision-modal content) ──────────────
  function renderSecPillar(sec) {
    var s = sectionShell(sec);
    var head = el('div', { class: 'pillar-head' });
    if (sec.pillarNumber) head.appendChild(el('div', { class: 'pillar-num' }, 'Pillar ' + sec.pillarNumber));
    if (sec.title) {
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      head.appendChild(el('h2', { id: titleId, class: 'pillar-title' }, sec.title));
    }
    s.appendChild(head);

    if (sec.brief) {
      var brief = el('div', { class: 'pillar-brief section-prose' });
      brief.innerHTML = sec.brief;
      s.appendChild(brief);
    }

    (sec.blocks || []).forEach(function (b) {
      s.appendChild(renderPillarBlock(b));
    });
    return s;
  }

  function renderPillarBlock(block) {
    var wrap = el('div', { class: 'pillar-block pillar-block--' + (block.type || 'subsection') });

    if (block.title) wrap.appendChild(el('h3', { class: 'pillar-block__title' }, block.title));

    if (block.body) {
      var body = el('div', { class: 'pillar-block__body section-prose' });
      body.innerHTML = block.body;
      wrap.appendChild(body);
    }

    if (block.svg) {
      var svg = el('div', { class: 'pillar-block__svg diag-wrap' });
      svg.innerHTML = block.svg;
      wrap.appendChild(svg);
    }

    if (block.media && block.media.length) {
      var mediaGrid = el('div', { class: 'pillar-block__media' });
      block.media.forEach(function (m) {
        mediaGrid.appendChild(renderMediaItem(m));
      });
      wrap.appendChild(mediaGrid);
    }
    return wrap;
  }

  // ── Section: prose ───────────────────────────────────────────────────────
  function renderSecProse(sec) {
    var s = sectionShell(sec);
    if (sec.title) {
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      s.appendChild(el('h2', { id: titleId, class: 'proj-section__title' }, sec.title));
    }

    // v2 form — blocks array
    if (sec.blocks && sec.blocks.length) {
      sec.blocks.forEach(function (b) { s.appendChild(renderProseBlock(b)); });
      return s;
    }

    // v1 fallback — single body string of HTML
    if (sec.body) {
      var body = el('div', { class: 'section-prose' });
      body.innerHTML = sec.body;
      s.appendChild(body);
    }
    return s;
  }

  function renderProseBlock(block) {
    switch (block.type) {
      case 'paragraph': {
        var p = el('div', { class: 'section-prose' });
        p.innerHTML = block.html || '';
        return p;
      }
      case 'list': {
        var ul = el('ul', { class: 'prose-list' });
        (block.items || []).forEach(function (item) {
          ul.appendChild(el('li', { html: item }));
        });
        return ul;
      }
      case 'figure': {
        var fig = el('figure', { class: 'prose-figure' });
        if (block.src) fig.appendChild(el('img', { src: block.src, alt: block.alt || block.caption || '', loading: 'lazy' }));
        if (block.caption) fig.appendChild(el('figcaption', null, block.caption));
        return fig;
      }
      default: {
        var div = el('div', { class: 'section-prose' });
        if (block.html) div.innerHTML = block.html;
        return div;
      }
    }
  }

  // ── Section: media (single video / youtube / image) ──────────────────────
  function renderSecMedia(sec) {
    var s = sectionShell(sec);
    if (sec.title) {
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      s.appendChild(el('h2', { id: titleId, class: 'proj-section__title' }, sec.title));
    }

    if (sec.body) {
      var intro = el('div', { class: 'sec-media__intro section-prose' });
      intro.innerHTML = sec.body;
      s.appendChild(intro);
    }

    // v2 supports top-level src/kind; v1 nests under .media
    var m = sec.media || sec;
    var frameCls = 'sec-media__frame' + (m.metaStrip && m.metaStrip.length ? ' sec-media__frame--card' : '');
    var frame = el('figure', { class: frameCls });

    if (m.kind === 'youtube' && m.youtubeId) {
      var aspect = el('div', { class: 'video-wrap' });
      var ytSrc = 'https://www.youtube.com/embed/' + m.youtubeId;
      if (m.youtubeStart != null) ytSrc += '?start=' + encodeURIComponent(m.youtubeStart);
      var iframe = el('iframe', {
        src: ytSrc,
        title: m.caption || 'Embedded video',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true,
        loading: 'lazy'
      });
      iframe.setAttribute('allowfullscreen', '');
      aspect.appendChild(iframe);
      frame.appendChild(aspect);
    } else if (m.kind === 'video' && m.src) {
      var video = el('video', {
        autoplay: true,
        loop: true,
        muted: true,
        playsinline: true,
        preload: 'metadata',
        poster: m.poster || null,
        src: m.src
      });
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      frame.appendChild(video);
    } else if (m.kind === 'image' && m.src) {
      frame.appendChild(el('img', { src: m.src, alt: m.alt || m.caption || '' }));
    }

    if (m.metaStrip && m.metaStrip.length) {
      var strip = el('div', { class: 'tbh-meta-strip' });
      m.metaStrip.forEach(function (item) {
        var cell = el('div', { class: 'tbh-meta-item' }, item.label || '');
        cell.appendChild(el('span', null, item.value || ''));
        strip.appendChild(cell);
      });
      frame.appendChild(strip);
    }

    if (m.caption) frame.appendChild(el('figcaption', { class: 'sec-media__caption' }, m.caption));
    s.appendChild(frame);
    return s;
  }

  // ── Section: media-row (legacy v1) ───────────────────────────────────────
  function renderSecMediaRow(sec) {
    var s = sectionShell(sec);
    if (sec.title) {
      var titleId = sec.id + '-title';
      s.setAttribute('aria-labelledby', titleId);
      s.appendChild(el('h2', { id: titleId, class: 'proj-section__title' }, sec.title));
    }

    if (sec.body) {
      var intro = el('div', { class: 'sec-media-row__intro section-prose' });
      intro.innerHTML = sec.body;
      s.appendChild(intro);
    }

    (sec.rows || []).forEach(function (row) {
      var rowEl = el('div', { class: 'di-bullet' });
      if (row.caption) {
        var cap = el('p', { class: 'di-bullet-text' });
        cap.innerHTML = row.caption;
        rowEl.appendChild(cap);
      }
      if (row.clips && row.clips.length) {
        var clipsRow = el('div', { class: 'di-clips-row' });
        row.clips.forEach(function (clip) { clipsRow.appendChild(renderMediaItem({ kind: 'video', src: clip.src, poster: clip.poster, caption: clip.figcaption })); });
        rowEl.appendChild(clipsRow);
      }
      s.appendChild(rowEl);
    });
    return s;
  }

  // Shared media-item renderer used by pillar.media and media-row clips.
  function renderMediaItem(m) {
    var fig = el('figure', { class: 'media-item' });
    if (m.kind === 'video' && m.src) {
      var video = el('video', {
        autoplay: true,
        loop: true,
        muted: true,
        playsinline: true,
        preload: 'metadata',
        poster: m.poster || null
      });
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.appendChild(el('source', { src: m.src, type: 'video/mp4' }));
      fig.appendChild(video);
    } else if (m.kind === 'image' && m.src) {
      fig.appendChild(el('img', { src: m.src, alt: m.alt || m.caption || '', loading: 'lazy' }));
    } else if (m.kind === 'youtube' && m.youtubeId) {
      var aspect = el('div', { class: 'video-wrap' });
      var iframe = el('iframe', {
        src: 'https://www.youtube.com/embed/' + m.youtubeId,
        title: m.caption || 'Embedded video',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true,
        loading: 'lazy'
      });
      iframe.setAttribute('allowfullscreen', '');
      aspect.appendChild(iframe);
      fig.appendChild(aspect);
    }
    if (m.caption) fig.appendChild(el('figcaption', { class: 'media-item__caption' }, m.caption));
    return fig;
  }

  // ── Project tiles (peeking at fold, inside content pane) ─────────────────
  function renderProjectTiles(activeLvl) {
    currentLvl = activeLvl;
    var wrap = el('section', { class: 'project-tiles', 'aria-label': 'Projects' });
    wrap.appendChild(el('h3', { class: 'project-tiles__label' }, 'Projects'));

    var grid = el('div', { class: 'project-tiles__grid' });
    PROJECT_ORDER.forEach(function (slug) {
      var p = getProject(slug);
      if (!p) return;
      var isCurrent = (slug === activeLvl);
      var tile = el('a', {
        href: '#' + slug,
        class: 'project-tile' + (isCurrent ? ' is-current' : ''),
        'data-lvl': slug,
        'aria-current': isCurrent ? 'page' : null
      });
      // In-content click → swap project content in place (preserve scroll);
      // re-clicking the current tile is a no-op so it doesn't jump to top.
      (function (clickedSlug) {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          if (clickedSlug === currentLvl) return;
          navigateInline(clickedSlug, 'preserve');
        });
      })(slug);
      var thumb = tileThumbFor(p);
      if (thumb) tile.appendChild(el('img', { class: 'project-tile__img', src: thumb, alt: p.title, loading: 'lazy' }));
      var label = el('span', { class: 'project-tile__label' });
      label.appendChild(document.createTextNode(p.title));
      var sub = (p.subtitle || '').replace(/^\/\/\s*/, '');
      if (sub) label.appendChild(el('small', null, sub));
      tile.appendChild(label);
      grid.appendChild(tile);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  // Best-available thumb: explicit p.thumb → first gallery image → null.
  function tileThumbFor(p) {
    if (p.thumb) return p.thumb;
    var gallery = (p.sections || []).find(function (s) { return s.type === 'gallery' && s.images && s.images.length; });
    if (gallery) return gallery.images[0].src;
    return null;
  }

  // ── Next-project footer ──────────────────────────────────────────────────
  // With exactly two projects, prev and next would both point at the same
  // neighbor — render only the "Next Project →" link.
  function renderProjectFooter(activeLvl) {
    var other = otherProjectSlug(activeLvl);
    if (!other) return null;
    var otherP = getProject(other);
    if (!otherP) return null;

    var footer = el('footer', { class: 'proj-footer proj-footer--single' });
    var next = el('a', { class: 'proj-footer__next', href: '#' + other });
    next.appendChild(document.createTextNode('Next Project →'));
    next.appendChild(el('strong', null, otherP.title));
    // Next-project nav lands at the project-tiles row, not the page top —
    // viewer has already seen the global hero by the time they're at the footer.
    next.addEventListener('click', function (e) {
      e.preventDefault();
      navigateInline(other, 'projects-row');
    });
    footer.appendChild(next);
    return footer;
  }

  // ═════════════════════════════════════════════════════════════════════════
  // SIDEBAR — project title / summary / TOC / tools / takeaways
  // ═════════════════════════════════════════════════════════════════════════
  // Renders a labeled block heading with the locked ASCII icon on the left.
  // Falls back to a plain h3 if the label has no icon registered.
  function blockLabelRow(label) {
    var glyph = SIDEBAR_ICONS[label];
    if (!glyph) return el('h3', { class: 'side__block-label' }, label);
    var row = el('div', { class: 'side__block-row' });
    row.appendChild(el('pre', { class: 'side__icon', 'aria-hidden': 'true' }, glyph));
    row.appendChild(el('h3', { class: 'side__block-label' }, label));
    return row;
  }

  function rebuildSidebar(p) {
    sidebarMount.innerHTML = '';
    sidebarMount.setAttribute('data-accent', p.accent || 'amber');

    sidebarMount.appendChild(el('h2', { class: 'side__project-title' }, p.title));
    if (p.subtitle) {
      var sub = String(p.subtitle).replace(/^\/\/\s*/, '');
      sidebarMount.appendChild(el('div', { class: 'side__project-sub' }, sub));
    }

    if (p.summary) {
      sidebarMount.appendChild(blockLabelRow('Summary'));
      sidebarMount.appendChild(el('p', { class: 'side__summary' }, p.summary));
    }

    if (p.sections && p.sections.length) {
      sidebarMount.appendChild(blockLabelRow('Jump to Section'));
      sidebarMount.appendChild(renderTOC(p));
    }

    var tools = p.tools || p.software;
    if (tools && tools.length) {
      // Flatten + filter: split compound entries on ' + ' (whitespace-padded
      // plus, so "C++" and "C#" survive intact), lookup each in TOOL_ICONS,
      // dedupe, drop unknowns. "Blueprint + C++" yields ['Blueprint','C++'].
      var iconKeys = [];
      tools.forEach(function (t) {
        String(t).split(/\s+\+\s+/).forEach(function (piece) {
          var key = piece.trim();
          if (TOOL_ICONS[key] && iconKeys.indexOf(key) === -1) iconKeys.push(key);
        });
      });
      if (iconKeys.length) {
        sidebarMount.appendChild(blockLabelRow('Software'));
        var toolList = el('ul', { class: 'side__tools side__tools--icons' });
        iconKeys.forEach(function (key) {
          var li = el('li', { class: 'side__tool-icon', 'aria-label': key });
          li.innerHTML = TOOL_ICONS[key];
          toolList.appendChild(li);
        });
        sidebarMount.appendChild(toolList);
      }
    }

    var takeaways = p.takeaways || p.efforts;
    if (takeaways && takeaways.length) {
      sidebarMount.appendChild(blockLabelRow('Key Takeaways'));
      var taList = el('ul', { class: 'side__takeaways' });
      // html: t lets bullet strings include inline markup (e.g. <span class="bullet-lead">…</span>)
      takeaways.forEach(function (t) { taList.appendChild(el('li', { html: t })); });
      sidebarMount.appendChild(taList);
    }
  }

  function renderTOC(p) {
    var ol = el('ol', { class: 'side__toc' });
    (p.sections || []).forEach(function (sec, idx) {
      var num = String(idx + 1).padStart(2, '0');
      var li = el('li', {
        class: 'side__toc-item' + (idx === 0 ? ' is-active' : ''),
        'data-target': sec.id
      });
      if (idx === 0) li.setAttribute('aria-current', 'location');
      li.appendChild(el('span', { class: 'side__toc-num' }, num));
      li.appendChild(el('span', { class: 'side__toc-label' }, sec.label || sec.id));
      li.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(sec.id);
        setActiveTocItem(sec.id);
        closeDrawer();
      });
      ol.appendChild(li);
    });
    return ol;
  }

  function setActiveTocItem(id) {
    var items = document.querySelectorAll('.side__toc-item');
    for (var i = 0; i < items.length; i++) {
      var isActive = items[i].getAttribute('data-target') === id;
      items[i].classList.toggle('is-active', isActive);
      if (isActive) items[i].setAttribute('aria-current', 'location');
      else items[i].removeAttribute('aria-current');
    }
  }

  function scrollToSection(id) {
    var target = document.getElementById(id);
    if (!target) return;
    // Suppress scroll-spy during the smooth-scroll, otherwise the IntersectionObserver
    // fires for every section the page passes through and overwrites the active state.
    spySuppressedUntil = Date.now() + 900;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ═════════════════════════════════════════════════════════════════════════
  // SCROLL-SPY — IntersectionObserver-driven TOC active state
  // ═════════════════════════════════════════════════════════════════════════
  function initScrollSpy(p) {
    teardownScrollSpy();
    if (!p || !p.sections || !p.sections.length) return;
    var targets = p.sections.map(function (s) { return document.getElementById(s.id); }).filter(Boolean);
    if (!targets.length) return;

    scrollSpy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (Date.now() < spySuppressedUntil) return; // ignore during programmatic smooth-scroll
        setActiveTocItem(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    targets.forEach(function (t) { scrollSpy.observe(t); });
  }
  function teardownScrollSpy() {
    if (scrollSpy) { scrollSpy.disconnect(); scrollSpy = null; }
  }

  // ═════════════════════════════════════════════════════════════════════════
  // BIO route
  // ═════════════════════════════════════════════════════════════════════════
  function renderBio() {
    teardownScrollSpy();
    pauseLiveVideos();
    teardownHeroCanvas();
    heroMount.innerHTML = '';
    contentMount.innerHTML = '';
    sidebarMount.innerHTML = '';
    sidebarMount.setAttribute('data-accent', 'amber');
    heroMount.setAttribute('data-accent', 'amber');
    document.body.classList.remove('is-accent-tbh');
    document.body.classList.add('is-accent-amber');

    var data = window.ABOUT || {};

    // Minimal sidebar for #bio — just an identifier + nav back to projects.
    sidebarMount.appendChild(el('h2', { class: 'side__project-title' }, data.title || 'Max Schenk'));
    sidebarMount.appendChild(el('div', { class: 'side__project-sub' }, 'About'));
    sidebarMount.appendChild(blockLabelRow('Projects'));
    var projList = el('ul', { class: 'side__tools' });
    PROJECT_ORDER.forEach(function (slug) {
      var p = getProject(slug);
      if (!p) return;
      var li = el('li');
      li.appendChild(el('a', { href: '#' + slug, class: 'side__project-link' }, p.title));
      projList.appendChild(li);
    });
    sidebarMount.appendChild(projList);

    // Bio hero (particle canvas) lives in the full-width hero-mount, matching the project-page pattern.
    var heroBanner = el('div', { class: 'bio-hero fade-up' });
    heroBanner.appendChild(el('canvas', { id: 'hero-canvas' }));
    var heroInner = el('div', { class: 'bio-hero__inner' });
    heroInner.appendChild(el('div', { class: 'bio-hero__eyebrow' }, data.eyebrow || '// About'));
    heroInner.appendChild(el('h1', { class: 'bio-hero__title' }, data.title || 'Max Schenk'));
    heroInner.appendChild(el('div', { class: 'bio-hero__subtitle' }, '// Combat Designer'));
    heroBanner.appendChild(heroInner);
    heroMount.appendChild(heroBanner);

    var wrap = el('div', { class: 'content__inner', 'data-accent': 'amber' });

    var block = el('article', { class: 'section-block fade-up' });
    var head = el('div', { class: 'section-block__head' });
    head.appendChild(el('span', { class: 'section-block__num' }, '01'));
    var h2 = el('h2', { class: 'section-block__title' }, 'About Me');
    h2.appendChild(el('span', { class: 'section-block__suffix' }, '// Background'));
    head.appendChild(h2);
    block.appendChild(head);

    var grid = el('div', { class: 'about-grid' });

    var textCol = el('div', { class: 'about-text fade-up' });
    (data.paragraphs || []).forEach(function (p) { textCol.appendChild(el('p', null, p)); });
    if (data.skills && data.skills.length) {
      var chips = el('div', { class: 'skills-grid' });
      data.skills.forEach(function (s) { chips.appendChild(el('span', { class: 'skill-chip' }, s)); });
      textCol.appendChild(chips);
    }
    grid.appendChild(textCol);

    var infoStack = el('div', { class: 'info-stack fade-up' });
    (data.cards || []).forEach(function (card) {
      var c = el('div', { class: 'info-card' });
      c.appendChild(el('div', { class: 'info-card-label' }, card.label || ''));
      var p = el('p');
      p.innerHTML = card.body || '';
      c.appendChild(p);
      infoStack.appendChild(c);
    });
    grid.appendChild(infoStack);

    block.appendChild(grid);
    wrap.appendChild(block);

    // Project tiles also appear on bio so the viewer can jump back to projects.
    wrap.appendChild(renderProjectTiles(null));
    contentMount.appendChild(wrap);

    rebuildFadeObserver();
    initHeroCanvas();
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Router
  // ═════════════════════════════════════════════════════════════════════════
  function handleHashChange() {
    var hash = parseHash();
    closeLightbox();
    closeDrawer();

    if (hash.route === 'bio') {
      setGlobalNavActive('about');
      renderBio();
      document.title = 'About · Max Schenk';
      window.scrollTo({ top: 0, behavior: 'auto' });
      maybeScrollToFragment(hash.fragment);
      return;
    }

    teardownHeroCanvas();
    var project = getProject(hash.lvl);
    if (!project) {
      window.location.hash = '#' + DEFAULT_LVL;
      return;
    }
    setGlobalNavActive('projects');
    renderProject(project);
    document.title = project.title + ' · Max Schenk';

    if (hash.fragment) {
      // Defer one frame so the section is in the layout before we scroll.
      requestAnimationFrame(function () { maybeScrollToFragment(hash.fragment); });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  function maybeScrollToFragment(id) {
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTocItem(id);
  }

  // In-content project nav (tile click, footer Next-Project click). Bypasses
  // hashchange so we control scroll behavior per click source:
  //   scrollMode 'preserve'      → don't touch scroll; the swap happens in place
  //   scrollMode 'projects-row'  → smooth-scroll to the .project-tiles row
  //                                (lands just under the sticky header)
  function navigateInline(slug, scrollMode) {
    var project = getProject(slug);
    if (!project) return;
    if (history && history.pushState) {
      history.pushState(null, '', '#' + slug);
    } else {
      window.location.hash = '#' + slug;
      return; // hashchange will fire and run handleHashChange
    }
    // Snapshot scroll before the DOM clear-and-rebuild — otherwise the
    // browser clamps scrollY to the briefly-empty document and "preserve"
    // becomes "snap to whatever the empty page allowed".
    var savedScrollY = window.scrollY;
    closeLightbox();
    closeDrawer();
    teardownHeroCanvas();
    setGlobalNavActive('projects');
    renderProject(project);
    document.title = project.title + ' · Max Schenk';
    if (scrollMode === 'preserve') {
      // Two RAFs: first fires after the appends, second after layout/paint
      // settles. scrollTo at that point lands cleanly (or browser-clamps if
      // the new project's page is shorter — best UX possible without
      // semantic content mapping).
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          window.scrollTo({ top: savedScrollY, behavior: 'auto' });
        });
      });
    } else if (scrollMode === 'projects-row') {
      requestAnimationFrame(function () {
        var tiles = document.querySelector('.project-tiles');
        if (tiles) tiles.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Video autoplay polish
  // ═════════════════════════════════════════════════════════════════════════
  function playVideosInSection(rootEl) {
    if (!rootEl) return;
    var vids = rootEl.querySelectorAll('video');
    for (var i = 0; i < vids.length; i++) {
      try {
        vids[i].currentTime = 0;
        var p = vids[i].play();
        if (p && typeof p.catch === 'function') p.catch(function () { /* autoplay blocked, ok */ });
      } catch (e) { /* ignore */ }
    }
  }
  function trackLiveVideos(rootEl) {
    liveVideos = rootEl ? Array.prototype.slice.call(rootEl.querySelectorAll('video')) : [];
  }
  function pauseLiveVideos() {
    for (var i = 0; i < liveVideos.length; i++) {
      try { liveVideos[i].pause(); } catch (e) { /* ignore */ }
    }
    liveVideos = [];
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Lightbox
  // ═════════════════════════════════════════════════════════════════════════
  function openLightbox(src, images, idx) {
    if (!lightboxMount) return;
    if (!images || !images.length) {
      images = Array.prototype.slice.call(document.querySelectorAll('.gallery-thumb img'))
        .map(function (im) { return { src: im.src, alt: im.alt || '' }; });
    }
    if (idx == null || idx < 0) {
      idx = 0;
      for (var i = 0; i < images.length; i++) { if (images[i].src === src) { idx = i; break; } }
    }
    lightboxState = { images: images, idx: idx };
    lightboxMount.innerHTML = '';

    var backdrop = el('div', { class: 'lightbox-backdrop' });
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeLightbox(); });

    var img = el('img', { class: 'lightbox-img', src: images[idx].src, alt: images[idx].alt || '' });
    var closeBtn = el('button', { type: 'button', class: 'lightbox-close', 'aria-label': 'Close lightbox' }, '×');
    closeBtn.addEventListener('click', function (e) { e.stopPropagation(); closeLightbox(); });

    var prev = null, next = null;
    if (images.length > 1) {
      prev = el('button', { type: 'button', class: 'lightbox-arrow lightbox-arrow--prev', 'aria-label': 'Previous image' }, '‹');
      prev.addEventListener('click', function (e) { e.stopPropagation(); lightboxNav(-1); });
      next = el('button', { type: 'button', class: 'lightbox-arrow lightbox-arrow--next', 'aria-label': 'Next image' }, '›');
      next.addEventListener('click', function (e) { e.stopPropagation(); lightboxNav(1); });
    }

    backdrop.appendChild(img);
    backdrop.appendChild(closeBtn);
    if (prev) backdrop.appendChild(prev);
    if (next) backdrop.appendChild(next);
    lightboxMount.appendChild(backdrop);

    lightboxMount.classList.add('is-open');
    lightboxMount.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    lightboxState.onKeydown = function (e) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') lightboxNav(1);
      else if (e.key === 'ArrowLeft') lightboxNav(-1);
    };
    document.addEventListener('keydown', lightboxState.onKeydown);
  }

  function lightboxNav(dir) {
    if (!lightboxState) return;
    var n = lightboxState.images.length;
    lightboxState.idx = (lightboxState.idx + dir + n) % n;
    var imgEl = lightboxMount.querySelector('.lightbox-img');
    if (imgEl) {
      imgEl.src = lightboxState.images[lightboxState.idx].src;
      imgEl.alt = lightboxState.images[lightboxState.idx].alt || '';
    }
  }
  function closeLightbox() {
    if (!lightboxMount) return;
    if (lightboxState && lightboxState.onKeydown) document.removeEventListener('keydown', lightboxState.onKeydown);
    lightboxState = null;
    lightboxMount.classList.remove('is-open');
    lightboxMount.setAttribute('hidden', '');
    lightboxMount.innerHTML = '';
    document.body.style.overflow = '';
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Hero canvas (#bio only — particle/line graph)
  // ═════════════════════════════════════════════════════════════════════════
  function initHeroCanvas() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    heroState = { canvas: canvas, ctx: ctx, nodes: [], raf: null, observer: null, onResize: null };

    function resizeCanvas() {
      var parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    function initNodes() {
      var count = Math.floor((canvas.width * canvas.height) / 14000);
      var n = Math.min(count, 80);
      heroState.nodes = [];
      for (var i = 0; i < n; i++) {
        heroState.nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.5 + 0.8
        });
      }
    }
    function drawFrame() {
      if (!heroState || heroState.canvas !== canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var nodes = heroState.nodes;
      var len = nodes.length;
      for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(212,137,10,' + (0.18 * (1 - dist / 130)) + ')';
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (var k = 0; k < len; k++) {
        var nd = nodes[k];
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, nd.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212,137,10,0.5)';
        ctx.fill();
        nd.x += nd.vx;
        nd.y += nd.vy;
        if (nd.x < 0 || nd.x > canvas.width) nd.vx *= -1;
        if (nd.y < 0 || nd.y > canvas.height) nd.vy *= -1;
      }
      heroState.raf = requestAnimationFrame(drawFrame);
    }
    function start() {
      resizeCanvas();
      initNodes();
      if (heroState.raf) cancelAnimationFrame(heroState.raf);
      heroState.raf = requestAnimationFrame(drawFrame);
    }
    var observerTarget = canvas.parentElement || canvas;
    heroState.observer = new IntersectionObserver(function (entries) {
      if (!heroState) return;
      if (entries[0].isIntersecting) {
        if (!heroState.raf) heroState.raf = requestAnimationFrame(drawFrame);
      } else {
        if (heroState.raf) { cancelAnimationFrame(heroState.raf); heroState.raf = null; }
      }
    });
    heroState.observer.observe(observerTarget);
    heroState.onResize = start;
    window.addEventListener('resize', heroState.onResize);
    start();
  }
  function teardownHeroCanvas() {
    if (!heroState) return;
    if (heroState.raf) cancelAnimationFrame(heroState.raf);
    if (heroState.observer) heroState.observer.disconnect();
    if (heroState.onResize) window.removeEventListener('resize', heroState.onResize);
    heroState = null;
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Fade-up observer
  // ═════════════════════════════════════════════════════════════════════════
  function rebuildFadeObserver() {
    if (fadeObserver) fadeObserver.disconnect();
    fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    var nodes = document.querySelectorAll('.fade-up:not(.visible)');
    for (var i = 0; i < nodes.length; i++) fadeObserver.observe(nodes[i]);
  }

  // ═════════════════════════════════════════════════════════════════════════
  // Mobile drawer
  // ═════════════════════════════════════════════════════════════════════════
  function toggleDrawer() { drawerOpen ? closeDrawer() : openDrawer(); }
  function openDrawer() {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;
    drawerOpen = true;
    sidebarMount.classList.add('is-open');
    if (drawerScrim) {
      drawerScrim.removeAttribute('hidden');
      drawerScrim.classList.add('is-visible');
    }
    var burger = headerMount.querySelector('.nav-burger');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    // Make background content unreachable to AT users while drawer is open.
    if (contentMount) {
      if ('inert' in HTMLElement.prototype) contentMount.inert = true;
      else contentMount.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawerOpen) return;
    drawerOpen = false;
    sidebarMount.classList.remove('is-open');
    if (drawerScrim) {
      drawerScrim.classList.remove('is-visible');
      drawerScrim.setAttribute('hidden', '');
    }
    var burger = headerMount.querySelector('.nav-burger');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    if (contentMount) {
      if ('inert' in HTMLElement.prototype) contentMount.inert = false;
      else contentMount.removeAttribute('aria-hidden');
    }
    document.body.style.overflow = '';
  }

  // ── Expose hooks ─────────────────────────────────────────────────────────
  window.PortfolioApp = {
    initHeroCanvas: initHeroCanvas,
    teardownHeroCanvas: teardownHeroCanvas,
    openLightbox: openLightbox,
    closeLightbox: closeLightbox,
    lightboxNav: lightboxNav,
    playVideosInSection: playVideosInSection,
    handleHashChange: handleHashChange,
    parseHash: parseHash,
    toggleDrawer: toggleDrawer
  };

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    headerMount = document.getElementById('site-header');
    heroMount = document.getElementById('hero-mount');
    sidebarMount = document.getElementById('sidebar');
    contentMount = document.getElementById('content');
    lightboxMount = document.getElementById('lightbox');
    drawerScrim = document.getElementById('drawer-scrim');

    if (!headerMount || !sidebarMount || !contentMount) {
      console.error('[Portfolio-0.2] Required mount points missing.');
      return;
    }

    renderShell();
    if (drawerScrim) drawerScrim.addEventListener('click', closeDrawer);
    window.addEventListener('resize', function () {
      if (window.innerWidth >= MOBILE_BREAKPOINT && drawerOpen) closeDrawer();
    });
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
