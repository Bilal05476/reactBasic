import React from 'react';
import ThemeContextProvider from './ThemeContext';
import BookContextProvider from './BookContext';
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeToggle from './ThemeToggle';
import AuthContextProvider from './AuthContext';
//import { SongList } from './Component/SongList';

function App() {
  return(
    //Hooks
    // <>
    // <SongList />
    // </>

  // Context Coding
    <div>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>  
  )
}

export default App;



