document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;

  document.addEventListener('wheel', e => {
    const direction = e.wheelDelta < 0 ? 1 : -1;

    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }

    currentSectionIndex = currentSectionIndex + direction;
  });
});
