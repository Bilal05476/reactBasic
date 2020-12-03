import React, {useContext} from 'react';
import './index.css';
import { ThemeContext } from './ThemeContext';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const { isAuthenticated , toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return(
    <nav className="navbar" style={{background: theme.ui, color: theme.syntax}}>
      <h1>Context API</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged in ' : 'Logged out'}
      </div>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
