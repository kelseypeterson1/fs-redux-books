import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function BookForm({fetchBookList}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, { title, author });

    // TODO - axios request to server to add book
    axios.post('/books', { title, author })
      .then(response => {
        setTitle('');
        setAuthor('');
        fetchBookList();
      }).catch(err => {
        console.log('error is', err);
        alert(`ALERT! I love crossfit!💪`)
      })
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;