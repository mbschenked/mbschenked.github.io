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
  title: 'AI-Assisted Development',
  subtitle: '// Agentic Ecosystem · Unreal Engine 5',
  timeline: 'Since May 2026',
  accent: 'green',
  summary: 'A customized agent ecosystem, built on Claude Code, that designs, implements, and verifies game systems. Its main job is rebuilding Threads of God as a UE 5.7 C++ project on the Gameplay Ability System.',
  tools: ['Claude Code', 'Supabrain', 'GitHub', 'Linear', 'Unreal Engine 5', 'C++', 'Python', 'Electron', 'Blender'],
  takeaways: [
    '<span class="bullet-lead">Agents that work inside a running Unreal editor</span>: read live editor state, author and migrate assets, and capture in-editor playtests, validating gameplay changes against footage and runtime logs from a real session.',
    '<span class="bullet-lead">Verification separated from authorship</span>: blind multi-axis code review, anonymized judge panels with calibration controls, and a standing rule that the implementer is never the reviewer.',
    '<span class="bullet-lead">Directed the C++/GAS rebuild of Threads of God</span>: architected and built the combat foundation in UE 5.7, across 329 commits and 105 merged pull requests.',
    '<span class="bullet-lead">Tuned through configuration, not model training</span>: custom skills, subagents, rules, tiered memory, and feedback loops shape agent behavior; the kit is public, with per-artifact provenance for what I authored versus adapted.'
  ],
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
        '<p>This is a customized AI agent ecosystem I build and direct, running on <strong>Claude Code</strong>, that <strong>designs, implements, and verifies game systems</strong>. Its main job is rebuilding Threads of God as a <strong>UE 5.7 C++ project on the Gameplay Ability System</strong>, where I architected and built the C++/GAS combat foundation and directed the work across <strong>329 commits and 105 merged pull requests</strong>.</p>' +
        '<p>The ecosystem began in <strong>May 2026</strong> as my first Claude Code project. <strong>This portfolio page was built by the agent system it describes.</strong> The system is equipped through <strong>configuration, not model training</strong>: custom skills, subagents, rules, tiered memory, and verification loops that I author and tune. Third-party pieces are adapted or curated, and tracked as such.</p>',
      takeawaysInline: true
    },

    // ── § 2 ─ Agent Workflows in Unreal ────────────────────────────────────
    {
      id: 'ue-agent-workflows',
      label: 'Agent Workflows in Unreal',
      type: 'pillar',
      title: 'Agent Workflows in Unreal Engine',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">Give agents direct, verified access to the running Unreal editor, so implementation decisions come from the project’s actual state.</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: 'Seeing and Editing a Live Editor',
          body:
            '<p class="dm-lead">Source files show only part of an Unreal project. Timing lives in <strong>montage notifies</strong>, tuning lives in <strong>DataTables</strong>, and behavior lives in <strong>trees and component hierarchies</strong> that never appear in a .cpp file. Agents reach that state directly, in the editor that is already running.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Live inspection toolkit:</span> roughly <strong>15 Python scripts</strong> query the running editor and report back animation montage notifies, DataTable contents, Blueprint and component structure, and BehaviorTree topology. The toolkit is <strong>read-only</strong>: it reports state and cannot change it.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Editor-authoring library:</span> a <strong>C++ library</strong> lets agents create, edit, and migrate assets inside the running editor, so asset work happens through the engine’s own systems.</p>' +
            '</div>'
        },
        {
          type: 'subsection',
          title: 'Agents That Playtest Their Own Work',
          body:
            '<p class="dm-lead">A clean compile says nothing about whether an ability fired, a state transition landed, or a hit registered. Only the running game answers that, so every gameplay change is <strong>checked against a recording of one</strong>.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">In-editor capture pipeline:</span> gameplay sessions are <strong>launched and recorded automatically</strong>, producing footage and runtime logs from a real play session.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Validation against ground truth:</span> that footage and those runtime logs are what a gameplay change gets measured against, covering <strong>ability activation, state transitions, and damage application</strong>. The record of what the game did is the standard, not the agent’s account of its own change.</p>' +
            '</div>',
          svg:
            '<div class="diag-label">// Agent ↔ Editor Loop</div>' +
            '<svg viewBox="0 0 1080 300" class="diag-svg" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="arrAi2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/></marker></defs>' +
              '<text x="296" y="46" text-anchor="middle" class="note">read-only Python toolkit</text>' +
              '<text x="514" y="46" text-anchor="middle" class="note">C++ authoring library</text>' +
              '<rect x="12" y="62" width="164" height="116" rx="6" class="box--key"/>' +
              '<text x="94" y="108" text-anchor="middle" class="title">AGENT</text>' +
              '<text x="94" y="134" text-anchor="middle" class="label">Claude Code session</text>' +
              '<line x1="176" y1="120" x2="200" y2="120" class="arrow" marker-end="url(#arrAi2)"/>' +
              '<rect x="200" y="62" width="192" height="116" rx="6" class="box"/>' +
              '<text x="296" y="96" text-anchor="middle" class="title">INSPECT</text>' +
              '<text x="296" y="122" text-anchor="middle" class="text">read live editor state</text>' +
              '<text x="296" y="142" text-anchor="middle" class="text-xs">montage notifies · DataTables</text>' +
              '<text x="296" y="160" text-anchor="middle" class="text-xs">BT topology</text>' +
              '<line x1="392" y1="120" x2="416" y2="120" class="arrow" marker-end="url(#arrAi2)"/>' +
              '<rect x="416" y="62" width="196" height="116" rx="6" class="box"/>' +
              '<text x="514" y="102" text-anchor="middle" class="title">AUTHOR</text>' +
              '<text x="514" y="128" text-anchor="middle" class="text">create / edit / migrate</text>' +
              '<text x="514" y="150" text-anchor="middle" class="text-xs">assets in the running editor</text>' +
              '<line x1="612" y1="120" x2="636" y2="120" class="arrow" marker-end="url(#arrAi2)"/>' +
              '<rect x="636" y="62" width="210" height="116" rx="6" class="box"/>' +
              '<text x="741" y="102" text-anchor="middle" class="title">PLAYTEST</text>' +
              '<text x="741" y="128" text-anchor="middle" class="text">automated in-editor capture</text>' +
              '<text x="741" y="150" text-anchor="middle" class="text-xs">footage + runtime logs</text>' +
              '<line x1="846" y1="120" x2="870" y2="120" class="arrow" marker-end="url(#arrAi2)"/>' +
              '<rect x="870" y="62" width="198" height="116" rx="6" class="box--key"/>' +
              '<text x="969" y="102" text-anchor="middle" class="title">VALIDATE</text>' +
              '<text x="969" y="128" text-anchor="middle" class="text">checked against</text>' +
              '<text x="969" y="150" text-anchor="middle" class="text">what the game did</text>' +
              '<path d="M 969 178 L 969 250 L 94 250 L 94 178" fill="none" class="arrow" marker-end="url(#arrAi2)"/>' +
              '<text x="531" y="270" text-anchor="middle" class="text-xs">findings feed the next change</text>' +
            '</svg>'
        },
        {
          type: 'subsection',
          title: 'Working From Verified Engine Knowledge',
          body:
            '<p class="dm-lead">The most expensive agent failure in engine work is a <strong>confidently wrong API assumption</strong>. Two things prevent it here: a documentation pipeline that verifies engine knowledge before agents use it, and a standing rule for what wins when the old project and GAS disagree.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">GAS-first rebuild:</span> the combat state machine, AI behavior architecture, and damage pipeline were rebuilt so that <strong>GAS-idiomatic methods take precedence</strong> over the original’s structure. The combat foundation is designed around the ability system rather than translated into it.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Grounded reference docs:</span> an <strong>8-phase documentation pipeline</strong> builds agent-facing engine references from a <strong>3-tier source hierarchy</strong>: engine headers first, then real usage in the codebase, then community documentation. Each doc goes through adversarial critique against a hard <strong>95% accuracy gate</strong> before agents are allowed to work from it.</p>' +
            '</div>'
        }
      ]
    },

    // ── § 3 ─ How the Work Gets Checked ────────────────────────────────────
    {
      id: 'verification',
      label: 'How the Work Gets Checked',
      type: 'pillar',
      title: 'How the Work Gets Checked',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">Nothing grades its own homework: every piece of work is checked by something that didn’t write it.</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: 'Blind Multi-Axis Code Review',
          body:
            '<p class="dm-lead">One reviewer shares blind spots with the author. Code review here fans out to <strong>five parallel reviewers</strong>, each assigned a single axis and <strong>blind to what the others find</strong>.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Uncorrelated blind spots:</span> each reviewer looks at one axis only, so their failures don’t line up. When separate axes independently flag the same code, that agreement counts as evidence, because the reviewers had <strong>no way to influence each other</strong>.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Disputes stay on the record:</span> findings the reviewers disagree about are <strong>preserved and surfaced for a decision</strong> instead of being resolved away during aggregation.</p>' +
            '</div>',
          svg:
            '<div class="diag-label">// Blind Review Fan-Out</div>' +
            '<svg viewBox="0 0 1080 520" class="diag-svg" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="arrAi3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/></marker></defs>' +
              '<rect x="390" y="24" width="300" height="44" rx="6" class="box--key"/>' +
              '<text x="540" y="52" text-anchor="middle" class="title">CANDIDATE WORK</text>' +
              '<text x="540" y="88" text-anchor="middle" class="text-xs">code diff · design doc · implementation</text>' +
              '<text x="240" y="118" text-anchor="end" class="note">five reviewers, uncorrelated blind spots</text>' +
              '<line x1="540" y1="100" x2="540" y2="124" class="arrow"/>' +
              '<line x1="252" y1="124" x2="828" y2="124" class="arrow"/>' +
              '<line x1="252" y1="124" x2="252" y2="142" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<line x1="396" y1="124" x2="396" y2="142" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<line x1="540" y1="124" x2="540" y2="142" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<line x1="684" y1="124" x2="684" y2="142" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<line x1="828" y1="124" x2="828" y2="142" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<rect x="190" y="144" width="124" height="60" rx="6" class="box"/>' +
              '<text x="252" y="170" text-anchor="middle" class="title">AXIS 1</text>' +
              '<text x="252" y="190" text-anchor="middle" class="text-xs">one axis · blind</text>' +
              '<rect x="334" y="144" width="124" height="60" rx="6" class="box"/>' +
              '<text x="396" y="170" text-anchor="middle" class="title">AXIS 2</text>' +
              '<text x="396" y="190" text-anchor="middle" class="text-xs">one axis · blind</text>' +
              '<rect x="478" y="144" width="124" height="60" rx="6" class="box"/>' +
              '<text x="540" y="170" text-anchor="middle" class="title">AXIS 3</text>' +
              '<text x="540" y="190" text-anchor="middle" class="text-xs">one axis · blind</text>' +
              '<rect x="622" y="144" width="124" height="60" rx="6" class="box"/>' +
              '<text x="684" y="170" text-anchor="middle" class="title">AXIS 4</text>' +
              '<text x="684" y="190" text-anchor="middle" class="text-xs">one axis · blind</text>' +
              '<rect x="766" y="144" width="124" height="60" rx="6" class="box"/>' +
              '<text x="828" y="170" text-anchor="middle" class="title">AXIS 5</text>' +
              '<text x="828" y="190" text-anchor="middle" class="text-xs">one axis · blind</text>' +
              '<line x1="252" y1="204" x2="252" y2="236" class="arrow"/>' +
              '<line x1="396" y1="204" x2="396" y2="236" class="arrow"/>' +
              '<line x1="540" y1="204" x2="540" y2="236" class="arrow"/>' +
              '<line x1="684" y1="204" x2="684" y2="236" class="arrow"/>' +
              '<line x1="828" y1="204" x2="828" y2="236" class="arrow"/>' +
              '<line x1="252" y1="236" x2="828" y2="236" class="arrow"/>' +
              '<line x1="540" y1="236" x2="540" y2="264" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<rect x="360" y="266" width="360" height="96" rx="6" class="box"/>' +
              '<text x="540" y="296" text-anchor="middle" class="title">CORROBORATION</text>' +
              '<text x="540" y="322" text-anchor="middle" class="text">agreement across distinct axes raises confidence</text>' +
              '<text x="540" y="344" text-anchor="middle" class="text">disputed findings preserved, never dropped</text>' +
              '<line x1="540" y1="362" x2="540" y2="390" class="arrow" marker-end="url(#arrAi3)"/>' +
              '<rect x="390" y="392" width="300" height="68" rx="6" class="box--key"/>' +
              '<text x="540" y="422" text-anchor="middle" class="title">DECISION</text>' +
              '<text x="540" y="446" text-anchor="middle" class="text">surfaced for a decision</text>' +
              '<text x="540" y="482" text-anchor="middle" class="text-xs">the implementer is never the reviewer</text>' +
            '</svg>'
        },
        {
          type: 'subsection',
          title: 'Blind Judging and Calibration',
          body:
            '<p class="dm-lead">Design documents and candidate implementations are both scored against <strong>fixed axes</strong>, and the scoring is built so that a confident writing style can’t earn points on its own.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Design-doc reviewers:</span> documents are scored <strong>0–100</strong> with a per-axis breakdown covering architecture fidelity, GAS accuracy, completeness, absence of fabrication, and actionability. The reviewers are <strong>critical by default</strong>, so a document has to earn its score.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Blind judge panel:</span> <strong>three independent judges</strong> score anonymized candidate implementations, aggregated by <strong>median per axis</strong>. Known-good and known-broken controls run alongside as calibration checks, and a change only wins if its margin <strong>beats the observed noise band</strong>.</p>' +
            '</div>'
        },
        {
          type: 'subsection',
          title: 'Tests and Role Separation',
          body:
            '<p class="dm-lead">Two standing rules cover what scoring can’t reach: where a test’s expected value comes from, and who is allowed to check whose work.</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Test hardening:</span> every expected value must come from an <strong>independent source of truth</strong>: a spec, a known-good behavior, engine documentation. <strong>Tautological tests</strong>, where the expectation is computed the same way the code computes it, are rejected.</p>' +
            '</div>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Implementer is never the reviewer:</span> review always runs in a <strong>separate agent context</strong> from the one that produced the work. An agent asked to check its own output reliably passes it.</p>' +
            '</div>'
        }
      ]
    },

    // ── § 4 ─ The Ecosystem ────────────────────────────────────────────────
    {
      id: 'ecosystem',
      label: 'The Ecosystem',
      type: 'prose',
      title: 'The Ecosystem',
      blocks: [
        { type: 'paragraph', html: '<div class="proj-eyebrow">// 04 — Skills, Knowledge, Memory</div><p class="dm-lead">Underneath the kit sits a knowledge layer: the maps agents load before they touch anything. Extract what\u2019s true, validate it against a source that isn\u2019t the agent, index it cheap, and correct it when a session proves it wrong. Only the subject changes.</p>' },

        { type: 'paragraph', html: '<div class="proj-eyebrow">// The Knowledge Layer</div>' },
        { type: 'list', items: [
          '<span class="bullet-lead">Engine ground truth:</span> probes export live editor state to <strong>169 files</strong> — type inventory, 20 data tables, behavior trees — so specs come from the engine, not memory.',
          '<span class="bullet-lead">Two-audience docs:</span> every spec ships as a human-readable version and a condensed agent cut with a claim-to-source index, each claim tagged by how far it’s verified.',
          '<span class="bullet-lead">Typed session memory:</span> <strong>275 fact files across 13 projects</strong> — preferences, constraints, source pointers — loaded automatically at the start of every session.'
        ] },

        { type: 'widget', html: '<div class="diag-wrap"><div class="diag-label">// One Pattern, Four Subjects</div><svg viewBox="0 0 1080 500" class="diag-svg" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrAi4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/></marker></defs><rect x="70" y="52" width="220" height="104" rx="6" class="box"/><text x="180" y="80" text-anchor="middle" class="label">ENGINE STATE</text><text x="180" y="104" text-anchor="middle" class="text">probes dump a live editor</text><text x="180" y="126" text-anchor="middle" class="text-xs">type inventory · data tables</text><text x="180" y="144" text-anchor="middle" class="text-xs">behavior-tree topology</text><rect x="310" y="52" width="220" height="104" rx="6" class="box"/><text x="420" y="80" text-anchor="middle" class="label">REFERENCE DOCS</text><text x="420" y="104" text-anchor="middle" class="text">one system, explained deep</text><text x="420" y="126" text-anchor="middle" class="text-xs">engine source first, then</text><text x="420" y="144" text-anchor="middle" class="text-xs">real usage, then community</text><rect x="550" y="52" width="220" height="104" rx="6" class="box"/><text x="660" y="80" text-anchor="middle" class="label">ROUTING MAPS</text><text x="660" y="104" text-anchor="middle" class="text">where things actually live</text><text x="660" y="126" text-anchor="middle" class="text-xs">owners · deprecations</text><text x="660" y="144" text-anchor="middle" class="text-xs">which specialist takes it</text><rect x="790" y="52" width="220" height="104" rx="6" class="box"/><text x="900" y="80" text-anchor="middle" class="label">SESSION MEMORY</text><text x="900" y="104" text-anchor="middle" class="text">one fact per file, typed</text><text x="900" y="126" text-anchor="middle" class="text-xs">275 files · 13 projects</text><text x="900" y="144" text-anchor="middle" class="text-xs">semantic store above them</text><line x1="180" y1="156" x2="180" y2="182" class="arrow"/><line x1="420" y1="156" x2="420" y2="182" class="arrow"/><line x1="660" y1="156" x2="660" y2="182" class="arrow"/><line x1="900" y1="156" x2="900" y2="182" class="arrow"/><line x1="180" y1="182" x2="900" y2="182" class="arrow"/><line x1="540" y1="182" x2="540" y2="202" class="arrow" marker-end="url(#arrAi4)"/><rect x="340" y="204" width="400" height="72" rx="6" class="box--key"/><text x="540" y="232" text-anchor="middle" class="title">VALIDATE</text><text x="540" y="254" text-anchor="middle" class="text">checked against something that didn’t write it</text><text x="540" y="270" text-anchor="middle" class="text-xs">a dump, engine source, or a direct diff — not the agent’s account</text><text x="316" y="240" text-anchor="end" class="note">nothing grades its own homework</text><line x1="540" y1="276" x2="540" y2="298" class="arrow" marker-end="url(#arrAi4)"/><rect x="340" y="300" width="400" height="72" rx="6" class="box"/><text x="540" y="328" text-anchor="middle" class="title">CONDENSE</text><text x="540" y="350" text-anchor="middle" class="text">an agent-facing cut, not the human document</text><text x="540" y="366" text-anchor="middle" class="text-xs">decision tables · gotchas · claim → source · unverified edges</text><text x="316" y="336" text-anchor="end" class="note">written for recall, not reading</text><line x1="540" y1="372" x2="540" y2="394" class="arrow" marker-end="url(#arrAi4)"/><rect x="340" y="396" width="400" height="72" rx="6" class="box--key"/><text x="540" y="424" text-anchor="middle" class="title">SESSION LOADS IT</text><text x="540" y="446" text-anchor="middle" class="text">index first, detail only when opened</text><text x="540" y="462" text-anchor="middle" class="text-xs">the always-on budget holds cues, not status</text><path d="M 740 432 L 1040 432 L 1040 104 L 1014 104" fill="none" class="arrow arrow--dashed" marker-end="url(#arrAi4)"/><text x="1026" y="490" text-anchor="end" class="text-xs">a session that proves a line wrong rewrites the source</text></svg><div class="diag-caption">Left to right is how knowledge gets in. The return line is how one session’s corrections change what the next one loads.</div></div>' },

        { type: 'paragraph', html: '<div class="proj-eyebrow">// The Kit Itself</div>' },
        { type: 'list', items: [
          '<span class="bullet-lead">The kit:</span> <strong>15 custom skills and 10+ subagents</strong> authored and shipped publicly, with installers and benchmark harnesses so others can run it.',
          '<span class="bullet-lead">Provenance tracked:</span> <strong>10 of the kit’s 22 subagents</strong> came from other repos, each logged in a table naming exactly what was cut before use.',
          '<span class="bullet-lead">Live run visibility:</span> custom hooks pipe tool events into a session monitor, making long autonomous runs watchable in real time — dashboard adopted, wiring authored.'
        ] },
      ]
    },

    // ── § 5 ─ What Earns a Place in the Kit ────────────────────────────────
    {
      id: 'kit-standards',
      label: 'What Earns a Place',
      type: 'prose',
      title: 'What Earns a Place in the Kit',
      blocks: [
        { type: 'paragraph', html: '<div class="proj-eyebrow">// 05 — Vetting, Adaptation, Evidence</div><p class="dm-lead">Most of what an agent system could run is someone else\u2019s work. What decides whether it helps is what I refuse to install, what I rebuild before trusting, and whether any of it was ever measured.</p>' },
        { type: 'list', items: [
          '<span class="bullet-lead">Adoption gate:</span> every candidate agent is read in full against four rules — minimal tool grants, no cross-agent handshakes, no fabricated metrics, reviewers stay read-only.',
          '<span class="bullet-lead">One refused outright:</span> it hard-coded a fixed vulnerability count into its own output template and claimed “2.3M contexts, 47ms retrieval” — prose, not benchmarks.'
        ] },

        { type: 'paragraph', html: '<div class="proj-eyebrow">// Adapting a Published Pipeline</div>' },
        { type: 'list', items: [
          '<span class="bullet-lead">Head-to-head audit:</span> a published skills release compared against the kit across <strong>15 analyst agents and 8 collision pairs</strong>; of 68 cited file paths tested, 58 resolved.',
          '<span class="bullet-lead">The verdict split:</span> <strong>2 of their primitives replaced mine outright, 5 were ported as ideas, 1 adopted alongside</strong> — nothing taken wholesale.'
        ] },

        { type: 'paragraph', html: '<div class="proj-eyebrow">// What’s Actually Measured</div>' },
        { type: 'list', items: [
          '<span class="bullet-lead">Bake-off finding:</span> the third-party arm ran TDD and code review yet shipped an ability that aborts on activation — authored-but-unrun tests miss runtime faults.',
          '<span class="bullet-lead">Blind five-lens scoring:</span> one model pinned across every arm: the kit scored <strong>66 on ~174k output tokens</strong>; the third-party stack, <strong>60 on ~210k</strong>.',
          '<span class="bullet-lead">Beaten on quality, not cost:</span> a dynamic multi-agent workflow scored <strong>80</strong> at roughly <strong>3.2×</strong> the kit’s tokens. One task, one run per arm — indicative, not policy.',
          '<span class="bullet-lead">Failure disclosed:</span> my own arm initially skipped its review loop — a self-handicap in my own bake-off — then re-ran at equal rigor with seven fairness controls.'
        ] },
      ]
    },

    // ── § 5 ─ Mission Control ──────────────────────────────────────────────
    {
      id: 'mission-control',
      label: 'Mission Control',
      type: 'prose',
      title: 'Mission Control',
      blocks: [
        { type: 'paragraph', html: '<div class="proj-eyebrow">// 06 — Planning, Tracking, Flying</div><p>Work too big for one session gets charted before it gets started. A large initiative becomes a map of typed decision tickets (research, prototype, requirements interrogation, task) with dependencies between them, so the next actionable piece is always identifiable. Parts of the map that genuinely can’t be specified yet are marked as open fog and left that way until they can be answered, and the working set is the frontier: the tickets that are open and unblocked right now. The method is adapted from a published practice, not one I invented.</p>' },
        { type: 'paragraph', html: '<p>Linear is the tracker of record. It holds <strong>76 imported GitHub issues</strong>, and branch names in the rebuild’s git history are keyed to Linear tickets, so a commit traces back to the decision that asked for it.</p>' },
        { type: 'paragraph', html: '<p>Cockpit is the desktop app I built to fly all of this: an Electron mission-control surface with live Linear project and task panes, embedded Claude terminal sessions (one per project, with a tab strip and per-session activity states), and a star-map renderer of the work-map dependency graph. It is deliberately <strong>read-only toward Linear</strong>: the cockpit displays, the pilot acts. Every write flows through the terminal, where I can see it. Cockpit was built end to end in a single session and flown the next day; it’s a young tool, and I won’t call it a daily driver yet.</p>' },
        { type: 'paragraph', html:
          '<div class="diag-wrap">' +
            '<div class="diag-label">// Mission Control Stack</div>' +
            '<svg viewBox="0 0 1080 560" class="diag-svg" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="arrAi5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/></marker></defs>' +
              '<rect x="350" y="30" width="300" height="92" rx="6" class="box"/>' +
              '<text x="500" y="60" text-anchor="middle" class="title">WORK MAP</text>' +
              '<text x="500" y="86" text-anchor="middle" class="text">typed decision tickets + dependencies</text>' +
              '<text x="500" y="108" text-anchor="middle" class="text-xs">unspecifiable parts stay marked as fog</text>' +
              '<line x1="500" y1="122" x2="500" y2="150" class="arrow" marker-end="url(#arrAi5)"/>' +
              '<rect x="380" y="152" width="240" height="68" rx="6" class="box--key"/>' +
              '<text x="500" y="182" text-anchor="middle" class="title">LINEAR</text>' +
              '<text x="500" y="206" text-anchor="middle" class="text">tracker of record</text>' +
              '<line x1="500" y1="220" x2="500" y2="282" class="arrow arrow--dashed" marker-end="url(#arrAi5)"/>' +
              '<text x="516" y="246" class="text-xs">display only · read-only</text>' +
              '<rect x="290" y="284" width="420" height="134" rx="6" class="box"/>' +
              '<text x="500" y="314" text-anchor="middle" class="title">COCKPIT</text>' +
              '<text x="500" y="344" text-anchor="middle" class="text">live project + task panes</text>' +
              '<text x="500" y="370" text-anchor="middle" class="text">embedded Claude terminals</text>' +
              '<text x="500" y="396" text-anchor="middle" class="text">star-map dependency graph</text>' +
              '<text x="250" y="350" text-anchor="end" class="note">the cockpit displays, the pilot acts</text>' +
              '<line x1="500" y1="418" x2="500" y2="452" class="arrow" marker-end="url(#arrAi5)"/>' +
              '<rect x="350" y="454" width="300" height="58" rx="6" class="box"/>' +
              '<text x="500" y="488" text-anchor="middle" class="title">TERMINAL SESSIONS</text>' +
              '<path d="M 650 483 L 880 483 L 880 186 L 620 186" fill="none" class="arrow" marker-end="url(#arrAi5)"/>' +
              '<text x="896" y="320" class="text-xs">all writes flow</text>' +
              '<text x="896" y="336" class="text-xs">through the terminal</text>' +
            '</svg>' +
          '</div>' },
        // ── Cockpit widget ──────────────────────────────────────────────
        // Hand-built recreation of the real app (mbschenked/cockpit @ de28ff6).
        // Every colour, glyph and state below is taken from that repo's own CSS
        // — Cockpit's palette, not this page's green, because a recreation that
        // recolours is a weaker claim and a real capture has to slot in later.
        // Ticket + project names are live Linear data; nothing here is invented.
        // Uses type 'widget' so it escapes .section-prose's 70ch clamp.
        // Behaviour is wired by wireCockpit() in app.js.
        { type: 'widget', html:
          '<div class="cp" role="figure" aria-label="Cockpit — interactive recreation" aria-describedby="cp-cap">' +

            '<div class="cp-bar">' +
              '<span class="cp-bar-title">Cockpit</span>' +
              '<span class="cp-bar-sub">wayfinder harness &middot; electron + xterm.js + node-pty</span>' +
            '</div>' +

            // Global tab strip — one tab per live PTY across all projects.
            // The four dot states are the app's real activity vocabulary.
            '<div class="cp-tabs" role="group" aria-label="Terminal sessions">' +
              '<button type="button" class="cp-tab is-active" data-state="computing" data-label="Default: claude-1" aria-pressed="true" title="computing — claude output is flowing"><span class="cp-dot"></span><span class="cp-tab-proj">Default:</span>claude-1</button>' +
              '<button type="button" class="cp-tab" data-state="ready" data-label="UnrealBossMaker: claude-2" aria-pressed="false" title="ready — it stopped, and you have not looked yet"><span class="cp-dot"></span><span class="cp-tab-proj">UnrealBossMaker:</span>claude-2</button>' +
              '<button type="button" class="cp-tab" data-state="idle" data-label="VFX: claude-3" aria-pressed="false" title="idle — a claude session, quiet, acknowledged"><span class="cp-dot"></span><span class="cp-tab-proj">VFX:</span>claude-3</button>' +
              '<button type="button" class="cp-tab" data-state="shell" data-label="Counter: pwsh-4" aria-pressed="false" title="shell — claude was never launched here"><span class="cp-dot"></span><span class="cp-tab-proj">Counter:</span>pwsh-4</button>' +
              '<span class="cp-tab cp-tab--plus" aria-hidden="true">+</span>' +
            '</div>' +

            '<div class="cp-grid">' +

              '<div class="cp-side">' +
                '<section class="cp-pane cp-pane--projects">' +
                  '<header class="cp-pane-head">Projects</header>' +
                  '<ul class="cp-rows">' +
                    '<li class="cp-proj is-selected"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">WorkBench Overhaul</span></li>' +
                    '<li class="cp-proj"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">UnrealBossMaker</span></li>' +
                    '<li class="cp-proj"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">Boss AI Phase B</span></li>' +
                    '<li class="cp-proj"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">Counter Completion Arc</span></li>' +
                    '<li class="cp-proj"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">VFX Style Kit</span></li>' +
                    '<li class="cp-proj"><span class="cp-grip" aria-hidden="true">&#10495;</span><span class="cp-proj-name">AnimAuthor</span></li>' +
                  '</ul>' +
                '</section>' +

                '<section class="cp-pane cp-pane--tasks">' +
                  '<header class="cp-pane-head">Tasks' +
                    '<span class="cp-legend">' +
                      '<span class="cp-legend-item"><i aria-hidden="true" class="cp-type cp-type--research"></i>research</span>' +
                      '<span class="cp-legend-item"><i aria-hidden="true" class="cp-type cp-type--prototype"></i>prototype</span>' +
                      '<span class="cp-legend-item"><i aria-hidden="true" class="cp-type cp-type--grilling"></i>grilling</span>' +
                      '<span class="cp-legend-item"><i aria-hidden="true" class="cp-type cp-type--task"></i>task</span>' +
                    '</span>' +
                  '</header>' +
                  '<ul class="cp-rows">' +
                    '<li><button type="button" class="cp-task"><span class="cp-task-head"><i aria-hidden="true" class="cp-type cp-type--research"></i><span class="cp-task-title">Cockpit-node-pty Electron matrix verify-1</span> <span class="cp-task-id">TOG-102</span></span></button></li>' +
                    '<li><button type="button" class="cp-task"><span class="cp-task-head"><i aria-hidden="true" class="cp-type cp-type--task"></i><span class="cp-task-title">Cockpit-star map panel-5</span> <span class="cp-task-id">TOG-106</span></span></button></li>' +
                    '<li><button type="button" class="cp-task"><span class="cp-task-head"><i aria-hidden="true" class="cp-type cp-type--prototype"></i><span class="cp-task-title">Cockpit-v1 assembly-8</span> <span class="cp-task-id">TOG-109</span></span></button></li>' +
                    '<li><button type="button" class="cp-task"><span class="cp-task-head"><i aria-hidden="true" class="cp-type cp-type--task"></i><span class="cp-task-title">Cockpit-subagent delegation signal-11</span> <span class="cp-task-id">TOG-115</span></span></button></li>' +
                  '</ul>' +
                  '<p class="cp-note" hidden>display only &mdash; cockpit has no write path to Linear</p>' +
                '</section>' +
              '</div>' +

              '<section class="cp-pane cp-term">' +
                '<header class="cp-pane-head">Terminal' +
                  '<span class="cp-session" data-role="session-label">Default: claude-1</span>' +
                  '<span class="cp-term-ctl">' +
                    '<button type="button" class="cp-btn cp-btn--pad" aria-pressed="false">&#9998; pad</button>' +
                  '</span>' +
                '</header>' +

                '<div class="cp-term-row">' +
                  '<div class="cp-term-body">' +

                    '<div class="cp-script" data-script="boot">' +
                      '<div class="cp-line cp-line--sys">cockpit &middot; session spawned &middot; shell &rarr; default</div>' +
                      '<div class="cp-line"><span class="cp-sigil">PS D:\\ClaudeCode&gt;</span><span class="cp-cmd-text">claude &quot;/workbench&quot;</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">linear</span><span class="cp-lead"></span><span class="cp-v">pulling open issues</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">memory</span><span class="cp-lead"></span><span class="cp-v">recalling compressed packs</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">bench</span><span class="cp-lead"></span><span class="cp-v">WORKBENCH.md written</span></div>' +
                      '<div class="cp-line cp-line--sys">read-only pull &mdash; cockpit has no write path to linear</div>' +
                      '<div class="cp-line cp-line--done">ready</div>' +
                    '</div>' +

                    '<div class="cp-script" data-script="close" hidden>' +
                      '<div class="cp-line"><span class="cp-sigil">&gt;</span><span class="cp-cmd-text">/workbench close</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">delta</span><span class="cp-lead"></span><span class="cp-v">ticket changes staged for review</span></div>' +
                      '<div class="cp-line cp-line--halt" data-halt="confirm"><span class="cp-sigil cp-sigil--ask">?</span><span class="cp-cmd-text">confirm ticket delta</span><button type="button" class="cp-confirm">confirm</button></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">linear</span><span class="cp-lead"></span><span class="cp-v">updated &mdash; from this terminal</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">memory</span><span class="cp-lead"></span><span class="cp-v">packs written</span></div>' +
                      '<div class="cp-line cp-line--step"><span class="cp-arrow">&#9656;</span><span class="cp-k">bench</span><span class="cp-lead"></span><span class="cp-v">WORKBENCH.md closed</span></div>' +
                      '<div class="cp-line cp-line--done">the cockpit displayed. the pilot acted.</div>' +
                    '</div>' +

                    // Where the drawing pad pastes its PNG path — uncommitted,
                    // no newline, exactly as drawpad.js does it.
                    '<div class="cp-input"><span class="cp-ps">PS D:\\ClaudeCode&gt;</span><span class="cp-input-val"></span><span class="cp-caret"></span></div>' +
                  '</div>' +

                  // A real canvas, not a picture of one. Swatch colours, the
                  // 15-deep undo cap and the eraser's 3x width are drawpad.js's.
                  '<aside class="cp-pad" hidden>' +
                    '<div class="cp-pad-bar">' +
                      '<span class="cp-pad-target">&rarr; Default: claude-1</span>' +
                      '<span class="cp-pad-tools">' +
                        '<button type="button" class="cp-sw is-on" data-color="#111111" aria-label="black" title="black"></button>' +
                        '<button type="button" class="cp-sw" data-color="#e05252" aria-label="red" title="red"></button>' +
                        '<button type="button" class="cp-sw" data-color="#e8a33d" aria-label="amber" title="amber"></button>' +
                        '<button type="button" class="cp-sw" data-color="#3fa34d" aria-label="green" title="green"></button>' +
                        '<button type="button" class="cp-sw" data-color="#3d6fe8" aria-label="blue" title="blue"></button>' +
                        '<button type="button" class="cp-sw" data-color="#8e4fd0" aria-label="purple" title="purple"></button>' +
                        '<button type="button" class="cp-tool" data-width="2" aria-label="thin" title="thin">&middot;</button>' +
                        '<button type="button" class="cp-tool is-on" data-width="5" aria-label="medium" title="medium">&#9679;</button>' +
                        '<button type="button" class="cp-tool" data-width="10" aria-label="thick" title="thick">&#11044;</button>' +
                        '<button type="button" class="cp-tool" data-act="eraser" aria-label="eraser" title="eraser">&#11035;</button>' +
                        '<button type="button" class="cp-tool" data-act="undo" aria-label="undo" title="undo">&#8630;</button>' +
                        '<button type="button" class="cp-tool" data-act="clear" aria-label="clear" title="clear">&#10005;</button>' +
                      '</span>' +
                    '</div>' +
                    '<div class="cp-pad-canvas">' +
                      '<canvas class="cp-pad-cv" width="640" height="360" aria-label="drawing pad — draw with the mouse"></canvas>' +
                    '</div>' +
                    '<div class="cp-pad-foot">' +
                      '<span class="cp-pad-gallery" aria-label="today&rsquo;s drawings"></span>' +
                      '<button type="button" class="cp-pad-send">&crarr; enter</button>' +
                    '</div>' +
                  '</aside>' +
                '</div>' +

                '<div class="cp-cmds">' +
                  '<button type="button" class="cp-cmd" data-script="boot">&#9656; replay boot</button>' +
                  '<button type="button" class="cp-cmd cp-cmd--primary" data-script="close">&#9656; replay close</button>' +
                  '<span class="cp-hint">draw on the pad, click a shard, or replay the bracket</span>' +
                '</div>' +

                // Cockpit's own midnight job sweeps the drawings folder. The session-folding
                // midnight job belongs to /workbench, which lives outside this app — the
                // repo's glossary warns against exactly that conflation.
                '<div class="cp-sys">00:00 &middot; drawings swept &mdash; nothing older than today survives</div>' +
              '</section>' +

              // Third pane: the "Data Shards" dependency tree. Bands are
              // longest-blocker-chain depth, lanes are blocking edges, ghosts
              // on the bottom rim are fog. Built by JS the way the real pane
              // rebuilds itself on every Linear poll, so the placeholder below
              // is the app's own no-project copy rather than an empty box.
              '<section class="cp-pane cp-map">' +
                '<header class="cp-pane-head">Star Map' +
                  '<button type="button" class="cp-btn cp-map-fit">&#9906; fit</button>' +
                '</header>' +
                '<div class="cp-hud">' +
                  '<div class="cp-hud-dest"></div>' +
                  '<div class="cp-hud-counts"></div>' +
                '</div>' +
                '<div class="cp-map-body">' +
                  '<p class="cp-map-ph">Select a project to chart its constellation.</p>' +
                  '<div class="cp-viewport"><div class="cp-stage"><svg class="cp-lanes"></svg></div></div>' +
                  '<div class="cp-map-legend" aria-hidden="true"></div>' +
                '</div>' +
              '</section>' +

            '</div>' +

            '<p class="cp-cap" id="cp-cap">// recreation &mdash; redrawn from the app, not a screenshot</p>' +
          '</div>'
        },

        { type: 'paragraph', html: '<p>Sessions are bracketed. Opening one pulls the live ticket state and recalls the compressed memories relevant to it. Closing one confirms the ticket delta with me, then writes compact memory packs back down. A scheduled midnight job auto-closes anything left open, so no session is left dangling and unrecorded. The compression path is <strong>designed and reviewed but not yet proven at volume</strong>; it’s the piece I’d instrument next.</p>' }
      ]
    }
  ]
};
