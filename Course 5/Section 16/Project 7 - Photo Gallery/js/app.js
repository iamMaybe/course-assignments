import '../sass/style.scss';

class Dog {
  constructor() {
    this.apiUrl = 'https://dog.ceo/api';
    this.imgEl = document.querySelector('.featured-dog-img');
  }

  listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
      .then(res => res.json())
      .then(data => data.message);
  }
}
