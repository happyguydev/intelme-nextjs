import { combineReducers } from 'redux';
import authReducer from './auth';
import messagesReducer from './messages';
import notificationsReducer from './notifications';
import projectReducer from './projects';
import prioritiesReducer from './priorities';
import filesReducer from './files';

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  notifications: notificationsReducer,
  projects: projectReducer,
  priorities: prioritiesReducer,
  files: filesReducer,
});
