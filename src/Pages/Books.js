import { useSelector } from 'react-redux';

import BookItem from '../Components/BookItem';
import AddBook from '../Components/AddBook';

const Books = () => {
  const booksList = useSelector((state) => state.books);
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
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
