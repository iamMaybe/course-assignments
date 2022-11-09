document.addEventListener('DOMContentLoaded', function () {
  const scroller = new Scroller('.root');

  document.addEventListener('wheel', e => scroller.listenScroll(e));
  document.addEventListener('swipeUp', () => scroller.scroll(1));
  document.addEventListener('swipeDown', () => scroller.scroll(-1));
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') scroller.scroll(1);
    if (e.key === 'ArrowUp') scroller.scroll(-1);
  });
});
