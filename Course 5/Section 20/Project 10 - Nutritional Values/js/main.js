import '../sass/style.scss';

const valuesContainer = document.querySelector('.app__values');
const desktopViewport = matchMedia('(min-width: 500px)');

const values = [
  { name: 'Pineapple', calories: 41, fat: 0.1, carbs: 11, protein: 0.5 },
  { name: 'Apple', calories: 95, fat: 0.3, carbs: 25, protein: 0.5 },
  { name: 'Orange', calories: 69, fat: 0.2, carbs: 18, protein: 1.3 },
  { name: 'Cherry', calories: 5.2, fat: 0, carbs: 1.3, protein: 0.1 },
];

const drawValues = isDesktop => {
  isDesktop ? drawDesktopValues() : drawMobileValues();
};

const drawMobileValues = () => {
  valuesContainer.innerHTML = '';
  const list = document.createElement('ul');

  values.forEach(value => {
    const listItem = document.createElement('li');
    const name = document.createElement('div');
    name.innerHTML = `<strong>Name: </strong>${value.name}`;
    const calories = document.createElement('div');
    calories.innerHTML = `<strong>Calories: </strong>${value.calories}`;
    const fat = document.createElement('div');
    fat.innerHTML = `<strong>Fat: </strong>${value.fat}`;
    const carbs = document.createElement('div');
    carbs.innerHTML = `<strong>Carbs: </strong>${value.carbs}`;
    const protein = document.createElement('div');
    protein.innerHTML = `<strong>Protein: </strong>${value.protein}`;

    listItem.append(name, calories, fat, carbs, protein);
    list.append(listItem);
  });

  valuesContainer.append(list);
};

const drawDesktopValues = () => {
  valuesContainer.innerHTML = '';
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th><th>Protein</th></tr>';

  const tbody = document.createElement('tbody');
  values.forEach(value => {
    const trow = document.createElement('tr');
    trow.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td><td>${value.protein}</td>`;
    tbody.append(trow);
  });

  table.append(thead, tbody);
  valuesContainer.append(table);
};

drawValues(desktopViewport.matches);
desktopViewport.addEventListener('change', () => {
  drawValues(desktopViewport.matches);
});
