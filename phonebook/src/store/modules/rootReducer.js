import { combineReducers } from 'redux';

import title from "./title/reducer";
import data from './data/reducer';
import isSelectorActive from "./isSelectorActive/reducer";
import allContacts from "./allContacts/reducer";
import allCompanies from "./allCompanies/reducer";
import test from "./test/reducer";

export default combineReducers({
  title, data, isSelectorActive, allContacts, allCompanies, test
})