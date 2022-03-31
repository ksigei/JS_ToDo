const todoList = document.querySelector('.todo-list');

const createElements = (value) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.innerText = value;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  const checkButton = document.createElement('button');
  checkButton.classList.add('fas', 'fa-check', 'check-btn'); // error if use space, so split class with '',

  todoDiv.appendChild(checkButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('fas', 'fa-trash', 'delete-btn');
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);
};

export default createElements;