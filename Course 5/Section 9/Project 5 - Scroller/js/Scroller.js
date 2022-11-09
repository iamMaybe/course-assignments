class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll('.section')];

    const currentSectionIndex = this.sections.findIndex(
      this.isScrolledIntoView
    );

    this.currentSectionIndex = Math.max(currentSectionIndex, 0);
    this.isThrottled = false;
    this.drawNavigation();
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top;
    const elBottom = Math.floor(rect.bottom);

    const isVisible = elTop >= 0 && elBottom <= window.innerHeight;
    return isVisible;
  }

  listenScroll(e) {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 1000);

    const direction = e.deltaY < 0 ? -1 : 1;
    this.scroll(direction);
  }

  scroll(direction) {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex = this.currentSectionIndex + direction;
    this.scrollToCurrentSection();
  }

  scrollToCurrentSection() {
    this.selectActiveNavItem();
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  drawNavigation() {
    this.navContainer = document.createElement('aside');
    this.navContainer.classList.add('scroller__navigation');
    const list = document.createElement('ul');

    this.sections.forEach((section, index) => {
      const listItem = document.createElement('li');

      listItem.addEventListener('click', () => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection();
      });

      list.append(listItem);
    });

    this.navContainer.append(list);
    document.body.append(this.navContainer);
    this.selectActiveNavItem();
  }

  selectActiveNavItem() {
    if (this.navContainer) {
      const navItems = this.navContainer.querySelectorAll('li');

      navItems.forEach((navItem, index) => {
        if (index === this.currentSectionIndex) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      });
    }
  }
}
