const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  console.log('remove me', id);
  return { type: REMOVE_BOOK, payload: id };
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
