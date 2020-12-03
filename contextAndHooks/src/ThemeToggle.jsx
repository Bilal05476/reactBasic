import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext';
import './index.css';

const ThemeToggle = () => {
    const {toggle} = useContext(ThemeContext);
    return ( 
        <button className='button' onClick={toggle}>Change theme</button>
     );
}
 
export default ThemeToggle;
