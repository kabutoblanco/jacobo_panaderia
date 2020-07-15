import { combineReducers } from 'redux';

import auth from './auth';
import inventory from './inventory';
import cart from './cart'
import menu from './menu';
import messages from './messages';
import errors from './errors';

export default combineReducers({
  auth,
  cart,
  inventory,
  menu,
  messages,
  errors,
});
