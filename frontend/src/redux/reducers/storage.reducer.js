import {
  CREATE_STORAGE,
  SET_STORAGE_DATA,
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
            ...(state[action.payload.database] || {})[action.payload.table],
          },
        },
      };

    case SET_STORAGE_DATA:
      return {
        ...state,
        [action.payload.database]: {
          ...state[action.payload.database],
          [action.payload.table]: {
            ...state[action.payload.database][action.payload.table],
            ...action.payload.data,
          },
        },
      };

    default:
      return state;
  }
};
