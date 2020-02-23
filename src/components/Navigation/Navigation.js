import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if(isSignedIn) {
    return(
      <nav className='navbar navbar-dark bg-dark'>
        <span className="navbar-brand">Face Recognition</span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span onClick={() => onRouteChange('signout')} className="btn text-white">Sign Out</span>
          </li>
        </ul>
      </nav>
    );
  } else {
    return(
      <nav className='navbar navbar-dark bg-dark'>
        <span className="navbar-brand">Face Recognition</span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span onClick={() => onRouteChange('signin')} className="btn text-white">Signin</span>
            <span onClick={() => onRouteChange('register')} className="btn text-white">Register</span>
          </li>
        </ul>
      </nav>
    );
  }
  
}

export default Navigation;