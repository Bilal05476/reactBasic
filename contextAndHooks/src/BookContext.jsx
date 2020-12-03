import React, { createContext } from 'react'
import { useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of Wind', id: 0},
        { title: 'name of King', id: 1},
        { title: 'name of Queen', id: 2},
        { title: 'name of Country', id: 3}
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
