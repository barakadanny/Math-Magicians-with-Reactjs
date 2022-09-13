import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Math Magician</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/quote'>Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
