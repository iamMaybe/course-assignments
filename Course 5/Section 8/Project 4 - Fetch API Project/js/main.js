const generator = document.querySelector('.generator');

const getUsers = e => {
  e.preventDefault();
  const usersNumber = document.querySelector('.generator__input').value;
  const usersGender = document.querySelector('.generator__select').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === 'both' ? 'male,female' : usersGender
  }`;

  fetch(url)
    .then(res => {
      if (res.status !== 200) {
        throw Error('To nie jest odpowiedź 200!');
      } else {
        return res.json();
      }
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
};

generator.addEventListener('submit', getUsers);
