/* AI-Assisted Development — content build (issue #19).
   Copy produced via the full loop: portfolio-copy-editor draft →
   draft-critique structural pass → copy-editor reconcile (2026-08-12).
   ⚠ Every number on this page is on Max's sign-off list (329/105, ~15
   scripts, 8-phase, 3-tier, 95%, five reviewers, 0–100, three judges,
   15 skills, 10+ subagents, 285/13, 700+, 76) — confirmed facts per the
   verified inventory, pending his per-line nod before push.
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
        { type: 'paragraph', html: '<div class="proj-eyebrow">// 04 — Skills, Memory, Provenance</div><p>The system is <strong>kitted out, not trained</strong>. Its behavior comes from what I equip it with — skills, subagents, rules, memory, and feedback loops — rather than from any change to the underlying model. Every improvement is something I can read, edit, version, and install on another machine.</p>' },
        { type: 'paragraph', html: '<p>That kit holds <strong>15 custom skills</strong> and <strong>more than 10 custom subagents</strong> I authored, alongside third-party agents I vet, harden, and curate but don’t claim as my own. It ships publicly as claude-kit, with cross-platform installers for Mac and Windows, benchmark harnesses, and written vetting analyses of the third-party stacks I evaluated before adopting them. A <strong>per-artifact provenance table</strong> records what was authored, what was adapted, and what was curated.</p>' },
        { type: 'paragraph', html: '<p>Agent activity is observable while it runs. Tool events feed through hooks into a live session monitor and a statusline activity board, so a long autonomous run is something I can watch in real time. The dashboard app itself is third-party; the hook wiring that feeds it is mine.</p>' },
        { type: 'paragraph', html: '<p>Memory is layered so context survives past a single session. Per-project memory files (<strong>285 across 13 projects</strong>) hold the decisions and corrections specific to one codebase. Above those sits a semantic thought database of <strong>700+ captured thoughts</strong>, ranked by actual usage on a scheduled job and access-logged, so entries that never get used sink in rank. A third layer keeps a corpus of past sessions, so a pattern that worked in one project can be recalled in another.</p>' }
      ]
    },

    // ── § 5 ─ Mission Control ──────────────────────────────────────────────
    {
      id: 'mission-control',
      label: 'Mission Control',
      type: 'prose',
      title: 'Mission Control',
      blocks: [
        { type: 'paragraph', html: '<div class="proj-eyebrow">// 05 — Planning, Tracking, Flying</div><p>Work too big for one session gets charted before it gets started. A large initiative becomes a map of typed decision tickets (research, prototype, requirements interrogation, task) with dependencies between them, so the next actionable piece is always identifiable. Parts of the map that genuinely can’t be specified yet are marked as open fog and left that way until they can be answered, and the working set is the frontier: the tickets that are open and unblocked right now. The method is adapted from a published practice, not one I invented.</p>' },
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
        { type: 'paragraph', html: '<p>Sessions are bracketed. Opening one pulls the live ticket state and recalls the compressed memories relevant to it. Closing one confirms the ticket delta with me, then writes compact memory packs back down. A scheduled midnight job auto-closes anything left open, so no session is left dangling and unrecorded. The compression path is <strong>designed and reviewed but not yet proven at volume</strong>; it’s the piece I’d instrument next.</p>' }
      ]
    }
  ]
};
