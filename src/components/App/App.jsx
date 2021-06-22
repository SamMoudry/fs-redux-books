import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookCSV from '../BookCSV/BookCSV.jsx';

import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const fetchBookList = () => {
    axios.get('/books')
      .then(response => {
        //Send to reducer
        dispatch({type: 'SET_BOOK_LIST', payload: response.data});
      })
      .catch(error => {
        console.log('Error getting books', error);
        alert(`Sorry. Things aren't working at the moment. Try again later`)
      })
  }
  // TODO - GET Book List from server
  useEffect(()=> {
    fetchBookList();
  })

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
        <BookCSV />
      </main>
    </div>
  );
}

export default App;