import {
  ADD_PERSON,
  GET_PEOPLE,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        ...action.payload.data,
      ];

    case GET_PEOPLE:
      return action.payload.data;

    default:
      return state;
  }
};
