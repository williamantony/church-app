import axios from 'axios';

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
 * Storage
 */
export const CREATE_STORAGE = 'CREATE_STORAGE';

export const createStorage = (database = 'default', table = 'default') => {
  return {
    type: CREATE_STORAGE,
    payload: {
      database,
      table,
    },
  };
};

/**
 * Form Input
 */
export const CREATE_FORM = 'CREATE_FORM';
export const SET_INPUT = 'SET_INPUT';

export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: {
      form,
    },
  };
};

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
export const DESTROY_MODAL = 'DESTROY_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (content, modalId) => {
  const id = modalId || `modal_${new Date().getTime()}`;
  return {
    id,
    type: SHOW_MODAL,
    payload: {
      id,
      content,
      isVisible: true,
    },
  };
};

export const hideModal = (modalId) => {
  return {
    type: HIDE_MODAL,
    payload: {
      id: modalId,
      isVisible: false,
    },
  };
};

export const destroyModal = (modalId) => {
  return {
    type: DESTROY_MODAL,
    payload: {
      id: modalId,
    },
  };
};
