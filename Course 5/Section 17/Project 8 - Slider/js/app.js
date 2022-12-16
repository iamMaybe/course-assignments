import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const imagesContainer = document.querySelector('.slider__images-container');
  const imgFirst = document.querySelector('.slider__image-img--first');
  const imgSecond = document.querySelector('.slider__image-img--second');
  const handle = document.querySelector('.slider__handle');
  let dragging;

  const initEvents = () => {
    handle.addEventListener('mousedown', () => {
      dragging = true;
    });
    handle.addEventListener('mouseup', () => {
      dragging = false;
    });
    addEventListener('mousemove', e => {
      if (dragging) {
        console.log(e.clientX);
      }
    });
  };

  const adjustImagesSize = () => {
    const imagesContainerWidth = imagesContainer.offsetWidth;
    imgFirst.style.width = `${imagesContainerWidth}px`;
    imgSecond.style.width = `${imagesContainerWidth}px`;
  };

  addEventListener('resize', adjustImagesSize);
  adjustImagesSize();
  initEvents();
});
