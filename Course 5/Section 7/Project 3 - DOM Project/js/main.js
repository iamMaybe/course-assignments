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
  const elements = document.querySelectorAll(searchedElement);

  if (elements.length) {
    result.innerHTML = `<p class="result__info">W tym dokumencie znalazłem <strong>${elements.length}</strong> elementów <strong>${searchedElement}</strong>.</p>`;
  } else {
    result.innerHTML = `<p class="result__info">W tym dokumencie nie znalazłem elementów <strong>${searchedElement}</strong>.</p>`;
  }
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
