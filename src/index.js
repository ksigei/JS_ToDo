import './style.css';

const todoForm = document.querySelector('.todo-form');
const todoItemsList = document.querySelector('.todo-items');
let todos = [];

function renderTodos(todos) {
  todoItemsList.innerHTML = '';
  todos.forEach((item) => {
    const checked = item.completed ? 'checked' : null;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    if (item.completed === true) {
      li.classList.add('checked');
    }
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
}
function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}
function toggle(id) {
  todos.forEach((item) => {
    if (item.id !== id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}
function deleteTodo(id) {
  todos = todos.filter((item) => item.id !== id);
  addToLocalStorage(todos);
}

getFromLocalStorage();
todoItemsList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
});