import { combineReducers } from 'redux';
import form from './form.reducer';
import modal from './modal.reducer';

export default combineReducers({
  form,
  modal,
});
