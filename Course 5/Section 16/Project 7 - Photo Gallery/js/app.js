import '../sass/style.scss';

class Dog {
  constructor() {
    this.apiUrl = 'https://dog.ceo/api';
    this.imgEl = document.querySelector('.featured-dog__image img');
    this.backgroundEl = document.querySelector('.featured-dog__background');
    this.tilesEl = document.querySelector('.tiles');
    this.init();
  }

  listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
      .then(res => res.json())
      .then(data => data.message);
  }

  getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
      .then(res => res.json())
      .then(data => data.message);
  }

  getRandomImageByBreed(breed) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => data.message);
  }

  init() {
    this.getRandomImage().then(src => {
      this.imgEl.setAttribute('src', src);
      this.backgroundEl.style.backgroundImage = `url("${src}")`;
    });

    this.showAllBreeds();
  }

  showAllBreeds() {
    this.listBreeds().then(breeds => {
      for (const breed in breeds) {
        if (breeds[breed].length === 0) {
          console.log(breed);
        } else {
          for (const subBreed of breeds[breed]) {
            console.log(breed, subBreed);
          }
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Dog();
});
