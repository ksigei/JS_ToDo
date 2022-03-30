import './style.css';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');
let todos = [];

function renderTodos() {
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

function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
  }
}
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
});