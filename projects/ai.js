/* AI-Assisted Development — content build (issue #19).
   Copy produced via the full loop: portfolio-copy-editor draft →
   draft-critique structural pass → copy-editor reconcile (2026-08-12).
   2026-08-15: §4 rewritten to bullets + knowledge-layer diagram, then SPLIT —
   §4 The Ecosystem / §5 What Earns a Place in the Kit / §6 Mission Control.
   ⚠ Every number on this page is on Max's sign-off list (329/105, ~15
   scripts, 8-phase, 3-tier, 95%, five reviewers, 0–100, three judges,
   15 skills, 10+ subagents, 275/13 + 123/77/71/4, 700+, 76, 169 files,
   20 tables, 10-of-22 adapted, 15 analysts / 8 pairs, 68→58 paths,
   66/174k · 60/210k · 80 @3.2x, 68% fan-out) — confirmed facts per the
   verified inventory, pending his per-line nod before push.
   ⚠ HELD OUT pending Max's Windows-side confirm: memory-benchmark figures
   (95.2% recall, 1.49:1, 14 memories / 42 questions, 648 thoughts) —
   source is D:\ClaudeCode\workbench\benchmark\results-2026-08-05.md.
   ⚠ The 68% fan-out figure's source file is UNTRACKED (~/ClaudeKit/references/
   orchestrate-fanout-bakeoff-2026-06.md) — commit it before push.
   hero: null on purpose → PLACEHOLDER_HERO until a real capture exists
   (Cockpit star map is the lead candidate; §5 also needs Windows captures). */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.ai = {
  slug: 'ai',
  group: 'ai-overview',
  title: 'AI-Augmented Development',
  subtitle: '// Agentic Ecosystem · Unreal Engine 5',
  timeline: 'Since May 2026',
  accent: 'green',
  summary: 'A customized agent ecosystem, built on Claude Code, that designs, implements, and verifies game systems.',
  tools: ['Claude Code', 'Supabrain', 'GitHub', 'Linear', 'Unreal Engine 5', 'Unity', 'C++', 'Python', 'Electron', 'Blender'],
  takeaways: [],
  hero: null,
  thumb: null,
  // Generated tile art — original "Fractured Core" glitch glyph (no thumb
  // asset exists yet). Markup mirrors scratchpad/ai-tile-glitch.html; the
  // hover breakout effect is pure CSS (styles.css "AI TILE ART" block).
  tileArt: "<div class=\"ai-tile-art\"><svg class=\"ait-defs\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"ait-warp\" x=\"-25%\" y=\"-25%\" width=\"150%\" height=\"150%\" color-interpolation-filters=\"sRGB\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.011 0.038\" numOctaves=\"2\" seed=\"7\" result=\"ait-n1\"/><feDisplacementMap in=\"SourceGraphic\" in2=\"ait-n1\" scale=\"1\" xChannelSelector=\"R\" yChannelSelector=\"G\"/></filter><filter id=\"ait-warp-hard\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\" color-interpolation-filters=\"sRGB\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.020 0.058\" numOctaves=\"2\" seed=\"7\" result=\"ait-n2\"/><feDisplacementMap in=\"SourceGraphic\" in2=\"ait-n2\" scale=\"6.5\" xChannelSelector=\"R\" yChannelSelector=\"G\"/></filter><symbol id=\"ait-sigil\" viewBox=\"0 0 200 200\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\"><g stroke-width=\"5.5\"><path d=\"M143.9 47.4 L167.5 61 L167.5 139 L143.9 152.7\"/><path d=\"M123.6 164.4 L100 178 L32.5 139 L32.5 111.7\"/><path d=\"M32.5 88.3 L32.5 61 L100 22 L123.6 35.7\"/></g><path stroke-width=\"4.2\" d=\"M100 66 L134 100 L100 134 L66 100 Z\"/><path stroke-width=\"5\" d=\"M86 108 L100 92 L114 108\"/><g stroke-width=\"3\"><path d=\"M117 83 L134 66 L134 38\"/><path d=\"M117 83 L134 66 L134 38\" transform=\"rotate(120 100 100)\"/><path d=\"M117 83 L134 66 L134 38\" transform=\"rotate(240 100 100)\"/></g></g><g fill=\"currentColor\" stroke=\"none\"><path d=\"M100 112 L106 118 L100 124 L94 118 Z\"/><path d=\"M134 26.5 L139.5 32 L134 37.5 L128.5 32 Z\"/><path d=\"M134 26.5 L139.5 32 L134 37.5 L128.5 32 Z\" transform=\"rotate(120 100 100)\"/><path d=\"M134 26.5 L139.5 32 L134 37.5 L128.5 32 Z\" transform=\"rotate(240 100 100)\"/></g></symbol></defs></svg><div class=\"ait-grid\"></div><div class=\"ait-scan\"></div><div class=\"ait-sweep\"></div><div class=\"ait-glow\"></div><div class=\"ait-cage\"><span class=\"ait-clamp ait-clamp-t\"></span><span class=\"ait-clamp ait-clamp-b\"></span><span class=\"ait-clamp ait-clamp-l\"></span><span class=\"ait-clamp ait-clamp-r\"></span></div><div class=\"ait-stack\"><div class=\"ait-breathe\"><div class=\"ait-layers\"><div class=\"ait-layer ait-main\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div><div class=\"ait-layer ait-ghost-r\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div><div class=\"ait-layer ait-ghost-c\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div><div class=\"ait-layer ait-slice ait-slice-a\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div><div class=\"ait-layer ait-slice ait-slice-b\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div><div class=\"ait-layer ait-slice ait-slice-c\"><svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\"#ait-sigil\"/></svg></div></div></div></div><div class=\"ait-noise\"></div><div class=\"ait-frame\"><span class=\"ait-corner ait-corner-tl\"></span><span class=\"ait-corner ait-corner-tr\"></span><span class=\"ait-corner ait-corner-bl\"></span><span class=\"ait-corner ait-corner-br\"></span></div><div class=\"ait-flash\"></div></div>",
  // Per-project outro overrides — the shared combat-design sign-off is
  // marked for change on #ai (Max, 2026-08-11); third button points at the
  // public kit repo instead of itch.io.
  outroSignoff: 'Contact me if you want to chat — I always want to talk about agentic development and building games with AI in the loop!',
  outroCta: { href: 'https://github.com/mbschenked/claude-kit', label: 'claude-kit' },
  sections: [

    // ── § 1 ─ Project Overview ─────────────────────────────────────────────
    {
      id: 'project-overview',
      label: 'Project Overview',
      type: 'header',
      badges: ['Personal Infrastructure — 2026', 'Solo Developer'],
      title: 'AI-Assisted / Development',
      subtitle: '// Agentic Ecosystem · Unreal Engine 5',
      lead:
        '<p>This is a customized AI agent ecosystem I build and direct, running on <strong>Claude Code</strong>, that <strong>designs, implements, and verifies game systems</strong>.</p>' +
        '<p>The ecosystem began in <strong>May 2026</strong> as my first Claude Code project. <strong>This portfolio page was built by the agent system it describes.</strong> The system is equipped through <strong>configuration, not model training</strong>: custom skills, subagents, rules, tiered memory, and verification loops that I author and tune. Third-party pieces are adapted or curated, and tracked as such.</p>'
    },

    // ── Sub-project grids ─ tiles for the band's sub-pages, generated by
    //    app.js from each project's `group`. A section whose group has no
    //    loaded project is dropped (content + Jump to Section).
    { id: 'ai-games', label: 'Games', type: 'subproject-grid', group: 'ai-games', title: 'Games' },
    { id: 'ai-tools', label: 'Dev Tools', type: 'subproject-grid', group: 'ai-tools', title: 'Dev Tools' },

    // ── Inline demos ─ each game / tool rendered in full on this page;
    //    the tiles and the sticky strip scroll down to them.
    { id: 'demo-puffjump',  label: 'Paper Puff',              type: 'subproject-inline', slug: 'puffjump' },
    { id: 'demo-jump',      label: 'Jump Trajectory Sandbox', type: 'subproject-inline', slug: 'tool-jump-trajectory' },
    { id: 'demo-camshake',  label: 'Camera Shake Lab',        type: 'subproject-inline', slug: 'tool-cam-shake' },
    { id: 'demo-bulletvfx', label: 'Bullet VFX Range',        type: 'subproject-inline', slug: 'tool-bullet-vfx' }
  ]
};
