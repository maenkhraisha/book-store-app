import { useDispatch, useSelector } from 'react-redux';

import BookItem from '../Components/BookItem';
import AddBook from '../Components/AddBook';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {booksList.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            author={book.author}
            onRemove={() => dispatch(removeBook(book.id))}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
