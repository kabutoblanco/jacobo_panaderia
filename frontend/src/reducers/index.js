import { combineReducers } from 'redux';

import auth from './auth';
import menu from './menu';
import messages from './messages';
import errors from './errors';

export default combineReducers({
  auth,
  menu,
  messages,
  errors,
});
