import {
  GET_PEOPLE,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return action.payload.data;

    default:
      return state;
  }
};
