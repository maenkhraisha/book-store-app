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
      <div key={book.key} className="book-item-container">
        <h2 key={book.key}>{book.category}</h2>
        <h1 key={book.key}>{book.title}</h1>
        <h3 key={book.key}>{book.author}</h3>
        <button key={book.key} type="button">comment</button>
        <button key={book.key} type="button">remove</button>
        <button key={book.key} type="button">edit</button>
      </div>
    ))}
  </div>
);

export default BookItem;
