import axios from 'axios';

const API_URL = 'http://10.0.0.50:5000';

// Notification
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
// Modal
export const DESTROY_MODAL = 'DESTROY_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
// Storage
export const CREATE_STORAGE = 'CREATE_STORAGE';
export const SET_STORAGE_DATA = 'SET_STORAGE_DATA';
// Form
export const CREATE_FORM = 'CREATE_FORM';
export const SET_INPUT = 'SET_INPUT';
// Authentication
export const USER_REGISTER = 'USER_REGISTER';
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';
// People
export const ADD_PERSON = 'ADD_PERSON';
export const GET_PEOPLE = 'GET_PEOPLE';
// Profile Information
export const SET_PROFILE_INFO_OPTIONS = 'SET_PROFILE_INFO_OPTIONS';


/**
 * Notification
 */
export const showNotification = (notification) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: notification,
  };
};


/**
 * Modal
 */
export const showModal = (content, modalId, options = {}) => {
  const defaultOptions = {
    type: 'DEFAULT',
    title: null,
  };

  const id = modalId || `modal_${new Date().getTime()}`;
  return {
    id,
    type: SHOW_MODAL,
    payload: {
      id,
      content,
      isVisible: true,
      options: {
        ...defaultOptions,
        ...options,
      },
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


/**
 * Storage
 */
export const createStorage = (database = 'default', table = 'default') => {
  return {
    type: CREATE_STORAGE,
    payload: {
      database,
      table,
    },
  };
};

export const setStorageData = (data = {}, database = 'default', table = 'default') => {
  return {
    type: SET_STORAGE_DATA,
    payload: {
      database,
      table,
      data,
    },
  };
};


/**
 * Form Input
 */
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
 * User Authentication
 */
export const registerUser = async (user) => {
  const endpoint = `${API_URL}/user`;
  try {
    const registerUserRequest = await axios.post(endpoint, user);
    return {
      type: USER_REGISTER,
      payload: registerUserRequest,
    };
  } catch (error) {
    return showNotification({
      type: 'ERROR',
      title: 'ERROR',
      message: error.response.data.error,
    });
  }
};

export const signin = async (user) => {
  const endpoint = `${API_URL}/user/login`;
  try {
    const signinUserRequest = await axios.post(endpoint, user);
    localStorage.setItem('token', signinUserRequest.data.token);
    return {
      type: USER_SIGNIN,
      payload: signinUserRequest,
    };
  } catch (error) {
    return showNotification({
      type: 'ERROR',
      title: 'ERROR',
      message: error.response.data.error,
    });
  }
};

export const signout = () => {

};


/**
 * People/Directory
 */
export const getPeople = async (query) => {
  const endpoint = `${API_URL}/person`;
  try {
    const getPeopleRequest = await axios.get(endpoint, {
      params: query,
    });
    return {
      type: GET_PEOPLE,
      payload: getPeopleRequest,
    };
  } catch (error) {
    return showNotification({
      type: 'ERROR',
      title: 'ERROR',
      message: error.response.data.error,
    });
  }
};

export const addPerson = async (person) => {
  const endpoint = `${API_URL}/person`;
  try {
    const addPersonRequest = await axios.post(endpoint, person);
    return {
      type: ADD_PERSON,
      payload: addPersonRequest,
    };
  } catch (error) {
    return showNotification({
      type: 'ERROR',
      title: 'ERROR',
      message: error.response.data.error,
    });
  }
};


/**
 * Profile Information
 */
export const setProfileInfoOptions = (options = {}) => {
  return {
    type: SET_PROFILE_INFO_OPTIONS,
    payload: {
      options,
    },
  };
};
