/* Threads of God — Phase C v2 schema.
   6 sections: project-overview, combat-puzzle, fight-pacing,
   adaptive-enemy-ai-design, core-systems, resources-used.
   Source-of-truth: ../../index.html (decision-modal briefs ~1836-1869, d01
   2382-2423, d02 2425-2459, d04 2576-2648, tog-stack panels for §§ 6-7).
   Copy ported verbatim from live site — do not rewrite voice here. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.tog = {
  slug: 'tog',
  title: 'Threads of God',
  subtitle: '// Combat Demo · Unreal Engine 5',
  timeline: '3.5 months',
  accent: 'amber',
  summary: 'A solo-built third-person combat demo in UE5. Every boss attack is a layered puzzle — forcing position, timing, and mechanic choice simultaneously to create an opening the player has to earn.',
  tools: ['Unreal Engine 5', 'C++', 'Solo Developer', 'Blueprint', 'Behavior Trees', 'Cascadeur', 'Boss Encounter Design'],
  takeaways: [
    '<span class="bullet-lead">4+ modular core systems authored</span>: Combo (buffered-input), Deflection, Stat & State, Locomotion, DamageTraceSystem. All data-driven and tunable without recompile.',
    '<span class="bullet-lead">100+ attacks designed</span>, edited, implemented, and tested, improving boss readability and combat balance.',
    "<span class=\"bullet-lead\">350+ custom blueprint functions written</span>, spanning 9-directional movement and physics, so the boss's attacks and positioning feel like they're responding to the player.",
    '<span class="bullet-lead">70+ enemy actions routed</span> through a memory-mimicking behavior tree, producing non-repetitive boss behavior.',
    '<span class="bullet-lead">20+ playtests conducted</span>, tuning boss behavior and addressing player annoyances based on feedback data, <span class="bullet-lead">increasing player retention by 20%</span>.',
    '<span class="bullet-lead">Now being remade</span> using the Gameplay Ability System (GAS).'
  ],
  hero: {
    src: '../PortfolioPieces/ThreadsOfGod/clips/tog-hero-loop.mp4',
    poster: '../PortfolioPieces/ThreadsOfGod/clips/tog-hero-poster.jpg'
  },
  thumb: '../PortfolioPieces/ThreadsOfGod/AreliusCircleAttack2.jpg',
  sections: [

    // ── § 1 ─ Project Overview ─────────────────────────────────────────────
    {
      id: 'project-overview',
      label: 'Project Overview',
      type: 'header',
      badges: ['Personal Project — 2025', 'Solo Developer'],
      title: 'Threads / of God',
      subtitle: '// Combat Demo · Unreal Engine 5',
      lead:
        '<p>Threads of God is a <strong>third-person melee combat demo</strong> developed in <strong>UE5</strong>, where players face a <strong>boss that adapts to playstyle weaknesses</strong>, creating split-second tactical swordplay and <strong>momentum-driven exchanges</strong>.</p>' +
        '<p>As the solo developer, I designed the boss\'s <strong>combat puzzles, combat pacing, and adaptive AI</strong>, built the modular combat systems the demo runs on, and <strong>tuned player abilities against boss behaviors</strong> so each pair <strong>matched in difficulty and thematic intent</strong>.</p>',
      takeawaysInline: true,
      featuredVideo: {
        kind: 'youtube',
        youtubeId: 'Cu8Jblk0IRo',
        alt: 'Threads of God — full demo encounter against Arelius'
      },
      images: [
        { src: '../PortfolioPieces/ThreadsOfGod/HighresScreenshot00000.jpg', alt: 'White light trail attack' },
        { src: '../PortfolioPieces/ThreadsOfGod/AreliusCircleAttack1.jpg', alt: 'Circle AOE attack' },
        { src: '../PortfolioPieces/ThreadsOfGod/AreliusGroundSlash.jpg', alt: 'Ground slash barrier' },
        { src: '../PortfolioPieces/ThreadsOfGod/Arelius Pose Attack.jpg', alt: 'Combat at sunset' },
        { src: '../PortfolioPieces/ThreadsOfGod/AreliusWindUpAttack.jpg', alt: 'Wind-up attack' },
        { src: '../PortfolioPieces/ThreadsOfGod/Arelius Launch Attack.jpg', alt: 'Arelius launch attack' },
        { src: '../PortfolioPieces/ThreadsOfGod/AreliusCircleAttack2.jpg', alt: 'Circle attack variant' },
        { src: '../PortfolioPieces/ThreadsOfGod/HighresScreenshot00001.jpg', alt: 'Overhead strike' }
      ]
    },

    // ── § 2 ─ Attacks as a Combat Puzzle ──────────────────────────────────
    {
      id: 'combat-puzzle',
      label: 'Attacks as a Combat Puzzle',
      type: 'pillar',
      title: 'Attacks as a Layered Combat Puzzle',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">Every boss action challenges player mastery: <strong>the harder the challenge the player takes on, the more damage and positional advantage they earn</strong>, both in the moment and across the fight.</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: 'Attack Design',
          body:
            '<p class="dm-lead">Attacks are designed not only to <strong>challenge player mastery</strong>, but to <strong>influence player behavior</strong> into different moment to moment gameplay.</p>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Branching Behavior:</span> Combos are built from <strong>modular attack sequences that branch based on player behavior</strong>, allowing the player to take advantage of boss responses.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Semi Randomized Combo — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/leaping-dive-slam-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/leaping-dive-slam.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Semi Randomized Combo</div>' +
                '</div>' +
                '<div class="di-vfx-note">' +
                  '<div class="di-vfx-title">Attack Order</div>' +
                  '<div class="di-vfx-step">Charged Punch</div>' +
                  '<div class="di-vfx-arrow">↓</div>' +
                  '<div class="di-vfx-step">Crescent Moon Slice</div>' +
                  '<div class="di-vfx-arrow">↓</div>' +
                  '<div class="di-vfx-group">' +
                    '<div class="di-vfx-group-stack">' +
                      '<div class="di-vfx-step">Dash Right</div>' +
                      '<div class="di-vfx-arrow">↓</div>' +
                      '<div class="di-vfx-step">Leaping Jump Attack</div>' +
                    '</div>' +
                    '<div class="di-vfx-group-label">Jump Attack Combo</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Combo Themes:</span> Each combo has a <strong>distinct movement, timing, and attack identity</strong>. Variations in rhythm, trajectory, spacing, and delays <strong>improve readability while maintaining combat variety</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Dash - Jump Attack — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/dash-jump-slice-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/dash-jump-slice.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Dash - Jump Attack</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Phase 2 Thrust Attack Slow — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/dash-in-dive-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/dash-in-dive.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Phase 2 : Thrust Attack (Slow)</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Telegraph Windows:</span> Longer combo structures contain <strong>intentional telegraph, recovery, and transition windows</strong>, giving <strong>players time to</strong> recognize boss actions and <strong>prepare a response</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Phase 2 360 Horizontal Slice — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/shockwave-slam-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/shockwave-slam.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Phase 2 : 360 Horizontal Slice</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Phase 2 Horizontal Slice plus Thrust — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/closing-beam-strike-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/closing-beam-strike.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Phase 2 : Horizontal Slice + Thrust</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Weakness Variety:</span> Some enemy combos create <strong>large punish opportunities</strong>, while others <strong>sustain pressure</strong> with <strong>many small opportunities to interrupt</strong> and deal significant posture damage.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Main Combo : Staggered — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/unarmed-hammer-fist-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/unarmed-hammer-fist.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Main Combo : Staggered</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Phase 2 Downward Slice Mixup Version into Lunge Vertical Slice — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/overhead-slam-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/overhead-slam.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Phase 2 : Downward Slice (Mixup Version) → Lunge Vertical Slice</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Attack Transitions:</span> <strong>Most attacks</strong> and combos have <strong>multiple opening actions</strong> prior to the main attacks. This allows the boss to choose actions that make the <strong>main attacks feel natural</strong>. This has also been applied to exiting attacks.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Main Combo Intro Attack Far Range — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/main-combo-thrust-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/main-combo-thrust.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Main Combo Intro Attack : Far Range</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" aria-label="Main Combo Intro Attack Close Range — combat clip, looping, muted" poster="../PortfolioPieces/ThreadsOfGod/clips/main-combo-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/main-combo.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Main Combo Intro Attack : Close Range</div>' +
                '</div>' +
              '</div>' +
            '</div>'
        },
        {
          type: 'subsection',
          title: 'Set-piece Attacks',
          body:
            '<p class="dm-lead">Set Piece Attacks need <strong>custom programming</strong> the modular systems can’t provide; this combo sequence layers <strong>unique abilities</strong> onto the <strong>boss’s branching behavior</strong> design to drive moment-to-moment decisions.</p>',
          svg:
            '<div class="lc-tree-header">Combo Example Tree</div>' +
            '<div class="lc-tree-subheader">(Sword Throw Combo)</div>' +
            '<div class="lc-tree">' +
              '<svg viewBox="0 0 720 540" class="diag-svg lc-tree-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
                '<defs>' +
                  '<marker id="arrLcTree" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">' +
                    '<path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/>' +
                  '</marker>' +
                '</defs>' +
                '<rect x="280" y="14" width="160" height="40" rx="6" class="box--key"/>' +
                '<text x="360" y="39" text-anchor="middle" class="title">SWORD THROW</text>' +
                '<text x="360" y="68" text-anchor="middle" class="text-xs">player-response branches</text>' +
                '<line x1="360" y1="78" x2="360" y2="100" class="arrow"/>' +
                '<line x1="120" y1="100" x2="600" y2="100" class="arrow"/>' +
                '<line x1="120" y1="100" x2="120" y2="118" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="360" y1="100" x2="360" y2="118" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="600" y1="100" x2="600" y2="118" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<text x="120" y="134" text-anchor="middle" class="label">HIT</text>' +
                '<text x="360" y="134" text-anchor="middle" class="label">BLOCK</text>' +
                '<text x="600" y="134" text-anchor="middle" class="label">DODGE</text>' +
                '<rect x="20" y="148" width="200" height="138" rx="6" class="box"/>' +
                '<rect x="260" y="148" width="200" height="138" rx="6" class="box"/>' +
                '<rect x="500" y="148" width="200" height="46" rx="6" class="box--key"/>' +
                '<text x="600" y="176" text-anchor="middle" class="title">DODGE</text>' +
                '<text x="600" y="210" text-anchor="middle" class="text-xs">3 sub-outcomes by timing</text>' +
                '<line x1="600" y1="194" x2="600" y2="320" class="arrow"/>' +
                '<line x1="120" y1="320" x2="600" y2="320" class="arrow"/>' +
                '<line x1="120" y1="320" x2="120" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="360" y1="320" x2="360" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="600" y1="320" x2="600" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<text x="120" y="354" text-anchor="middle" class="label">HIT</text>' +
                '<text x="360" y="354" text-anchor="middle" class="label">DEFLECT LAYERING</text>' +
                '<text x="600" y="354" text-anchor="middle" class="label">TRIPLE DODGE</text>' +
                '<rect x="20" y="368" width="200" height="138" rx="6" class="box"/>' +
                '<rect x="260" y="368" width="200" height="138" rx="6" class="box"/>' +
                '<rect x="500" y="368" width="200" height="138" rx="6" class="box"/>' +
              '</svg>' +
              '<video class="lc-tree-leaf lc-tree-leaf--hit"    autoplay loop muted playsinline preload="metadata">' +
                '<source src="../PortfolioPieces/ThreadsOfGod/Combat Clips/SwordRipped.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--block"  autoplay loop muted playsinline preload="metadata">' +
                '<source src="../PortfolioPieces/ThreadsOfGod/Combat Clips/BossAttack-Blocked-SwordLaunched.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--caught" autoplay loop muted playsinline preload="metadata">' +
                '<source src="../PortfolioPieces/ThreadsOfGod/Combat Clips/Dodged-Hit.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--parry"  autoplay loop muted playsinline preload="metadata">' +
                '<source src="../PortfolioPieces/ThreadsOfGod/Combat Clips/Dodged-Parried-Parried.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--triple" autoplay loop muted playsinline preload="metadata">' +
                '<source src="../PortfolioPieces/ThreadsOfGod/Combat Clips/Dodge-dodge-dodge-V6.mp4" type="video/mp4">' +
              '</video>' +
            '</div>'
        }
      ]
    },

    // ── § 3 ─ Regulating Fight Pacing ─────────────────────────────────────
    {
      id: 'fight-pacing',
      label: 'Regulating Fight Pacing',
      type: 'pillar',
      title: 'Regulating Fight Pacing',
      brief:
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text"><strong>Control the pace of a fight while still allowing player agency.</strong></span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          body:
            '<p class="dm-lead">The fight was designed around <strong>contested pace control,</strong> where both the player and the boss <strong>compete to establish momentum</strong> throughout the encounter.</p>' +
            '<p>Three levers govern that contest, shuttling momentum between the boss and the player:</p>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">AI Momentum Flips:</span> After sustained player aggression, the boss counterattacks, <strong>allowing the AI to initiate its own combo, setting the pace</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/dashback-strong-thrust-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/dashback-strong-thrust.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Perfect Counter : Dodgeback Thrust (Quick)</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/jump-attack-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/jump-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Perfect Counter : Jump Attack</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Player Momentum Flips:</span> Every attack contains weaknesses that <strong>allow skilled players to seize control by anticipating and responding correctly</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/deflect-crescent-moon-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/deflect-crescent-moon.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Crescent Moon Lunge : Interrupt</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/counter-punch-thrust-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/counter-punch-thrust.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Parry</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Pace Control:</span> The AI uses spacing actions to <strong>create breathing room, lowering the pace</strong>, or <strong>closes the distance quickly, increasing the pace</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/dodgeback-jump-attack-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/dodgeback-jump-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Boss retreats to reclaim space, then re-engages with a leaping slam</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/jumpback-aerial-attack-poster.jpg">' +
                    '<source src="../PortfolioPieces/ThreadsOfGod/clips/jumpback-aerial-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Aerial Ranged Attack</div>' +
                '</div>' +
              '</div>' +
              '<p class="di-bullet-note">Note: other forms of pace control are implemented as well, including Extended Telegraphs, Extended Cooldowns, staggering, and attacks that — when blocked by the player — initiate a "' +
                '<span class="preview-trigger" title="Phase 2 : 360 Horizontal Slice">blowback animation' +
                  '<span class="preview-popup" aria-hidden="true">' +
                    '<video loop muted playsinline preload="metadata" poster="../PortfolioPieces/ThreadsOfGod/clips/shockwave-slam-poster.jpg">' +
                      '<source src="../PortfolioPieces/ThreadsOfGod/clips/shockwave-slam.mp4" type="video/mp4">' +
                    '</video>' +
                    '<span class="preview-popup-caption">Phase 2 : 360 Horizontal Slice</span>' +
                  '</span>' +
                '</span>' +
              '" which resets the pace.</p>' +
            '</div>'
        }
      ]
    },

    // ── § 4 ─ Adaptive Enemy AI Design ───────────────────────────────────────────
    {
      id: 'adaptive-enemy-ai-design',
      label: 'Adaptive Enemy AI Design',
      type: 'prose',
      title: 'Adaptive Enemy AI Design',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<div class="proj-eyebrow">// 04 — Probability Architecture</div>' +
            '<p class="lead">The boss has to <strong>behave intelligently, not as a memorizable pattern</strong>, so every exchange with the player reshapes which action he picks next.</p>' +
            '<ul class="tog-runtime-rules">' +
              '<li>Each attack lives in a competing branch; when an action is chosen, <strong>chance, points / sum of entire branch</strong>.</li>' +
              '<li><strong>Unchosen actions gain points; the chosen action\'s points are set to zero</strong>.</li>' +
              '<li><strong>The longer an action isn\'t chosen</strong> the larger amount of points accumulated, <strong>increasing the likelihood that it will occur soon</strong>.</li>' +
              '<li>A per-attack effectiveness modifier (clamped 0.7–1.3) <strong>increases on hit, decreases on miss/block, is unchanged on deflect</strong>, so successful actions occur more frequently.</li>' +
            '</ul>' +

            '<div class="eq-block">' +
              '<div class="eq-label">// Selection Probability</div>' +
              '<div class="eq-row">' +
                '<span class="eq-lhs"><em>P<sub>i+1</sub></em></span>' +
                '<span class="eq-op">=</span>' +
                '<span class="eq-fraction">' +
                  '<span class="eq-num"><em>P<sub>i</sub></em></span>' +
                  '<span class="eq-den">' +
                    '<span class="eq-sigma">Σ</span>' +
                    '<span class="eq-bounds"><sup><em>n</em></sup><sub><em>j</em>=1</sub></span>' +
                    '<em>P<sub>j</sub></em>' +
                  '</span>' +
                '</span>' +
              '</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// Point Accumulation (attack <em>i</em> not selected at decision)</div>' +
              '<div class="eq-row">' +
                '<em>P<sub>i+1</sub></em>' +
                '<span class="eq-op">=</span>' +
                '<em>P<sub>i</sub></em> + <em>m<sub>i</sub></em> · <em>W<sub>i</sub></em>' +
              '</div>' +
              '<div class="eq-note"><em>m<sub>i</sub></em> ∈ [0.7, 1.3]  ·  P<sub>i</sub>(init) = 1</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Action Chosen</div>' +
              '<div class="eq-row"><em>P<sub>i</sub></em> <span class="eq-op">=</span> 0</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Successful Hit</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">=</span> clamp(<em>m<sub>i</sub></em> + Δ<em>m</em>,  0.7,  1.3)</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Miss or Block</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">=</span> clamp(<em>m<sub>i</sub></em> − Δ<em>m</em>,  0.7,  1.3)</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Deflect</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">unchanged</span></div>' +
            '</div>' +

            '<div class="eq-legend">' +
              '<div><em>P<sub>i</sub></em> — accumulated points for attack <em>i</em>; initialized at 1, updated only on attack result</div>' +
              '<div><em>n</em> — total attacks in the branch</div>' +
              '<div><em>m<sub>i</sub></em> — effectiveness modifier; clamped to [0.7, 1.3]; rises on hit, falls on miss/block, untouched on deflect</div>' +
              '<div><em>W<sub>i</sub></em> — The action\'s Weight Constant. This is the constant amount of points added prior to <em>m<sub>i</sub></em>. Used to more broadly impact an action\'s chance of occurring.</div>' +
              '<div><em>P<sub>i</sub></em> = 0 — resets on action chosen; enforces a cooldown before the attack can re-accumulate</div>' +
            '</div>' +

            '<div class="diag-wrap">' +
              '<div class="diag-label">// Per-Decision Flow</div>' +
              '<svg viewBox="0 0 1080 580" class="diag-svg" xmlns="http://www.w3.org/2000/svg">' +
                '<defs>' +
                  '<marker id="arrV2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#2eb8cc"/></marker>' +
                '</defs>' +
                '<rect x="440" y="20" width="160" height="40" rx="6" class="box--key"/>' +
                '<text x="520" y="45" text-anchor="middle" class="title">DECISION TICK</text>' +
                '<text x="240" y="44" text-anchor="end" class="note">fires when the BT requests an attack</text>' +
                '<line x1="520" y1="60" x2="520" y2="84" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="400" y="86" width="240" height="36" rx="6" class="box"/>' +
                '<text x="520" y="109" text-anchor="middle" class="text">if cooldown active → fail</text>' +
                '<text x="240" y="109" text-anchor="end" class="note">filters cooled-down attacks</text>' +
                '<line x1="520" y1="122" x2="520" y2="146" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="400" y="148" width="240" height="58" rx="6" class="box"/>' +
                '<text x="520" y="170" text-anchor="middle" class="text">P(i) = P<tspan baseline-shift="sub" font-size="70%">i</tspan> / ΣP<tspan baseline-shift="sub" font-size="70%">j</tspan></text>' +
                '<text x="520" y="190" text-anchor="middle" class="text">roll → select attack</text>' +
                '<text x="240" y="172" text-anchor="end" class="note">weighted random over current points</text>' +
                '<text x="240" y="188" text-anchor="end" class="text-xs">biased but never deterministic</text>' +
                '<line x1="520" y1="206" x2="520" y2="230" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="440" y="232" width="160" height="40" rx="6" class="box--key"/>' +
                '<text x="520" y="257" text-anchor="middle" class="title">FIRE</text>' +
                '<text x="240" y="248" text-anchor="end" class="note">boss commits — chosen attack’s P</text>' +
                '<text x="240" y="262" text-anchor="end" class="text-xs">resets regardless of outcome</text>' +
                '<line x1="520" y1="272" x2="520" y2="296" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="440" y="298" width="160" height="40" rx="6" class="box--key"/>' +
                '<text x="520" y="323" text-anchor="middle" class="title">OUTCOME</text>' +
                '<text x="240" y="314" text-anchor="end" class="note">the player’s response routes</text>' +
                '<text x="240" y="328" text-anchor="end" class="text-xs">the next modifier update</text>' +
                '<line x1="520" y1="338" x2="520" y2="352" class="arrow"/>' +
                '<line x1="340" y1="352" x2="700" y2="352" class="arrow"/>' +
                '<line x1="340" y1="352" x2="340" y2="364" class="arrow" marker-end="url(#arrV2)"/>' +
                '<line x1="520" y1="352" x2="520" y2="364" class="arrow" marker-end="url(#arrV2)"/>' +
                '<line x1="700" y1="352" x2="700" y2="364" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="260" y="364" width="160" height="84" rx="6" class="box"/>' +
                '<text x="340" y="384" text-anchor="middle" class="label">HIT</text>' +
                '<text x="340" y="406" text-anchor="middle" class="text">m ↑</text>' +
                '<text x="340" y="424" text-anchor="middle" class="text">P = 0</text>' +
                '<text x="340" y="440" text-anchor="middle" class="text-xs">+ start cooldown task</text>' +
                '<rect x="440" y="364" width="160" height="84" rx="6" class="box"/>' +
                '<text x="520" y="384" text-anchor="middle" class="label">MISS / BLOCK</text>' +
                '<text x="520" y="406" text-anchor="middle" class="text">m ↓</text>' +
                '<text x="520" y="424" text-anchor="middle" class="text">P = 0</text>' +
                '<text x="520" y="440" text-anchor="middle" class="text-xs">+ start cooldown task</text>' +
                '<rect x="620" y="364" width="160" height="84" rx="6" class="box"/>' +
                '<text x="700" y="384" text-anchor="middle" class="label">DEFLECT</text>' +
                '<text x="700" y="406" text-anchor="middle" class="text">m unchanged</text>' +
                '<text x="700" y="424" text-anchor="middle" class="text">P = 0</text>' +
                '<text x="700" y="440" text-anchor="middle" class="text-xs">+ start cooldown task</text>' +
                '<line x1="340" y1="448" x2="340" y2="468" class="arrow"/>' +
                '<line x1="520" y1="448" x2="520" y2="468" class="arrow"/>' +
                '<line x1="700" y1="448" x2="700" y2="468" class="arrow"/>' +
                '<line x1="340" y1="468" x2="700" y2="468" class="arrow"/>' +
                '<line x1="520" y1="468" x2="520" y2="480" class="arrow" marker-end="url(#arrV2)"/>' +
                '<rect x="380" y="482" width="280" height="58" rx="6" class="box"/>' +
                '<text x="520" y="502" text-anchor="middle" class="label">FOR EACH ATTACK i IN BRANCH</text>' +
                '<text x="520" y="524" text-anchor="middle" class="text">P<tspan baseline-shift="sub" font-size="70%">i</tspan> ← P<tspan baseline-shift="sub" font-size="70%">i</tspan> + 1 · m<tspan baseline-shift="sub" font-size="70%">i</tspan> · w(H<tspan baseline-shift="sub" font-size="70%">i</tspan>)</text>' +
                '<text x="240" y="506" text-anchor="end" class="note">attacks accumulate points</text>' +
                '<text x="240" y="522" text-anchor="end" class="text-xs">modifier scales gain rate</text>' +
                '<path d="M 660 511 L 810 511 L 810 40 L 600 40" fill="none" class="arrow arrow--dashed" marker-end="url(#arrV2)"/>' +
                '<text x="824" y="275" text-anchor="middle" class="text-xs" style="letter-spacing:2px;" transform="rotate(-90, 824, 275)">NEXT TICK</text>' +
              '</svg>' +
              '<div class="diag-caption">' +
                'Per-decision flow with functional annotations. Notes sit on the left of the central column. The cycle ends in point accumulation before the next decision tick.' +
              '</div>' +
            '</div>' +

            '<p><strong>For a chosen action, points only change when an attack result is evaluated.</strong> ' +
            'A deflect leaves the modifier untouched: <strong>the player executed at the highest level, and the system doesn’t penalize the boss for it</strong>. ' +
            'Blocks and misses pull the modifier down, so <strong>attacks that aren’t connecting accumulate slower and naturally fall back in the distribution</strong>.</p>' +

            '<p><strong>The system only runs on the combat tree.</strong> Thematic actions and crescendo moments that define the fight’s emotional arc are <strong>hard-coded to fire reliably</strong>. ' +
            'The defensive tree carries no point system at all, and a weighted distribution led to a less crafted experience.</p>' +

            '<p>Where the system has the most impact is on <strong>ranged attacks and gap-closers</strong>. ' +
            'As the distribution shifts, the fight’s rhythm changes, <strong>trading close-quarters pressure for a cat-and-mouse dynamic</strong> of weaving through ranged attacks to find an opening on an unguarded enemy.</p>'
        }
      ]
    },

    // ── § 5 ─ Core Systems ─────────────────────────────────────────────────
    {
      id: 'core-systems',
      label: 'Core Systems',
      type: 'prose',
      title: 'Core Systems',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<div class="proj-eyebrow">// 05 — Modular Foundations</div>' +
            '<div class="systems-grid">' +
              '<div class="system-card">' +
                '<span class="sys-icon">⚡</span>' +
                '<h4>Combo System</h4>' +
                '<p><strong>Chained light and heavy sequences with movement-adaptive inputs</strong>, built to stay readable as project complexity grows.</p>' +
              '</div>' +
              '<div class="system-card">' +
                '<span class="sys-icon">🛡</span>' +
                '<h4>Deflection System</h4>' +
                '<p>A normal block becomes a deflect when <strong>timed to land just before the attack hits</strong>. Designated enemy attacks add a <strong>layered QTE that resolves into counter sequences and finisher states</strong>.</p>' +
              '</div>' +
              '<div class="system-card">' +
                '<span class="sys-icon">🔄</span>' +
                '<h4>Stat &amp; State System</h4>' +
                '<p><strong>Data-driven attribute tables</strong> govern hit reactions and stagger thresholds — all exposed via data assets for <strong>tuning without recompiling</strong>.</p>' +
              '</div>' +
              '<div class="system-card">' +
                '<span class="sys-icon">🏃</span>' +
                '<h4>Locomotion System</h4>' +
                '<p><strong>8-directional state machine</strong> driven by speed, angle, and weapon stance. Covers guard strafe, aim locomotion, and multi-tier landings — <strong>blended with motion matching, orientation warping, and procedural foot IK</strong>.</p>' +
              '</div>' +
            '</div>'
        }
      ]
    },

    // ── § 6 ─ Resources Used ─────────────────────────────────────────────
    // Pack names sourced from the TOG project .gitignore (third-party Marketplace
    // content excluded from git). Author attributions verified via web search
    // against UE Marketplace / Fab listings; flagged TBD where ambiguous.
    {
      id: 'resources-used',
      label: 'Resources Used',
      type: 'prose',
      title: 'Resources Used',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<div class="proj-eyebrow">// 06 — Credits &amp; Attribution</div>' +
            '<p class="lead">Resources used in making this demo. Without such a talented and giving community, none of this would have been possible. Thank you!</p>' +
            '<p><strong>Only Animation files were used from these Animation packs.</strong> Raw Animations were minorly edited; however, their <strong>movements, timings, and pairings were heavily edited</strong>. VFX\'s timings and scale were minorly edited.</p>' +
            '<div class="resource-group">' +
              '<h4>Animation Packs</h4>' +
              '<ul class="resource-list">' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/sword-animset-pro" target="_blank" rel="noopener"><strong>Sword Animset Pro</strong></a> <span class="resource-author">— Kubold</span></span><span class="resource-role">Boss Animations + Player Dodge</span></li>' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/essential-sword-shield-animations" target="_blank" rel="noopener"><strong>Essential Sword &amp; Shield Animation Pack</strong></a> <span class="resource-author">— space.bar.anim</span></span><span class="resource-role">Player Animations</span></li>' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/ghostsamurai-bundle" target="_blank" rel="noopener"><strong>GhostSamurai Bundle</strong></a> <span class="resource-author">— WM Animset</span></span><span class="resource-role">Boss Animations + QTE Animations</span></li>' +
              '</ul>' +
            '</div>' +
            '<div class="resource-group">' +
              '<h4>VFX Packs</h4>' +
              '<ul class="resource-list">' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/blink-and-dash-vfx" target="_blank" rel="noopener"><strong>Blink and Dash VFX</strong></a> <span class="resource-author">— pelengami</span></span><span class="resource-role">Boss Animations</span></li>' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/realistic-starter-vfx-pack-vol" target="_blank" rel="noopener"><strong>Realistic Starter VFX Pack Vol 2</strong></a> <span class="resource-author">— Anton Pasichnyk</span></span><span class="resource-role">Player + Boss Animations</span></li>' +
              '</ul>' +
            '</div>' +
            '<div class="resource-group">' +
              '<h4>Free Epic Games Content</h4>' +
              '<ul class="resource-list">' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/en-US/paragon" target="_blank" rel="noopener"><strong>Paragon: Gideon, Sparrow, Feng Mao</strong></a> <span class="resource-author">— Epic Games</span></span><span class="resource-role">Boss Animations</span></li>' +
                '<li><span class="resource-main"><strong>Starter Content</strong> <span class="resource-author">— Epic Games</span></span></li>' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/a36bac8b05004e999dd4b1d332501f49" target="_blank" rel="noopener"><strong>FX Variety Pack</strong></a> <span class="resource-author">— Kakky (free permanent collection)</span></span></li>' +
                '<li><span class="resource-main"><a href="https://www.unrealengine.com/marketplace/en-US/product/rocket-thruster-exhaust-fx" target="_blank" rel="noopener"><strong>Rocket Thruster Exhaust FX</strong></a> <span class="resource-author">— Shogun Games (free permanent collection)</span></span><span class="resource-role">Boss Animations (2nd Phase)</span></li>' +
              '</ul>' +
            '</div>'
        }
      ]
    },
  ]
};
