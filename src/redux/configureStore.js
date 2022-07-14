import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
