import { TODO_ADD } from './constants';
import {store} from "../../store";

const initialState = {
  items: [
    'Вынести мусор',
    'Попылесосить',
    'Покушать',
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.title,
        ],
      };

    default:
      return state;
  }
}

// store.dispatch({
//   type: 'TODO_ADD',
//   payload: {
//     title: 'Уйти домой',
//   },
// })
