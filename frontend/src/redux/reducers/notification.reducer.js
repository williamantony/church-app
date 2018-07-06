import { SHOW_NOTIFICATION } from '../actions';

const initialState = {
  type: 'ERROR',
  title: 'ERROR',
  message: 'Some error occurred. Please try again.',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
