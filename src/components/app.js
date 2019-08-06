import React from 'react';
import BookList from './bookList/BookList';
import BookDetail from './bookDetail/bookDetail';
import './app.css';



const App = () => {
  return(
    <div className="app-container">
      <BookList />
      <BookDetail />
    </div>
  )

}

export default App;
