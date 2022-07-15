import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import '../Styles/book-item.css';

const BookItem = ({
  id,
  title,
  category,
  author,
  onRemove,
}) => (
  <li key={id}>
    <div className="book-item-container">
      <div className="book-info-container">
        <p className="book-category">{category}</p>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="button-container">
          <button type="button">comment</button>
          <span />
          <button type="button" onClick={onRemove}>
            remove
          </button>
          <span />
          <button type="button">edit</button>
        </div>
      </div>
      <div className="circular-progressbar progress">
        <CircularProgressbar className="progresBar" value={50} />
      </div>
      <div className="progress-text-container">
        <span className="persentage-text">0%</span>
        <span className="completed-text">Completed</span>
      </div>
      <div className="progress-chapter-container">
        <span className="current-chapter-text">CURRENT CHAPTER</span>
        <span className="chapter-number-text">Chapter 17</span>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </li>
);

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BookItem;
