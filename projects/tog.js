/* Threads of God — Phase C v2 schema.
   7 sections: project-overview, screenshots, combat-puzzle, fight-pacing,
   adaptive-enemy-ai-design, core-systems, boss-ai-arelius.
   Source-of-truth: ../../index.html (decision-modal briefs ~1836-1869, d01
   2382-2423, d02 2425-2459, d04 2576-2648, tog-stack panels for §§ 6-7).
   Copy ported verbatim from live site — do not rewrite voice here. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.tog = {
  slug: 'tog',
  title: 'Threads of God',
  subtitle: '// Combat Demo · Unreal Engine 5',
  accent: 'amber',
  summary: 'A solo-built third-person combat demo in UE5. Every boss attack is a layered puzzle — forcing position, timing, and mechanic choice simultaneously to create an opening the player has to earn.',
  tools: ['Unreal Engine 5', 'C++', 'Solo Developer', 'Blueprint', 'Behavior Trees', 'Cascadeur', 'Boss Encounter Design'],
  takeaways: [
    '<span class="bullet-lead">4+ modular core systems authored</span>: Combo (buffered-input), Deflection, Stat & State, Locomotion, DamageTraceSystem. All data-driven and tunable without recompile.',
    '<span class="bullet-lead">100+ attacks designed</span>, edited, and implemented across multiple communicating behavior trees.',
    "<span class=\"bullet-lead\">350+ custom blueprint functions written</span>, spanning 9-directional movement and physics, so the boss's attacks and positioning feel like they're responding to the player.",
    '<span class="bullet-lead">70+ enemy actions routed</span> through a memory-mimicking behavior tree, producing non-repetitive boss behavior.',
    '<span class="bullet-lead">20+ playtests conducted</span>, tuning boss behavior and addressing player annoyances based on feedback data, <span class="bullet-lead">increasing player retention by 40%</span>.'
  ],
  hero: {
    src: './PortfolioPieces/ThreadsOfGod/clips/tog-hero-loop.mp4',
    poster: './PortfolioPieces/ThreadsOfGod/clips/tog-hero-poster.jpg'
  },
  thumb: './PortfolioPieces/ThreadsOfGod/AreliusCircleAttack2.jpg',
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
        '<p>Threads of God is a <strong>third-person melee combat demo</strong> developed in UE5, where players face a <strong>boss that adapts to their playstyles weaknesses</strong>, creating split-second tactical swordplay and momentum-driven exchanges. ' +
        'As the solo developer, I designed the boss\'s <strong>combat puzzles, combat pacing, and adaptive AI</strong>, built the modular combat systems the demo runs on, and <strong>tuned player abilities against boss behaviors</strong> so each pair matched in difficulty and thematic intent.</p>',
      takeawaysInline: true,
      featuredVideo: {
        kind: 'youtube',
        youtubeId: 'Cu8Jblk0IRo',
        alt: 'Threads of God — full demo encounter against Arelius'
      },
      images: [
        { src: './PortfolioPieces/ThreadsOfGod/HighresScreenshot00000.jpg', alt: 'White light trail attack' },
        { src: './PortfolioPieces/ThreadsOfGod/AreliusCircleAttack1.jpg', alt: 'Circle AOE attack' },
        { src: './PortfolioPieces/ThreadsOfGod/AreliusGroundSlash.jpg', alt: 'Ground slash barrier' },
        { src: './PortfolioPieces/ThreadsOfGod/Arelius Pose Attack.jpg', alt: 'Combat at sunset' },
        { src: './PortfolioPieces/ThreadsOfGod/AreliusWindUpAttack.jpg', alt: 'Wind-up attack' },
        { src: './PortfolioPieces/ThreadsOfGod/Arelius Launch Attack.jpg', alt: 'Arelius launch attack' },
        { src: './PortfolioPieces/ThreadsOfGod/AreliusCircleAttack2.jpg', alt: 'Circle attack variant' },
        { src: './PortfolioPieces/ThreadsOfGod/HighresScreenshot00001.jpg', alt: 'Overhead strike' }
      ]
    },

    // ── § 2 ─ Attacks as a Combat Puzzle ──────────────────────────────────
    {
      id: 'combat-puzzle',
      label: 'Attacks as a Combat Puzzle',
      type: 'pillar',
      title: 'Attacks as a Layered Combat Puzzle',
      brief:
        '<p><strong>Attacks that don’t alter how the player acts quickly lose meaning as challenges.</strong> ' +
        'In TOG, each attack introduces a <strong>distinct challenge — on positioning, timing, or blocking</strong> — and, ' +
        'when handled correctly, <strong>creates a clear opening as its payoff</strong>.</p>' +
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text">Every boss action, single or chained, challenges player mastery: <strong>the harder the challenge the player takes on, the more damage and positional advantage they earn</strong>, both in the moment and across the fight.</span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          title: 'Attack Design',
          body:
            '<p class="dm-lead">Attacks are designed not only to <strong>challenge player mastery</strong>, but to <strong>influence player behavior</strong> into different moment to moment gameplay.</p>' +
            '<ul class="dm-bullets">' +
              '<li><span class="bullet-lead">Branching Behavior:</span> Combos are built from <strong>modular attack sequences that branch based on player behavior</strong>, allowing the player to take advantage of boss responses.</li>' +
              '<li><span class="bullet-lead">Combo Themes:</span> Each combo has a <strong>distinct movement, timing, and attack identity</strong>. Variations in rhythm, trajectory, spacing, and delays improve readability while maintaining combat variety.</li>' +
              '<li><span class="bullet-lead">Telegraph Windows:</span> Longer combo structures contain <strong>intentional telegraph, recovery, and transition windows</strong>, giving <strong>players time</strong> to recognize boss actions and <strong>prepare a response</strong>.</li>' +
              '<li><span class="bullet-lead">Weakness Variance:</span> Some enemy combos create <strong>large punish opportunities</strong>, while others <strong>sustain prolonged pressure with many small opportunities to interrupt</strong>.</li>' +
            '</ul>',
          media: [
            {
              kind: 'video',
              src: './PortfolioPieces/ThreadsOfGod/clips/extended-exchange.mp4',
              poster: './PortfolioPieces/ThreadsOfGod/clips/extended-exchange-poster.jpg',
              caption: 'Extended Exchange'
            },
            {
              kind: 'video',
              src: './PortfolioPieces/ThreadsOfGod/clips/overhead-slam.mp4',
              poster: './PortfolioPieces/ThreadsOfGod/clips/overhead-slam-poster.jpg',
              caption: 'Overhead Slam'
            }
          ]
        },
        {
          type: 'subsection',
          title: 'Set-piece Attacks',
          body:
            '<p class="dm-lead">Set Piece Attacks need <strong>custom programming the modular systems can’t provide</strong>; this combo sequence <strong>layers unique abilities onto the boss’s branching behavior design</strong> to drive moment-to-moment decisions.</p>',
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
                '<text x="120" y="306" text-anchor="middle" class="text-sm">QTE — sword ripped</text>' +
                '<rect x="260" y="148" width="200" height="138" rx="6" class="box"/>' +
                '<text x="360" y="306" text-anchor="middle" class="text-sm">block → sword launched</text>' +
                '<rect x="500" y="148" width="200" height="46" rx="6" class="box--key"/>' +
                '<text x="600" y="176" text-anchor="middle" class="title">DODGE</text>' +
                '<text x="600" y="210" text-anchor="middle" class="text-xs">3 sub-outcomes by timing</text>' +
                '<line x1="600" y1="194" x2="600" y2="320" class="arrow"/>' +
                '<line x1="120" y1="320" x2="600" y2="320" class="arrow"/>' +
                '<line x1="120" y1="320" x2="120" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="360" y1="320" x2="360" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<line x1="600" y1="320" x2="600" y2="338" class="arrow" marker-end="url(#arrLcTree)"/>' +
                '<text x="120" y="354" text-anchor="middle" class="label">CAUGHT</text>' +
                '<text x="360" y="354" text-anchor="middle" class="label">DEFLECT LAYERING</text>' +
                '<text x="600" y="354" text-anchor="middle" class="label">TRIPLE DODGE</text>' +
                '<rect x="20" y="368" width="200" height="138" rx="6" class="box"/>' +
                '<text x="120" y="524" text-anchor="middle" class="text-sm">dodge → caught</text>' +
                '<rect x="260" y="368" width="200" height="138" rx="6" class="box"/>' +
                '<text x="360" y="524" text-anchor="middle" class="text-sm">dodge → deflect layering</text>' +
                '<rect x="500" y="368" width="200" height="138" rx="6" class="box"/>' +
                '<text x="600" y="524" text-anchor="middle" class="text-sm">triple dodge</text>' +
              '</svg>' +
              '<video class="lc-tree-leaf lc-tree-leaf--hit"    autoplay loop muted playsinline preload="metadata">' +
                '<source src="./PortfolioPieces/ThreadsOfGod/Combat Clips/SwordRipped.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--block"  autoplay loop muted playsinline preload="metadata">' +
                '<source src="./PortfolioPieces/ThreadsOfGod/Combat Clips/BossAttack-Blocked-SwordLaunched.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--caught" autoplay loop muted playsinline preload="metadata">' +
                '<source src="./PortfolioPieces/ThreadsOfGod/Combat Clips/Dodged-Hit.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--parry"  autoplay loop muted playsinline preload="metadata">' +
                '<source src="./PortfolioPieces/ThreadsOfGod/Combat Clips/Dodged-Parried-Parried.mp4" type="video/mp4">' +
              '</video>' +
              '<video class="lc-tree-leaf lc-tree-leaf--triple" autoplay loop muted playsinline preload="metadata">' +
                '<source src="./PortfolioPieces/ThreadsOfGod/Combat Clips/Dodge-dodge-dodge-V6.mp4" type="video/mp4">' +
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
        '<p>TOG regulates pace through <strong>pressure-response</strong>: sustained player aggression triggers ' +
        'Arelius’s defensive tree, which <strong>catches a swing with a deflect and stuns the player mid-combo</strong>.</p>' +
        '<div class="dm-tldr">' +
          '<span class="dm-tldr-tag">Goal</span>' +
          '<span class="dm-tldr-text"><strong>Control the pace of a fight while still allowing player agency.</strong></span>' +
        '</div>',
      blocks: [
        {
          type: 'subsection',
          body:
            '<p class="dm-lead">The fight was designed around <strong>contested pace control, where both the player and the boss compete to establish momentum</strong> throughout the encounter.</p>' +
            '<p>Four levers govern that contest, shuttling momentum between the boss and the player:</p>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">AI Momentum Flips:</span> After sustained player aggression, the boss counterattacks, <strong>allowing the AI to initiate its own combo, setting the pace</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/dashback-strong-thrust-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/dashback-strong-thrust.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">DashBack · StrongThrustAttack</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/jump-attack-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/jump-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">JumpAttack</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Player Momentum Flips:</span> Every attack contains weaknesses that <strong>allow skilled players to seize control by anticipating and responding correctly</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/deflect-crescent-moon-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/deflect-crescent-moon.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Deflect · CrescentMoonLunge-PerfectPlayerDeflects</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/counter-punch-thrust-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/counter-punch-thrust.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">CounterPunch · StrongThrustAttack-V2</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Pace Control:</span> The AI uses spacing actions to <strong>create breathing room, lowering the pace</strong>, or <strong>closes the distance quickly, increasing the pace</strong>.</p>' +
              '<div class="di-clips-row">' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/dodgeback-jump-attack-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/dodgeback-jump-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">Boss retreats to reclaim space, then re-engages with a leaping slam</div>' +
                '</div>' +
                '<div class="dm-figure">' +
                  '<video autoplay loop muted playsinline preload="metadata" poster="./PortfolioPieces/ThreadsOfGod/clips/jumpback-aerial-attack-poster.jpg">' +
                    '<source src="./PortfolioPieces/ThreadsOfGod/clips/jumpback-aerial-attack.mp4" type="video/mp4">' +
                  '</video>' +
                  '<div class="dm-figcaption">JumpBackAerial · JumpBackAerialAttack</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="di-bullet">' +
              '<p class="di-bullet-text"><span class="bullet-lead">Dynamic AI Behavior:</span> AI gathers data, <strong>changing the chance it chooses an action based on past player behavior</strong>. For more on the probability system, jump to <a href="#tog#adaptive-enemy-ai-design">Adaptive Enemy AI Design</a>.</p>' +
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
            '<div class="proj-eyebrow">// 03 — Probability Architecture</div>' +
            '<p class="lead">The boss has to <strong>behave intelligently, not as a memorizable pattern</strong>, so every exchange reshapes which action he picks next.</p>' +
            '<ul class="tog-runtime-rules">' +
              '<li>Each attack lives in a competing branch; when the boss reaches for one, it <strong>rolls a weighted random across the branch’s current point distribution</strong>.</li>' +
              '<li>Every attack passed over gains points, so <strong>the longer it sits unused, the higher its chance of being picked next</strong>.</li>' +
              '<li>On fire, the chosen attack’s points reset to zero and a separate cooldown task locks it out, so <strong>the same move never fires twice in a row</strong>.</li>' +
              '<li>A per-attack effectiveness modifier (clamped 0.7–1.3) <strong>climbs on hit, drops on miss/block, holds on deflect</strong>, so the boss leans into what’s working.</li>' +
            '</ul>' +

            '<div class="eq-block">' +
              '<div class="eq-label">// Selection Probability</div>' +
              '<div class="eq-row">' +
                '<span class="eq-lhs"><em>P</em>(<em>i</em>)</span>' +
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
                '<em>P<sub>i</sub></em>' +
                '<span class="eq-op">←</span>' +
                '<em>P<sub>i</sub></em> + 1 · <em>m<sub>i</sub></em> · <em>w</em>(<em>H<sub>i</sub></em>)' +
              '</div>' +
              '<div class="eq-note">base = 1  ·  <em>m<sub>i</sub></em> ∈ [0.7, 1.3]  ·  P<sub>i</sub>(init) = 0</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Successful Hit</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">←</span> clamp(<em>m<sub>i</sub></em> + Δ<em>m</em>,  0.7,  1.3)</div>' +
              '<div class="eq-row"><em>P<sub>i</sub></em> <span class="eq-op">←</span> 0</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Miss or Block</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">←</span> clamp(<em>m<sub>i</sub></em> − Δ<em>m</em>,  0.7,  1.3)</div>' +

              '<div class="eq-sep"></div>' +
              '<div class="eq-label">// On Deflect</div>' +
              '<div class="eq-row"><em>m<sub>i</sub></em> <span class="eq-op">unchanged</span></div>' +
            '</div>' +

            '<div class="eq-legend">' +
              '<div><em>P<sub>i</sub></em> — accumulated points for attack <em>i</em>; initialized at 0, updated only on attack result</div>' +
              '<div><em>n</em> — total attacks in the branch</div>' +
              '<div><em>m<sub>i</sub></em> — effectiveness modifier; clamped to [0.7, 1.3]; rises on hit, falls on miss/block, untouched on deflect</div>' +
              '<div><em>w(H<sub>i</sub>)</em> — hit weight; scales points added based on whether the attack would connect</div>' +
              '<div><em>P<sub>i</sub></em> ← 0 — reset on successful hit; enforces cooldown before the attack can re-accumulate</div>' +
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

            '<p><strong>Points only move when an attack result is evaluated — not on a timer.</strong> ' +
            'A deflect leaves the modifier untouched: <strong>the player executed at the highest level, and the system doesn’t penalize the boss for it</strong>. ' +
            'Blocks and misses pull the modifier down, so <strong>attacks that aren’t connecting accumulate slower and naturally fall back in the distribution</strong>.</p>' +

            '<p><strong>The system only runs on the combat tree.</strong> Narrative attacks — phase openers and crescendo moments that define the fight’s emotional arc — are <strong>hard-coded to fire reliably</strong>. ' +
            'The defensive tree carries no point system at all: <strong>those exchanges need to feel like the player is barely surviving</strong>, and a weighted distribution would undercut that pressure.</p>' +

            '<p>Where the system has the most impact is on <strong>ranged attacks and gap-closers</strong>. ' +
            'As the distribution shifts, the fight’s rhythm changes — <strong>trading close-quarters pressure for a cat-and-mouse dynamic</strong> of weaving through ranged attacks to find an opening on an unguarded enemy. <strong>The same boss, a different fight.</strong></p>' +

            '<p class="footnote">// System architected in BPC_Attacks_TOG — full implementation scoped for a future build.</p>'
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
            '<div class="proj-eyebrow">// 02 — Modular Foundations</div>' +
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
                '<p><strong>8-directional state machine</strong> driven by speed, angle, and weapon stance. Covers guard strafe, aim locomotion, and multi-tier landings — <strong>blended with orientation warping and procedural foot IK</strong>.</p>' +
              '</div>' +
            '</div>'
        }
      ]
    },

    // ── § 6 ─ Boss AI — Arelius ────────────────────────────────────────────
    // NOTE: Boss AI tag chips were buttons with onclick="openAIDoc('...')" in live site,
    // opening per-system documentation in a modal. Portfolio-0.2 v2 ports them as plain
    // <span> labels; the AI doc modal is deferred to a follow-on phase. 37 chips affected.
    {
      id: 'boss-ai-arelius',
      label: 'Boss AI — Arelius',
      type: 'prose',
      title: 'Boss AI — Arelius',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<div class="proj-eyebrow">// 03 — Behavior Tree Architecture</div>' +
            '<div class="ai-stats-row">' +
              '<div class="ai-stat"><span class="ai-stat-num">100+</span><span class="ai-stat-label">Named Attacks</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">2</span><span class="ai-stat-label">Fight Phases</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">8</span><span class="ai-stat-label">Decorators</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">9</span><span class="ai-stat-label">Tasks</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">9</span><span class="ai-stat-label">Anim Notifies</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">11</span><span class="ai-stat-label">Notify Events</span></div>' +
              '<div class="ai-stat"><span class="ai-stat-num">2</span><span class="ai-stat-label">Parallel Trees</span></div>' +
            '</div>' +
            '<div class="bt-tree">' +
              '<div class="bt-label">// Behavior Tree Hierarchy</div>' +
              '<div class="bt-row"><span class="bt-connector">▸</span><span class="bt-node"><span class="bt-key">BT_Arelius</span> <span class="bt-comment">— root selector</span></span></div>' +
              '<div class="bt-row bt-indent"><span class="bt-connector">├─</span><span class="bt-node">BT_PassiveState</span></div>' +
              '<div class="bt-row bt-indent"><span class="bt-connector">└─</span><span class="bt-node"><span class="bt-key">BT_Arelius_Combat</span> <span class="bt-comment">— phase-gated via BTD_CheckPhase</span></span></div>' +
              '<div class="bt-row bt-indent-2"><span class="bt-connector">├─</span><span class="bt-node"><span class="bt-key">BT_Combat_Phase1</span> <span class="bt-comment">— melee combos, lunges, counters, gap-closers</span></span></div>' +
              '<div class="bt-row bt-indent-2"><span class="bt-connector">└─</span><span class="bt-node"><span class="bt-key">BT_Combat_Phase2</span> <span class="bt-comment">— adds teleport attacks, projectile slashes, vanish</span></span></div>' +
              '<div class="bt-spacer"></div>' +
              '<div class="bt-row"><span class="bt-connector">▸</span><span class="bt-node"><span class="bt-key">BT_Arelius_DefensiveTree</span> <span class="bt-comment">— runs when player sets pace, fires interjects and pattern-break deflects</span></span></div>' +
            '</div>' +
            '<div class="ai-tags">' +
              '<div class="ai-tag-group">' +
                '<div class="ai-tag-title">Custom Decorators</div>' +
                '<div class="ai-tag-list">' +
                  '<span class="ai-tag">BTD_CheckPhase</span>' +
                  '<span class="ai-tag">BTD_InRange</span>' +
                  '<span class="ai-tag">BTD_InIdealRange</span>' +
                  '<span class="ai-tag">BTD_PlayerVelocityWithinDesiredValues</span>' +
                  '<span class="ai-tag">BTD_FollowUpChance</span>' +
                  '<span class="ai-tag">BTD_CheckAttackParameters</span>' +
                  '<span class="ai-tag">BTD_CheckIfAttackTargetNull</span>' +
                  '<span class="ai-tag">BTD_IsWeaponEquipped</span>' +
                '</div>' +
              '</div>' +
              '<div class="ai-tag-group">' +
                '<div class="ai-tag-title">Custom Tasks</div>' +
                '<div class="ai-tag-list">' +
                  '<span class="ai-tag">BTT_Attacks</span>' +
                  '<span class="ai-tag">BTT_Dash</span>' +
                  '<span class="ai-tag">BTT_Strafe</span>' +
                  '<span class="ai-tag">BTT_MoveToTarget</span>' +
                  '<span class="ai-tag">BTT_SetMovementMode</span>' +
                  '<span class="ai-tag">BTT_EquipWeapon</span>' +
                  '<span class="ai-tag">BTT_UnequipWeapon</span>' +
                  '<span class="ai-tag">BTT_FocusTarget</span>' +
                  '<span class="ai-tag">BTT_HitReaction</span>' +
                '</div>' +
              '</div>' +
              '<div class="ai-tag-group">' +
                '<div class="ai-tag-title">Custom Anim Notifies</div>' +
                '<div class="ai-tag-list">' +
                  '<span class="ai-tag">ANS_SetInterruptibility</span>' +
                  '<span class="ai-tag">ANS_SetRespondToPlayerActions</span>' +
                  '<span class="ai-tag">ANS_RotateActorInGivenDirection</span>' +
                  '<span class="ai-tag">ANS_RotateActorAroundPoint</span>' +
                  '<span class="ai-tag">ANS_SetAnimPlayRate</span>' +
                  '<span class="ai-tag">ANS_UpdateAttackTargetLocationToRotateJoints</span>' +
                  '<span class="ai-tag">ANS_SpawnMovingEffect</span>' +
                  '<span class="ai-tag">ANS_SpawnEffectDetachedFromLocation</span>' +
                  '<span class="ai-tag">ANS_CheckDistance</span>' +
                '</div>' +
              '</div>' +
              '<div class="ai-tag-group">' +
                '<div class="ai-tag-title">Anim Notify Events</div>' +
                '<div class="ai-tag-list">' +
                  '<span class="ai-tag">AN_DynamicResponse</span>' +
                  '<span class="ai-tag">AN_FinishAttackBranchOverride</span>' +
                  '<span class="ai-tag">AN_StartCounterDeflectWindow</span>' +
                  '<span class="ai-tag">AN_UpdateAiReactionKey</span>' +
                  '<span class="ai-tag">AN_SetActionState</span>' +
                  '<span class="ai-tag">AN_ResetAttackParameters</span>' +
                  '<span class="ai-tag">AN_InitiateTeleportToSword</span>' +
                  '<span class="ai-tag">AN_MaxDeflectAmountMet</span>' +
                  '<span class="ai-tag">AN_UpdateGuardFacingDirection</span>' +
                  '<span class="ai-tag">AN_UpdatePerfectParryCounter</span>' +
                  '<span class="ai-tag">AN_KnockedDown</span>' +
                '</div>' +
              '</div>' +
            '</div>'
        }
      ]
    },
  ]
};
