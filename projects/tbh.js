/* The Broken Hero — Phase D v2 schema.
   5 sections: project-overview, screenshots, trailer, role-mechanics, team.
   Source-of-truth: ../../index.html lines ~2231–2350 (live TBH section).
   Copy ported verbatim from live site — do not rewrite voice here.
   TBH is a 3D fixed-camera puzzle-platformer with ZERO combat — copy reflects that. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS.tbh = {
  id: 'tbh',
  slug: 'tbh',
  accent: 'tbh',
  title: 'The Broken Hero',
  subtitle: '// Unity · Gameplay Programmer · itch.io',
  summary:
    'A single-player 3D fixed-camera puzzle-platformer — a Greek soldier reborn from ' +
    'an ancient fresco, navigating a collapsing temple while switching between the ' +
    'physical 3D world and 2D fresco spaces that transform the player into an illustration.',
  tools: ['Unity', 'C#', 'Maya', 'ZBrush', 'Cinemachine', 'Miro', 'Fork', 'HacknPlan', '6-Person Team', 'Gameplay Programmer'],
  takeaways: [
    '<span class="bullet-lead">Shipped a 6-person VFS team project</span> to itch.io (Windows release, 2025).',
    '<span class="bullet-lead">Authored core gameplay systems and player character mechanics</span> in Unity / C#.',
    '<span class="bullet-lead">Engineered 3D ↔ 2D world-switching logic</span> with visual continuity across the transition.',
    '<span class="bullet-lead">Built a state-driven Cinemachine architecture</span> (CameraManager, CinemachineSwitcher) with runtime camera blending designers could control without code changes.',
    '<span class="bullet-lead">Composed setpiece camera shots</span> for the project’s major cinematic moments.'
  ],
  hero: {
    src: './PortfolioPieces/ThreadsOfGod/clips/tog-hero-loop.mp4',
    poster: './PortfolioPieces/ThreadsOfGod/clips/tog-hero-poster.jpg',
    alt: 'Portfolio gameplay reel — Threads of God combat interleaved with The Broken Hero platforming, looping, muted'
  },
  thumb: './PortfolioPieces/The Broken Hero/Screenshot 2026-04-15 152759.png',
  sections: [

    // ── § 1 ─ Project Overview ─────────────────────────────────────────────
    {
      id: 'project-overview',
      label: 'Project Overview',
      type: 'header',
      badges: [
        { label: 'VFS Team Project — 2025', cls: 'badge-tbh-c' },
        { label: '6-Person Team',           cls: 'badge-tbh-c' },
        { label: '✓ Shipped',          cls: 'badge-ship' }
      ],
      title: 'The / Broken Hero',
      subtitle: '// Unity · Gameplay Programmer · itch.io',
      lead:
        '<p>A single-player 3D fixed-camera platformer — a Greek soldier reborn from an ' +
        'ancient fresco, navigating a collapsing temple while switching between the ' +
        'physical 3D world and 2D fresco spaces that transform the player into ' +
        'an illustration.</p>',
      meta: ['Unity', 'C#', '6-Person Team', 'Cinemachine', 'Gameplay Programmer'],
      cta: { label: 'Play on itch.io', href: 'https://vfs-gdpg.itch.io/the-broken-hero', cls: 'btn-tbh' }
    },

    // ── § 2 ─ Screenshots ──────────────────────────────────────────────────
    {
      id: 'screenshots',
      label: 'Screenshots',
      type: 'gallery',
      title: 'Screenshots',
      images: [
        { src: './PortfolioPieces/The Broken Hero/Screenshot 2026-04-15 152759.png', alt: 'TBH scene 1' },
        { src: './PortfolioPieces/The Broken Hero/Screenshot 2026-04-15 152830.png', alt: 'TBH scene 2' },
        { src: './PortfolioPieces/The Broken Hero/Screenshot 2026-04-15 152855.png', alt: 'TBH scene 3' },
        { src: './PortfolioPieces/The Broken Hero/Screenshot 2026-04-15 152916.png', alt: 'TBH scene 4' }
      ]
    },

    // ── § 3 ─ Trailer (YouTube embed + meta strip) ─────────────────────────
    {
      id: 'trailer',
      label: 'Trailer',
      type: 'media',
      title: 'Gameplay Trailer',
      media: {
        kind: 'youtube',
        youtubeId: 'flLRO251moE',
        youtubeStart: 1,
        caption: 'The Broken Hero — Gameplay Trailer',
        metaStrip: [
          { label: 'Platform', value: 'Windows' },
          { label: 'Status',   value: 'Released' },
          { label: 'Engine',   value: 'Unity' }
        ]
      }
    },

    // ── § 4 ─ Role + Mechanics ─────────────────────────────────────────────
    {
      id: 'role-mechanics',
      label: 'Role + Mechanics',
      type: 'prose',
      title: 'Role + Mechanics',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<p>Players traverse upward through a collapsing temple, hunted by a mythic ' +
            'Minotaur. Entering fresco artworks shifts gameplay from 3D exploration to ' +
            'side-scrolling 2D platforming — a dual-world mechanic that transforms both ' +
            'the visual language and the rules of movement.</p>'
        },
        {
          type: 'paragraph',
          html: '<div class="tbh-role-label">My Role — Gameplay Programmer</div>'
        },
        {
          type: 'list',
          items: [
            'Core gameplay systems and player character mechanics in Unity / C#',
            '3D ↔ 2D world-switching logic with visual continuity across the transition',
            'State-driven Cinemachine architecture: CameraManager, CinemachineSwitcher',
            'Runtime camera blending designers could control without code changes',
            'Setpiece camera composition for major cinematic moments',
            'Collaborated across Level Design, Art, and Sound disciplines'
          ]
        }
      ]
    },

    // ── § 5 ─ Development Team ─────────────────────────────────────────────
    {
      id: 'team',
      label: 'Development Team',
      type: 'prose',
      title: 'Development Team',
      blocks: [
        {
          type: 'paragraph',
          html:
            '<div class="team-grid">' +
              '<div class="team-member highlight">' +
                '<div class="team-name">Max Schenk</div>' +
                '<div class="team-role">Gameplay Programmer</div>' +
              '</div>' +
              '<div class="team-member">' +
                '<div class="team-name">Rafael Cenato</div>' +
                '<div class="team-role">PM · Programmer</div>' +
              '</div>' +
              '<div class="team-member">' +
                '<div class="team-name">Gustavo Duarte</div>' +
                '<div class="team-role">Programmer · Lighting</div>' +
              '</div>' +
              '<div class="team-member">' +
                '<div class="team-name">Lais Fujiyama</div>' +
                '<div class="team-role">Level Design · UI Art</div>' +
              '</div>' +
              '<div class="team-member">' +
                '<div class="team-name">Luigi Patti</div>' +
                '<div class="team-role">Character · Level Art</div>' +
              '</div>' +
              '<div class="team-member">' +
                '<div class="team-name">Luiza Arantes</div>' +
                '<div class="team-role">Environment · VFX · Tech Art</div>' +
              '</div>' +
            '</div>'
        }
      ]
    }
  ]
};
