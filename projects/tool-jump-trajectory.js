/* Dev Tool: Trajectory Sandbox. Embeds the published original (FunArtTests, 2026-10-15). Desktop only. */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS['tool-jump-trajectory'] = {
  id: 'tool-jump-trajectory',
  slug: 'tool-jump-trajectory',
  group: 'ai-tools',
  accent: 'green',
  title: 'Jump Trajectory Sandbox',
  subtitle: '// Dev Tool · Unreal Engine 5 · AI-Assisted · Browser',
  summary:
    'A sandbox for shaping the flight path of a Death From Above takedown: the leap from a ledge onto ' +
    'an enemy below. Drag the curve, play the jump back, and export it as an Unreal Engine Curve Vector.',
  tools: ['Unreal Engine 5', 'JavaScript', 'Curve Vector', 'Claude Code', 'Designer + Director'],
  takeaways: [],
  hero: null,
  thumb: null,
  tileArt: '<svg viewBox="0 0 120 68" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M10 22 L24 22"/><path d="M24 22 C44 2 78 6 98 54" stroke-dasharray="1 0"/><circle cx="58" cy="10" r="3.5" fill="currentColor"/><circle cx="98" cy="54" r="5"/><path d="M84 60 L112 60"/></svg>',
  sections: [
    {
      id: 'try-it',
      label: 'Tool',
      type: 'prose',
      blocks: [
        { type: 'paragraph', html: '<h2 class="dt-title">Jump Trajectory Sandbox</h2>' },
        { type: 'widget', html:
          '<div class="dt-embed"><iframe src="PortfolioPieces/Tools/trajectory-sandbox.html?v=3" ' +
          'title="Jump Trajectory Sandbox, interactive" scrolling="no" style="display:block;width:100%;height:85vh;min-height:640px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#111"></iframe></div>',
          // The sandbox posts its full page height; the frame grows to fit (no inner scrollbar).
          mount: function (el) {
            var frame = el.querySelector('iframe');
            if (!frame) return;
            function onMsg(e) {
              if (e.source !== frame.contentWindow) return;
              var d = e.data;
              if (!d || d.type !== 'fat-embed-height' || !(d.height > 0)) return;
              frame.style.minHeight = '0';
              frame.style.height = (Math.ceil(d.height) + 2) + 'px';
            }
            window.addEventListener('message', onMsg);
            return function () { window.removeEventListener('message', onMsg); };
          } }
      ]
    }
  ]
};
