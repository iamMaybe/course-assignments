import '../sass/style.scss';

const valuesContainer = document.querySelector('.app__values');
const desktopViewport = matchMedia('(min-width: 500px)');

const values = [
  { name: 'Pineapple', calories: 41, fat: 0.1, carbs: 11, protein: 0.5 },
  { name: 'Apple', calories: 95, fat: 0.3, carbs: 25, protein: 0.5 },
  { name: 'Orange', calories: 69, fat: 0.2, carbs: 18, protein: 1.3 },
  { name: 'Cherry', calories: 5.2, fat: 0, carbs: 1.3, protein: 0.1 },
];

const drawDesktopValues = () => {
  valuesContainer.innerHTML = '';
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Name</th><th>Calories</th><th>Fat</th><th>Carbs</th><th>Protein</th></tr>';

  let tbody = document.createElement('tbody');
  values.forEach(value => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td><td>${value.protein}</td>`;
    tbody.append(tr);
  });

  table.append(thead);
  table.append(tbody);
  valuesContainer.append(table);
};

drawDesktopValues();
