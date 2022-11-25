document.addEventListener('DOMContentLoaded', () => {
  const animBg = new AnimBg('.anim-bg');

  document.addEventListener('mousemove', e => animBg.listenCursorMove(e));
});
