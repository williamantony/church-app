import {
  CREATE_FORM,
  SET_INPUT,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
        },
      };

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
