const getURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/';

export const fetchBooks = async () => fetch(getURL).then(async (response) => {
  if (response.ok) {
    try {
      const data = await response.json();
      const books = [];
      Object.entries(data).forEach(([id, book]) => books.push({
        id,
        category: book[0].category,
        title: book[0].title,
        author: book[0].author,
      }));
      return books;
    } catch (e) {
      return [];
    }
  }
  return null;
});

export const sendBook = (book) => {
  fetch(getURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const deleteBook = (bookID) => {
  fetch(getURL + bookID, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
};
