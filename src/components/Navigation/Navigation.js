import React from 'react';

const Navigation = () => {
  return(
    <nav className='navbar navbar-dark bg-dark'>
      <a className="navbar-brand" href="#">Face Recognition</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Out</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;