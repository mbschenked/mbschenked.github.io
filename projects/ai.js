/* AI-Assisted Development — scaffold only (structure locked, copy pending).
   5 sections: project-overview, ue-agent-workflows, verification, ecosystem,
   mission-control. Section ids/labels/types are final; every string of prose
   below is a visible [PLACEHOLDER — …] marker so nothing here can be mistaken
   for a real claim. No numbers, no system names, no shipped-feature claims
   until the content pass replaces them. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.ai = {
  slug: 'ai',
  title: 'AI-Assisted Development',
  subtitle: '// Agentic Ecosystem · Unreal Engine 5',
  timeline: 'Since May 2026',
  accent: 'green',
  summary: '[PLACEHOLDER — one-sentence high-concept summary of the AI-assisted development practice.]',
  tools: ['Claude Code', 'Supabrain', 'GitHub', 'Linear', 'Unreal Engine 5', 'C++', 'Python', 'Electron', 'Blender'],
  takeaways: [
    '<span class="bullet-lead">[PLACEHOLDER lead one]</span> [PLACEHOLDER — takeaway body one.]',
    '<span class="bullet-lead">[PLACEHOLDER lead two]</span> [PLACEHOLDER — takeaway body two.]',
    '<span class="bullet-lead">[PLACEHOLDER lead three]</span> [PLACEHOLDER — takeaway body three.]',
    '<span class="bullet-lead">[PLACEHOLDER lead four]</span> [PLACEHOLDER — takeaway body four.]'
  ],
  // No hero footage captured for this project yet — renderHero falls back to
  // PLACEHOLDER_HERO when hero is missing, so leaving this null borrows the
  // shared placeholder clip without pinning a wrong asset into the data file.
  // Swap in real footage later (Cockpit star-map capture is the lead candidate).
  hero: null,
  // No tile art yet — tileThumbFor returns null when there's no thumb and no
  // gallery section; the tile still renders as a clickable surface-2 block
  // with its label, so nothing is broken.
  thumb: null,
  sections: [

    // ── § 1 ─ Project Overview ─────────────────────────────────────────────
    // Content intent: what the ecosystem is (custom skills, subagents, and
    // workflows built to design, implement, and verify game systems) and the
    // through-line to the UE 5.7 C++/GAS rebuild it drives. MUST include the
    // meta-note (Max, 2026-08-11): this very portfolio page was built by the
    // customized agent system it describes — an ecosystem that began as the
    // first Claude Code project. Systems-led, NO headline numbers.
    {
      id: 'project-overview',
      label: 'Project Overview',
      type: 'header',
      badges: ['Personal Infrastructure — 2026', 'Solo Developer'],
      title: 'AI-Assisted / Development',
      subtitle: '// Agentic Ecosystem · Unreal Engine 5',
      lead:
        '<p>[PLACEHOLDER — opening paragraph: what this practice is and what it produces.]</p>' +
        '<p>[PLACEHOLDER — second paragraph: role, scope, and what was personally built versus adopted.]</p>',
      takeawaysInline: true
    },

    // ── § 2 ─ Agent Workflows in Unreal ────────────────────────────────────
    // Content intent: the UE integration story — live-editor inspection
    // toolkit, the C++ editor-authoring library, the PIE capture pipeline
    // (agents validating gameplay from footage + logs), the GAS rebuild, and
    // the grounded-reference-doc workflow. Diagrams required; clips welcome.
    {
      id: 'ue-agent-workflows',
      label: 'Agent Workflows in Unreal',
      type: 'pillar',
      title: 'Agent Workflows in Unreal Engine',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">[PLACEHOLDER — one-sentence goal statement for agent workflows inside Unreal.]</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: '[PLACEHOLDER — subsection title]',
          body:
            '<p class="dm-lead">[PLACEHOLDER — subsection lead paragraph.]</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">[PLACEHOLDER lead:]</span> [PLACEHOLDER — bullet body describing one workflow.]</p>' +
            '</div>'
        }
      ]
    },

    // ── § 3 ─ How the Work Gets Checked ────────────────────────────────────
    // Content intent: the self-verification machinery — blind multi-axis
    // review fan-out, 0-100 design-doc reviewers, blind LLM judge panel with
    // calibration controls, TDD hardening, implementer/reviewer role
    // separation. Pipeline diagram required (.diag-svg).
    {
      id: 'verification',
      label: 'How the Work Gets Checked',
      type: 'pillar',
      title: 'How the Work Gets Checked',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">[PLACEHOLDER — one-sentence goal statement for the verification loop.]</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: '[PLACEHOLDER — subsection title]',
          body:
            '<p class="dm-lead">[PLACEHOLDER — subsection lead paragraph.]</p>' +
            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">[PLACEHOLDER lead:]</span> [PLACEHOLDER — bullet body describing one verification step.]</p>' +
            '</div>'
        }
      ]
    },

    // ── § 4 ─ The Ecosystem ────────────────────────────────────────────────
    // Content intent: the kit itself — custom skills + subagents (authored vs
    // curated kept honest), the public claude-kit repo, hooks feeding a live
    // session dashboard, and the tiered memory system. MUST cover (Max,
    // 2026-08-11): how the system is "kitted out" to function — equipped and
    // tuned via skills, subagents, rules, memory, and feedback loops rather
    // than model training.
    {
      id: 'ecosystem',
      label: 'The Ecosystem',
      type: 'prose',
      title: 'The Ecosystem',
      blocks: [
        { type: 'paragraph', html: '<p>[PLACEHOLDER — ecosystem overview]</p>' }
      ]
    },

    // ── § 5 ─ Mission Control ──────────────────────────────────────────────
    // Content intent: the automation layer end-to-end — work maps with typed
    // decision tickets, Linear as tracker of record, the Cockpit desktop
    // harness (Linear panes + embedded Claude terminals + star map;
    // deliberately read-only toward Linear), and session bracketing with
    // memory packs + scheduled auto-close. Needs Max's Windows captures.
    // NOTE: this page needs its own outro sign-off (per-project override) —
    // the shared combat-design line is marked for change on #ai.
    {
      id: 'mission-control',
      label: 'Mission Control',
      type: 'prose',
      title: 'Mission Control',
      blocks: [
        { type: 'paragraph', html: '<p>[PLACEHOLDER — Cockpit + workbench automation]</p>' }
      ]
    }
  ]
};
