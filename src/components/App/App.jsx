import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookList();
  }, [])

  // TODO - GET Book List from server
  const fetchBookList = () => {
    axios.get('/books') 
      .then(response => {
        dispatch({type: 'SET_BOOK_LIST', payload: response.data})
      }).catch((err) => {
        console.log('error is', err)
        alert('NO TO THAT!');
      })
  }

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;