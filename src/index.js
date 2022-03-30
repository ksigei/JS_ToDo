import './style.css';

const todoItemsList = document.querySelector('.todo-items');

const todo = [
  {
    id: Date.now(),
    name: 'Read a book',
    completed: false,
  },
  {
    id: Date.now(),
    name: 'Some JS',
    completed: false,
  },
];

todoItemsList.innerHTML = '';
todo.forEach((item) => {
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
