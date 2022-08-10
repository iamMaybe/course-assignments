let todoInput;
let alertInfo;
let addBtn;
let ulList;
let newTask;
let allTasks;
let idNumber = 0;
let popup;
let popupInfo;
let editedTodo;
let popupInput;
let addPopupBtn;
let closeTodoBtn;

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

const enterCheck = e => {
  if (e.key === 'Enter') addNewTask();
};

document.addEventListener('DOMContentLoaded', main);
