const bookList = [
  {
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collinse',
    completed: 80,
  },
  {
    id: 2,
    title: 'Dune',
    category: 'Science Fiction',
    author: 'Frank Herbert',
    completed: 80,
  },
];
const BookItem = () => (
  <div>
    {bookList.map((book) => (
      <div key={book.id} className="book-item-container">
        <h2>{book.category}</h2>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <button type="button">comment</button>
        <button type="button">remove</button>
        <button type="button">edit</button>
      </div>
    ))}
  </div>
);

export default BookItem;
