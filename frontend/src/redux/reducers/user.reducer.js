import {
  USER_REGISTER,
  USER_SIGNIN,
  USER_SIGNOUT,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return state;

    case USER_SIGNIN:
      return state;

    case USER_SIGNOUT:
      return state;

    default:
      return state;
  }
};
