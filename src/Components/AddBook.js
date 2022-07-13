import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';
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
    console.log(bookId);

    dispatch(
      addBook({
        id: bookId,
        title: bookTilteElement.value,
        author: bookAuthorElement.value,
        category: bookCategoryElement.value,
      }),
    );

    bookId = '';
    bookTilteElement.value = '';
    bookAuthorElement.value = '';
    bookCategoryElement.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>ADD NEW BOOK</p>
      <input type="text" placeholder="Book Title" name="bookTitle" />
      <input type="text" placeholder="Book Author" name="bookAuthor" />
      <input type="text" placeholder="Book Category" name="bookCategory" />
      {/* <select>
        {categoriesList.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select> */}
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default AddBook;
