/* PuffJump — first entry in the "AI Games" group.
   4 sections: project-overview, screenshots, process, role-mechanics.
   Facts source: ai-games contract + PuffJump/Release/ITCH-PAGE.md. Use no others.
   Framing: Max designed, directed and play-tested; Claude Code wrote the code. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.puffjump = {
  id: 'puffjump',
  slug: 'puffjump',
  group: 'ai-games',
  accent: 'puffjump',
  title: 'Paper Puff',
  subtitle: '// Unity 6 · Designer + Director · AI-Assisted · itch.io',
  summary:
    'A short 3D platformer about a puffball climbing out of a lit well. Pressing E on a ' +
    'stone wall merges the player into it as a flat 2D drawing that platforms along the ' +
    'wall, then exit portals launch it back into 3D. Built in one 2 h 15 min session with ' +
    'Claude Code writing the code while Max designed, play-tested and directed each change.',
  tools: ['Unity', 'C#', 'URP', 'Cinemachine', 'Claude Code', 'Solo', 'Designer + Director'],
  takeaways: [
    '<span class="bullet-lead">Directed a shipped 3D platformer in one 2 h 15 min session</span>, using Claude Code as the coding partner from an empty folder to a 35.6 MB Windows build.',
    '<span class="bullet-lead">Ran 11 play-test feedback rounds</span>, turning each session of play into one concrete change request (level redo, wall-to-cloud launch, higher air jump).',
    '<span class="bullet-lead">Drove 13 full level rebuilds</span> through an editor script that regenerates the whole level, so layout changes never required hand-placing geometry.',
    '<span class="bullet-lead">Designed a 3D ↔ 2D wall-merge mechanic</span> where the player becomes a drawing on curved and flat walls and nearby props flatten into ink-outlined cards.',
    '<span class="bullet-lead">Shipped after 3 export attempts</span>, with the two failures (a shader limit, then a typo) found and fixed inside the same session.'
  ],
  // Shared portfolio reel (same as tbh.js); game screenshots stay in the gallery only.
  hero: {
    src: 'PortfolioPieces/ThreadsOfGod/clips/tog-hero-loop.mp4',
    poster: 'PortfolioPieces/ThreadsOfGod/clips/tog-hero-poster.jpg',
    alt: 'Portfolio gameplay reel — Threads of God combat interleaved with The Broken Hero platforming, looping, muted'
  },
  thumb: 'PortfolioPieces/PuffJump/pj-thumb.png',
  sections: [

    // ── § 1 ─ Project Overview ─────────────────────────────────────────────
    {
      id: 'project-overview',
      label: 'Project Overview',
      type: 'header',
      badges: [
        { label: 'AI-Assisted Solo Project — 2026', cls: 'badge-puffjump' },
        { label: '~2h 15m Build',                   cls: 'badge-puffjump' },
        { label: '✓ Shipped',                       cls: 'badge-ship' }
      ],
      title: 'Paper / Puff',
      subtitle: '// Unity 6 · Designer + Director · AI-Assisted · itch.io',
      lead:
        '<p>A <strong>short 3D platformer</strong> that starts at the bottom of a lit well. ' +
        'Pressing E on a lavender or teal stone wall <strong>merges the player into it as a flat 2D drawing</strong> ' +
        'that platforms along the wall\'s surface. The climb continues through a meadow, a side-scrolling cliff ' +
        'and a path of bounce clouds to a split summit.</p>',
      focuses:
        '<p>Worked as <strong>designer and director</strong>: I set the concept, play-tested each build and gave each round of direction. ' +
        '<strong>Claude Code wrote the code</strong> (46 C# files, about 9,370 lines, 4 custom URP shaders) and drove the open Unity editor ' +
        'through the official Unity CLI.</p>',
      meta: ['Unity 6', 'URP', 'Cinemachine 3', 'Claude Code', 'Solo'],
      cta: { label: 'Play on itch.io', href: 'https://mbschenked.itch.io/paper-puff', cls: 'btn-puffjump' }
    },

    // ── § 2 ─ Screenshots ──────────────────────────────────────────────────
    {
      id: 'screenshots',
      label: 'Screenshots',
      type: 'gallery',
      title: 'Screenshots',
      images: [
        { src: 'PortfolioPieces/PuffJump/pj-action-01-wall2d.png', alt: 'The puffball merged into the lavender wall as a flat 2D drawing, jumping between plank ledges toward the exit portal' },
        { src: 'PortfolioPieces/PuffJump/pj-action-04-portal.png', alt: 'The puffball launching out of the wall’s exit portal back into 3D' },
        { src: 'PortfolioPieces/PuffJump/pj-action-02-cloud.png',  alt: 'The puffball bouncing off a cloud on the cloud path, coins and saws ahead' },
        { src: 'PortfolioPieces/PuffJump/pj-action-03-jump.png',   alt: 'A 3D double jump over the meadow stepping stones' },
        { src: 'PortfolioPieces/PuffJump/pj-action-05-well.png',   alt: 'The puffball as a 2D drawing on the curved stone wall inside the well' },
      ]
    }
  ]
};
