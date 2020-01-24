import { store } from './store';
import { createCounterDecrementAction, createCounterIncrementAction } from './modules/counter/actions';

const counterValueNode = document.getElementById('counter-value');
const counterDecrementButtonNode = document.getElementById('counter-decrement-button');
const counterIncrementButtonNode = document.getElementById('counter-increment-button');

store.subscribe(() => {
  const state = store.getState();

  counterValueNode.innerText = state;
});

counterIncrementButtonNode.addEventListener('click',() => {
  store.dispatch(createCounterIncrementAction());
});

counterDecrementButtonNode.addEventListener('click',() => {
  store.dispatch(createCounterDecrementAction());
});
