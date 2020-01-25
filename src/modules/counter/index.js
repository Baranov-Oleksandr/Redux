import { store } from '../../store';
import { createCounterDecrementAction, createCounterIncrementAction } from './actions';

const counterValueNode = document.getElementById('counter-value');
const counterDecrementButtonNode = document.getElementById('counter-decrement-button');
const counterIncrementButtonNode = document.getElementById('counter-increment-button');

store.subscribe(() => {
  counterValueNode.innerText = store.getState();
});

counterIncrementButtonNode.addEventListener('click',() => {
  store.dispatch(createCounterIncrementAction());
});

counterDecrementButtonNode.addEventListener('click',() => {
  store.dispatch(createCounterDecrementAction());
});