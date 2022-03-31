import createElements from './new_todo.js';

const todoInput = document.querySelector('.todo-input');

const existOrNot = () => {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  return items;
};

const saveTodoInLocalStorage = (item) => {
  const items = existOrNot();

  items.push(item);

  localStorage.setItem('items', JSON.stringify(items));
};

export function addTodo(e) {
  e.preventDefault();

  createElements(todoInput.value);

  saveTodoInLocalStorage(todoInput.value);

  todoInput.value = '';
}

export const getTodoFromLocalStorage = () => {
  const items = existOrNot();

  items.forEach((item) => {
    createElements(item);
  });
};

const removeTodoFromLocalStorage = (item) => {
  const items = existOrNot();

  const itemIndex = item.children[0].innerText;

  items.splice(items.indexOf(itemIndex), 1);

  localStorage.setItem('items', JSON.stringify(items));
};

export const checkOrDelete = (e) => {
  const item = e.target;

  if (item.classList[2] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('check');
  }

  if (item.classList[2] === 'delete-btn') {
    const todo = item.parentElement;
    removeTodoFromLocalStorage(todo);
    todo.remove();
  }
};
