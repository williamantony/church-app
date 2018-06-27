import {
  CREATE_STORAGE,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STORAGE:
      return {
        ...state,
        [action.payload.database]: {
          ...state[action.payload.database],
          [action.payload.table]: {
            ...state[action.payload.database][action.payload.table],
          },
        },
      };

    default:
      return state;
  }
};
