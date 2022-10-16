const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search');
const result = document.querySelector('.result');
const content = document.querySelector('.content');
const elInput = document.querySelector('.el');
const txtInput = document.querySelector('.txt');
const attrInput = document.querySelector('.attr');
const valueInput = document.querySelector('.value');
const searchInput = document.querySelector('.search');

const addElement = (e, el, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(el);
  if (txt) element.textContent = txt;
  if (attr) element.setAttribute(attr, value);
  content.append(element);
};

const searchElements = (e, searchedElement) => {
  e.preventDefault();
  result.textContent = '';
  const elements = document.querySelectorAll(searchedElement);

  if (elements.length) {
    result.innerHTML = `<p class="result__element-info">W tym dokumencie znalazłem <strong>${elements.length}</strong> elementów <strong>${searchedElement}</strong>.</p>`;
    showInfo(elements);
  } else {
    result.innerHTML = `<p class="result__element-info">W tym dokumencie nie znalazłem elementów <strong>${searchedElement}</strong>.</p>`;
  }
};

const showInfo = elements => {
  elements.forEach(element => {
    const info = document.createElement('div');
    info.classList.add('result__element-details');
    info.innerHTML = `
    <p>${element.nodeName}</p>
    <p>Klasa: ${element.className}</p>
    <p>Wysokość elementu (offsetHeight): ${element.offsetHeight}</p>
    <p>Szerokość elementu (offsetWidth): ${element.offsetWidth}</p>
    <p>Odległość od lewej krawędzi (offsetLeft): ${element.offsetLeft}</p>
    <p>Odległość od górnej krawędzi (offsetTop): ${element.offsetTop}</p>
    <p>Liczba elementów-dzieci (childElementCount): ${element.childElementCount}</p>
    `;
    result.append(info);
  });
};

addForm.addEventListener('submit', e =>
  addElement(
    e,
    elInput.value,
    txtInput.value,
    attrInput.value,
    valueInput.value
  )
);

searchForm.addEventListener('submit', e =>
  searchElements(e, searchInput.value)
);
