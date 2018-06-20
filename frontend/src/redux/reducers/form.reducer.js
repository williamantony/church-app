import {
  SET_INPUT,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.name]: action.payload.value,
        },
      };
      
    default:
      return state;
  }
};
