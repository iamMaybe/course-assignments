let todoInput,
  alertInfo,
  addBtn,
  ulList,
  newTask,
  allTasks,
  idNumber = 0,
  popup,
  popupInfo,
  editedTodo,
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
  allTasks = document.querySelector('li');
  popup = document.querySelector('popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input');
  addPopupBtn = document.querySelector('.accept');
  closeTodoBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
  todoInput.addEventListener('keyup', enterCheck);
};

const addNewTask = () => {
  if (todoInput.value !== '') {
    newTask = document.createElement('li');
    newTask.setAttribute('id', `todo-${++idNumber}`);
    newTask.textContent = todoInput.value;
    ulList.append(newTask);
    todoInput.value = '';
    alertInfo.textContent = '';
  } else {
    alertInfo.textContent = 'Wpisz treść zadania!';
  }
};

const enterCheck = e => {
  if (e.key === 'Enter') addNewTask();
};

document.addEventListener('DOMContentLoaded', main);
