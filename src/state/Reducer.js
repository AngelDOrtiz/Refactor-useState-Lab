/* eslint-disable max-len */
import { REDO, UNDO, RECORD } from '../actions/actions';

export const initialState = {
  before: [],
  after: [],
  current: '#FF0000'
};

export function reducer(state, action) {
  switch(action.type) {
    case 'UNDO':
      return { ...state, after: [state.current, ...state.after], before: state.before.slice(0, -1), current: state.before[state.before.length - 1] };

    case 'REDO':
      return { ...state, before: [...state.before, state.current], after: state.after.slice(1), current: state.after[0] };

    case 'RECORD':
      return { ...state, before: [...state.before, state.current], current: action.payload }; 
  }


}
