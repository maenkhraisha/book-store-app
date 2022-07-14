import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import BookItem from '../Components/BookItem';
import AddBook from '../Components/AddBook';
import {
  remoevBookMiddleware,
  fetchBooksMiddleware,
} from '../redux/middleware';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksMiddleware);
  }, []);
  return (
    <div>
      <ul>
        {booksList.map((book) => (
          <BookItem
            key={book.id}
            id={parseInt(book.id, 10)}
            title={book.title}
            category={book.category}
            author={book.author}
            onRemove={() => remoevBookMiddleware(dispatch, book.id)}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
