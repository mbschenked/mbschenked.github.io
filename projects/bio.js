/* About page data — ported from live index.html lines 1669–1718.
   Self-registers on window.ABOUT before app.js runs.
   Copy is verbatim from the live site; do not rewrite voice here. */
window.ABOUT = {
  eyebrow: '// About',
  title: 'Max Schenk',
  // Left-column prose — two paragraphs, verbatim from live site.
  paragraphs: [
    "I'm a game designer focused on combat design and systems implementation. " +
    "I have a passion for the theory and design of combat puzzles and " +
    "high-intensity combat encounters built around player decision-making, " +
    "mastery, and flow.",
    "My background in chemical engineering gives me a systems-thinking lens. " +
    "I approach combat the same way I'd approach a reaction network: isolate " +
    "the variables, define the feedback loops, iterate on parameters, and let " +
    "emergent complexity arise from well-defined rules."
  ],
  // 12 skill chips — verbatim order from live site.
  skills: [
    'Unreal Engine 5',
    'Unity',
    'Combat Systems',
    'Behavior Trees',
    'Boss Encounter Design',
    'Combo Design',
    'Blueprint Scripting',
    'C#',
    'C++ (UE)',
    'Cinemachine',
    'Narrative Design',
    'Level Design'
  ],
  // Right-column "info stack" — three cards in order.
  cards: [
    {
      label: 'Education',
      // <br/> tokens preserved from live; renderer converts.
      body: 'Chemical Engineering — UC Davis<br/>Game Design — Vancouver Film School'
    },
    {
      label: 'Focus Areas',
      body: 'Technical Combat Design &bull; Boss Encounter Systems<br/>Combat Puzzle Design &bull; Third-Person Action'
    },
    {
      label: 'Contact',
      // Email + LinkedIn — both rendered as <a>; LinkedIn opens in new tab.
      body:
        '<a href="mailto:mbschenked@gmail.com">mbschenked@gmail.com</a><br/>' +
        '<a href="https://linkedin.com/in/max-schenk-gamedesign" target="_blank" rel="noopener noreferrer">linkedin.com/in/max-schenk-gamedesign</a>'
    }
  ]
};
