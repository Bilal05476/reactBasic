import React from 'react';
import BookContextProvider from './components/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Bookform from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <Bookform />
      </BookContextProvider>
    </div>
  );
}

export default App;
