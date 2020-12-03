import React , {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books , setBooks ] = useState([]);
    useEffect(() =>{
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4() }])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return ( 
        <BookContext.Provider value={{books , addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;