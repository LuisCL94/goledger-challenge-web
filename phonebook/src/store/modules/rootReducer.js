import { combineReducers } from 'redux';

import title from "./title/reducer";
import data from './data/reducer';
import isSelectorActive from './isSelectorActive/reducer'

export default combineReducers({
  title, data, isSelectorActive
})