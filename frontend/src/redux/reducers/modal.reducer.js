import {
  SHOW_MODAL,
  HIDE_MODAL,
  DESTROY_MODAL,
} from '../actions';

const initialState = {
  modals: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modals: {
          ...state.modals,
          [action.payload.id]: {
            ...state.modals[action.payload.id],
            ...action.payload,
          },
        },
      };

    case HIDE_MODAL:
      return {
        modals: {
          ...state.modals,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };

    case DESTROY_MODAL:
      return {
        modals: {
          ...Object.keys(state.modals).reduce((modals, modalId) => {
            console.log((modalId !== action.payload.id));
            return (modalId !== action.payload.id) ? {
              ...modals,
              [modalId]: {
                ...state.modals[modalId],
              }
            } : modals;
          }, {}),
        },
      };

    default:
      return state;
  }
};
