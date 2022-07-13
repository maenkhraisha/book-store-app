import PropTypes from 'prop-types';

const BookItem = ({
  id,
  title,
  category,
  author,
}) => (
  <li key={id}>
    <div className="book-item-container">
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <div className="button-container">
        <button type="button">comment</button>
        <button type="button">remove</button>
        <button type="button">edit</button>
      </div>
    </div>
  </li>
);

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
