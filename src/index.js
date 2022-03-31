import './style.css';

import {
  addTodo,
  getTodoFromLocalStorage,
  checkOrDelete,
} from './modules/local_storage.js';

const addTodoButton = document.querySelector('.add-todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodoFromLocalStorage);
addTodoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkOrDelete);
