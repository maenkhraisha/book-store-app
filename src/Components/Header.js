import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <h2>BOOK STORE</h2>
    <Link to="/books">BOOKS</Link>
    <span> | </span>
    <Link to="/categories">CATEGORIES</Link>
  </>
);

export default Header;
