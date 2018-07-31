import {
  SET_PROFILE_INFO_OPTIONS,
} from '../actions';

const initialState = {
  isVisible: false,
  isEditing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO_OPTIONS:
      return {
        ...state,
        ...action.payload.options,
      };

    default:
      return state;
  }
};
