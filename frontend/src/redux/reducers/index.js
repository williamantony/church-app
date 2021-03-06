import { combineReducers } from 'redux';
import storage from './storage.reducer';
import form from './form.reducer';
import modal from './modal.reducer';
import notification from './notification.reducer';
import user from './user.reducer';
import people from './people.reducer';
import profileInfo from './profileInfo.reducer';

export default combineReducers({
  storage,
  form,
  modal,
  notification,
  user,
  people,
  profileInfo,
});
