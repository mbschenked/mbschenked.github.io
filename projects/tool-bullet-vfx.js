/* Dev Tool: Bullet VFX range (muzzle flash + tracer). Embeds the published original (FunArtTests, 2026-10-15). */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS['tool-bullet-vfx'] = {
  id: 'tool-bullet-vfx',
  slug: 'tool-bullet-vfx',
  group: 'ai-tools',
  accent: 'green',
  title: 'Bullet VFX Range',
  subtitle: '// Dev Tool · Three.js · AI-Assisted · Browser',
  summary:
    'Real-time browser studies of a bullet tracer and a muzzle flash, matched against captured frames ' +
    'from Uncharted 4. Every element of each effect is a live control, with presets and Copy settings.',
  tools: ['Three.js', 'JavaScript', 'Real-time VFX', 'Claude Code', 'Designer + Director'],
  takeaways: [],
  hero: null,
  thumb: null,
  tileArt: '<svg viewBox="0 0 120 68" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M14 40 L22 34 L14 28" /><path d="M26 34 L92 34" stroke-width="4"/><path d="M40 38 L88 38" stroke-width="1.5" opacity=".5"/><path d="M100 14 L100 58" stroke-width="5"/></svg>',
  sections: [
    {
      id: 'try-it',
      label: 'Tool',
      type: 'prose',
      blocks: [
        { type: 'paragraph', html: '<h2 class="dt-title">Bullet VFX Range</h2>' },
        { type: 'widget', html:
          '<div class="dt-embed"><iframe src="https://mbschenked.github.io/FunArtTests/vfx-studies/u4-range-combined.html" ' +
          'title="Bullet VFX range, interactive" loading="lazy" allow="fullscreen" style="width:100%;height:80vh;min-height:560px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#000"></iframe></div>' }
      ]
    }
  ]
};
