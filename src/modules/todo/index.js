import { store } from '../../store';

const todoRootNode = document.getElementById('todo-root');

function renderTodoList() {
  const { todoReducer } = store.getState();
  const { items } = todoReducer;

  console.log(todoRootNode);
  console.log(items);

  const listNode = document.createElement('ul');

  items.forEach(item => {
    const itemNode = document.createElement('li');

  itemNode.innerText = item;

  listNode.appendChild(itemNode);
  }

store.subscribe(renderTodoList);

renderTodoList();
