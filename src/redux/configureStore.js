import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer);

export default store;
