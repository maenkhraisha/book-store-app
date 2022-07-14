import { sendBook, deleteBook, fetchBooks } from './API';
import { addBook, removeBook, loadBooks } from './books/books';

export const fetchBooksMiddleware = (dispatch) => {
  fetchBooks().then((data) => dispatch(loadBooks(data)));
};

export const addBookMiddleware = (dispatch, book) => {
  sendBook(book);
  dispatch(addBook(book));
};

export const remoevBookMiddleware = (dispatch, id) => {
  deleteBook(id);
  dispatch(removeBook(id));
};
