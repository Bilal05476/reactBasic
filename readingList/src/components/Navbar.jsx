import React , {useContext} from 'react'
import {BookContext} from './BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books</p>
        </div>
    );
}

export default Navbar;
