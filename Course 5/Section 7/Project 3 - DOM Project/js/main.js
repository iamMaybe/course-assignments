const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search');
const content = document.querySelector('.content');
const elInput = document.querySelector('.el');
const txtInput = document.querySelector('.txt');
const attrInput = document.querySelector('.attr');
const valueInput = document.querySelector('.value');

const addElement = (e, el, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(el);

  if (txt) element.textContent = txt;
  if (attr) element.setAttribute(attr, value);
  content.append(element);
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
