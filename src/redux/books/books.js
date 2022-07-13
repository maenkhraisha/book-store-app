const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collinse',
  },
  {
    id: 2,
    title: 'Dune',
    category: 'Science Fiction',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Dune',
    category: 'Science Fiction',
    author: 'Frank Herbert',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([...state, action.payload]);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
