import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './Pages/Books';
import Categories from './Pages/Categories';
import Header from './Components/Header';

import './Styles/main.css';

function App() {
  return (
    <div className="main-page">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
