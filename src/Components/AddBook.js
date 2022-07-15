import { useDispatch, useSelector } from 'react-redux';
import { addBookMiddleware } from '../redux/middleware';
import '../Styles/add-book.css';

// const categoriesList = [
//   { id: 1, title: 'Action' },
//   { id: 2, title: 'Sience Fiction' },
//   { id: 3, title: 'Novel' },
// ];
const AddBook = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookTilteElement = event.target.elements.bookTitle;
    const bookAuthorElement = event.target.elements.bookAuthor;
    const bookCategoryElement = event.target.elements.bookCategory;

    let bookId = parseInt(booksList.length + 1, 10);

    addBookMiddleware(dispatch, {
      id: bookId,
      title: bookTilteElement.value,
      author: bookAuthorElement.value,
      category: bookCategoryElement.value,
    });

    bookId = '';
    bookTilteElement.value = '';
    bookAuthorElement.value = '';
    bookCategoryElement.value = '';
  };
  return (
    <form className="add-book-container" onSubmit={handleSubmit}>
      <p>ADD NEW BOOK</p>
      <div className="input-field-container">
        <input type="text" placeholder="Book Title" name="bookTitle" required />
        <input type="text" placeholder="Book Author" name="bookAuthor" required />
        <input type="text" placeholder="Book Category" name="bookCategory" required />
        {/* <select>
        {categoriesList.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select> */}
        <input type="submit" value="ADD BOOK" />
      </div>
    </form>
  );
};

export default AddBook;
