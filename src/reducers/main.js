import { combineReducers } from 'redux';
import categoryReducer from './category';
import cardReducer from './card';

export default combineReducers({
  categoryReducer, cardReducer,
});
