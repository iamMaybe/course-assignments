let todoInput,
  errorInfo,
  addBtn,
  ulList,
  newTodo,
  idNumber = 0,
  popup,
  popupInfo,
  todoToEdit,
  popupInput,
  popupAddBtn,
  popupCloseBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewTodo);
  todoInput.addEventListener('keyup', enterKeyCheck);
  ulList.addEventListener('click', checkClick);
  popupAddBtn.addEventListener('click', changeTodoText);
  popupCloseBtn.addEventListener('click', closePopup);
};

const addNewTodo = () => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li');
    newTodo.setAttribute('id', `todo-${++idNumber}`);
    newTodo.textContent = todoInput.value;
    createToolsArea();
    ulList.append(newTodo);
    todoInput.value = '';
    errorInfo.textContent = '';
  } else {
    errorInfo.textContent = 'Wpisz treść zadania!';
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  toolsPanel.innerHTML = `<button class="complete"><i class="fas fa-check"></i></button>
  <button class="edit">EDIT</button>
  <button class="delete"><i class="fas fa-times"></i></button>`;
  newTodo.append(toolsPanel);
};

const enterKeyCheck = e => {
  if (e.key === 'Enter') addNewTodo();
};

const checkClick = e => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')) {
    editTodo(e);
  } else if (e.target.matches('.delete')) {
    deleteTodo(e);
  }
};

const editTodo = e => {
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = 'flex';
};

const closePopup = () => {
  popup.style.display = 'none';
  popupInfo.textContent = '';
};

const changeTodoText = () => {
  if (popupInput.value !== '') {
    todoToEdit.firstChild.textContent = popupInput.value;
    closePopup();
  } else {
    popupInfo.textContent = 'Musisz podać jakąś treść!';
  }
};

const deleteTodo = e => {
  e.target.closest('li').remove();
  const allTodos = ulList.querySelectorAll('li');
  if (allTodos.length === 0) errorInfo.textContent = 'Brak zadań na liście.';
};

document.addEventListener('DOMContentLoaded', main);
