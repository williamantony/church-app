import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          ...action.payload,
        },
      };

    case HIDE_MODAL:
      return {
        ...Object.keys(state).reduce((obj, name) => {
          return {
            ...obj,
            [name]: {
              ...state[name],
              isVisible: false,
            },
          };
        }, state)
      };
      
    default:
      return state;
  }
};
