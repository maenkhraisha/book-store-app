import * as React from 'react';

const categoriesList = [
  { id: 1, title: 'Action' },
  { id: 2, title: 'Sience Fiction' },
  { id: 3, title: 'Novel' },
];
const AddBook = () => (
  <div>
    <p>ADD NEW BOOK</p>
    <input type="text" placeholder="Book Title" />
    <select>
      {categoriesList.map((category) => (
        <option key={category.id} value={category.title}>{category.title}</option>
      ))}
    </select>
    <button type="button">ADD BOOK</button>
  </div>
);
export default AddBook;
