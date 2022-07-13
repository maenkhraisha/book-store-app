import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
