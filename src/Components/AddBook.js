import * as React from 'react';

const categoriesList = [
  { key: 1, title: 'Action' },
  { key: 2, title: 'Sience Fiction' },
  { key: 3, title: 'Novel' },
];
const AddBook = () => (
  <div>
    <p>ADD NEW BOOK</p>
    <input type="text" placeholder="Book Title" />
    <select>
      {categoriesList.map((category) => (
        <option key={category.key} value={category.title}>{category.title}</option>
      ))}
    </select>
  </div>
);
export default AddBook;
