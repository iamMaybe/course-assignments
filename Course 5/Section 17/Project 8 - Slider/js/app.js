import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const imagesContainer = document.querySelector('.slider__images-container');
  const imgFirstContainer = document.querySelector('.slider__image-container--first');
  const imgSecondContainer = document.querySelector('.slider__image-container--second');
  const imgFirst = document.querySelector('.slider__image-img--first');
  const imgSecond = document.querySelector('.slider__image-img--second');
  const handle = document.querySelector('.slider__handle');
  const divider = document.querySelector('.slider__divider');
  const imagesContainerOffsetLeft = imagesContainer.offsetLeft;
  let imagesContainerWidth;
  let dragging = false;

  const getOffset = clientX => {
    const offset = clientX - imagesContainerOffsetLeft;
    if (offset < 0) {
      return 0;
    } else if (offset > imagesContainerWidth) {
      return imagesContainerWidth;
    } else {
      return offset;
    }
  };

  const move = clientX => {
    const offset = getOffset(clientX);
    const percent = (offset / imagesContainerWidth) * 100;
    divider.style.left = `${percent}%`;
    imgSecondContainer.style.width = `${percent}%`;
  };

  const initEvents = () => {
    handle.addEventListener('mousedown', () => {
      dragging = true;
    });
    handle.addEventListener('mouseup', () => {
      dragging = false;
    });
    addEventListener('mousemove', e => {
      if (dragging) {
        move(e.clientX);
      }
    });
  };

  const adjustImagesSize = () => {
    imagesContainerWidth = imagesContainer.offsetWidth;
    imgFirst.style.width = `${imagesContainerWidth}px`;
    imgSecond.style.width = `${imagesContainerWidth}px`;
  };

  addEventListener('resize', adjustImagesSize);
  adjustImagesSize();
  initEvents();
});
