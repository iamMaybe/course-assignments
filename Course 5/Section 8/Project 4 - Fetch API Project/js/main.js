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
    .then(data => showUsers(data.results))
    .catch(err => console.error(err));
};

const showUsers = users => {
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = '';
  users.forEach(user => {
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `<div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    <img class="user__img" src="${user.picture.medium}">`;
    resultArea.append(item);
  });
};

generator.addEventListener('submit', getUsers);
