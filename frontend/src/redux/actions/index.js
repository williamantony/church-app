import axios from "axios";

const API_URL = 'http://localhost:5000';

/**
 * User Authentication
 */
export const USER_REGISTER = 'USER_REGISTER';
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';


export const registerUser = async (user) => {
  const endpoint = `${API_URL}/user`;
  try {
    const registerUserRequest = await axios.post(endpoint, user);
    return {
      type: USER_REGISTER,
      payload: registerUserRequest,
    };
  }
  catch(error) {
    
    return {
      type: USER_REGISTER,
      payload: {},
    };
  }
};

export const signin = () => {

};

export const signout = () => {

};



/**
 * Form Input
 */
export const SET_INPUT = 'SET_INPUT';

export const setInput = (form, name, value) => {
  return {
    type: SET_INPUT,
    payload: {
      form,
      name,
      value,
    },
  };
};



/**
 * Modal
 */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (name, content) => {
  return {
    type: SHOW_MODAL,
    payload: {
      name,
      isVisible: true,
      content,
    },
  };
};

export const hideModal = (name = '*') => {
  return {
    type: HIDE_MODAL,
    payload: {
      name,
      isVisible: false,
    },
  };
};
