import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import app from './app';
import auth from './auth';
import nav from './nav';
import migration from './migration';

export default combineReducers({
  app,
  auth,
  form,
  nav,
  migration,
});
