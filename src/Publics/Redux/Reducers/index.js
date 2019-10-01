import {combineReducers} from 'redux';

import user from './user';
import packages from './package';
import category from './category';

const rootReducer = combineReducers({
  user,
  packages,
  category,
});

export default rootReducer;
