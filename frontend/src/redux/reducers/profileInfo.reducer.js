import {
  SET_PROFILE_INFO_VISIBILITY,
} from '../actions';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};
