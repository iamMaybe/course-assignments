import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const imagesContainer = document.querySelector('.slider__images-container');
  imgFirst = document.querySelector('.slider__image-img--first');
  imgSecond = document.querySelector('.slider__image-img--second');

  const adjustImagesSize = () => {
    const imagesContainerWidth = imagesContainer.offsetWidth;
    imgFirst.style.width = imagesContainerWidth + 'px';
    imgSecond.style.width = imagesContainerWidth + 'px';
  };

  addEventListener('resize', adjustImagesSize);
  adjustImagesSize();
});
