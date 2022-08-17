let todoInput,
  alertInfo,
  addBtn,
  ulList,
  newTask,
  idNumber = 0,
  popup,
  popupInfo,
  todoToEdit,
  popupInput,
  addPopupBtn,
  closeTodoBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector('.todo-input');
  alertInfo = document.querySelector('.alert-info');
  addBtn = document.querySelector('.add-btn');
  ulList = document.querySelector('.todo-list ul');
  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  addPopupBtn = document.querySelector('.accept');
  closeTodoBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
  todoInput.addEventListener('keyup', enterCheck);
  ulList.addEventListener('click', checkClick);
};

const addNewTask = () => {
  if (todoInput.value !== '') {
    newTask = document.createElement('li');
    newTask.setAttribute('id', `todo-${++idNumber}`);
    newTask.textContent = todoInput.value;
    createToolsArea();
    ulList.append(newTask);
    todoInput.value = '';
    alertInfo.textContent = '';
  } else {
    alertInfo.textContent = 'Wpisz treść zadania!';
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  toolsPanel.innerHTML = `<button class="complete"><i class="fas fa-check"></i></button>
  <button class="edit">EDIT</button>
  <button class="delete"><i class="fas fa-times"></i></button>`;
  newTask.append(toolsPanel);
};

const enterCheck = e => {
  if (e.key === 'Enter') addNewTask();
};

const checkClick = e => {
  if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')) {
    editTask(e);
  } else if (e.target.matches('.delete')) {
    deleteTask(e);
  }
};

const editTask = e => {
  todoToEdit = e.target.closest('li');
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = 'flex';
};

const deleteTask = e => {
  e.target.closest('li').remove();
  const allTodos = ulList.querySelectorAll('li');
  if (allTodos.length === 0) alertInfo.textContent = 'Brak zadań na liście.';
};

document.addEventListener('DOMContentLoaded', main);
