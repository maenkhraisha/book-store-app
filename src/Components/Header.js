import { Link } from 'react-router-dom';
import '../Styles/header.css';

const Header = () => (
  <div className="header-container">
    <h2 className="title">Bookstore CMS</h2>
    <div className="links-container">
      <Link to="/books" className="links">
        BOOKS
      </Link>
      <Link to="/categories" className="links">
        CATEGORIES
      </Link>
    </div>
  </div>
);

export default Header;
