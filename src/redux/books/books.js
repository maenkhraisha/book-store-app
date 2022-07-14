const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOK = 'books/LOAD_BOOKS';

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}

export function loadBooks(books) {
  return { type: LOAD_BOOK, payload: books };
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case LOAD_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
