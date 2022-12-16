import { FILTER_SERVICE } from '../actions/actionTypes';

const initialState = '';

export default function ServiceFindReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const { filter } = action.payload; 
      return filter;

    default:
      return state;
  }
}