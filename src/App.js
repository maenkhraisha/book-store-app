import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './Pages/Books';
import Categories from './Pages/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
