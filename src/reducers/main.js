import { combineReducers } from 'redux';
import categoryReducer from './category';
import expensesReducer from './expense';

export default combineReducers({
  categories: categoryReducer, expenses: expensesReducer,
});
