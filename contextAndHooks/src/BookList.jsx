import React, {useContext} from 'react';
import './index.css';
import { ThemeContext } from './ThemeContext';
import { BookContext } from './BookContext';

const BookList = () => {
  const {isLightTheme, dark, light} = useContext(ThemeContext);
  const {books} = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='booklist' style={{background: theme.bg, color: theme.syntax}}>
          <ul>
            {books.map(book =>{
              return(
                <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
              )
            })}
          </ul>
      </div>
  );
}

export default BookList;