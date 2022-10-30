document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;
  let isThrottled = false;

  document.addEventListener('wheel', e => {
    if (isThrottled) return;
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, 1000);

    const direction = e.wheelDelta < 0 ? 1 : -1;
    scroll(direction);
  });

  const scroll = direction => {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    currentSectionIndex = currentSectionIndex + direction;
    scrollToCurrentSection();
  };

  const scrollToCurrentSection = () => {
    sections[currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
});
