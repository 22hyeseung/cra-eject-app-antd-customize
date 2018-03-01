import { createAction, handleActions } from 'redux-actions';

// action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

// action creators
export const increment = createAction(INCREMENT); // no param
export const decrement = createAction(DECREMENT); // no param

// reducer
// initial state
const initialState = {
  number: 0,
};

export default handleActions(
  {
    [INCREMENT]: state => ({ number: state.number + 1 }),
    [DECREMENT]: state => ({ number: state.number - 1 }),
  },
  initialState,
);
