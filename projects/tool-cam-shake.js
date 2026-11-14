/* Dev Tool: Camera Shake Lab. Embeds the published original (FunArtTests, 2026-10-15). */
window.PROJECTS = window.PROJECTS || {};
window.PROJECTS['tool-cam-shake'] = {
  id: 'tool-cam-shake',
  slug: 'tool-cam-shake',
  group: 'ai-tools',
  accent: 'green',
  title: 'Camera Shake Lab',
  subtitle: '// Dev Tool · Unreal Engine 5.8 · AI-Assisted · Browser',
  summary:
    'An interactive visualizer for Unreal Engine 5.8 camera shakes. It copies the camera shake ' +
    'Details panel field for field, and every change redraws the shake live, so a shake can be ' +
    'tuned in the browser before any value goes into the engine.',
  tools: ['Unreal Engine 5.8', 'JavaScript', 'Canvas', 'Claude Code', 'Designer + Director'],
  takeaways: [],
  hero: null,
  thumb: null,
  tileArt: '<svg viewBox="0 0 120 68" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 34 L20 34 L26 14 L34 54 L42 20 L50 46 L58 28 L66 40 L74 32 L84 36 L112 34"/></svg>',
  sections: [
    {
      id: 'try-it',
      label: 'Tool',
      type: 'prose',
      blocks: [
        { type: 'paragraph', html: '<h2 class="dt-title">Camera Shake Lab</h2><p class="dt-note">Made as an Unreal plugin to visualize camera shake in the Details panel.</p>' },
        { type: 'widget', html:
          '<div class="dt-embed"><iframe src="PortfolioPieces/Tools/camera-shake-lab.html?v=2" ' +
          'title="Camera Shake Lab, interactive" scrolling="no" style="display:block;width:100%;height:85vh;min-height:640px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#111"></iframe></div>',
          // The Lab posts its full page height; the frame grows to fit, so the
          // portfolio page scrolls instead of the frame (no inner scrollbar).
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
