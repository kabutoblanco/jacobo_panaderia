import { combineReducers } from 'redux';

import auth from './auth';
import inventory from './inventory';
import menu from './menu';
import messages from './messages';
import errors from './errors';

export default combineReducers({
  auth,
  inventory,
  menu,
  messages,
  errors,
});
