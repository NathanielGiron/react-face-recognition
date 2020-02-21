import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
  return(
    <div className='d-flex justify-content-center pt-4'>
      <br/>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner">
          <img className='pt-3 pl-3' style={{width: '80px'}} alt='logo' src={face}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;