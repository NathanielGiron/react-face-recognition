import React from 'react';

const Signin = ({ onRouteChange }) => {
  return(
    <div className='card col-md-3 p-4 mx-auto mt-4' style={{backgroundColor: '#f8f9fa'}}>
      <div>
        <h3>Sign in</h3>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="passwod" placeholder="Password" />
        </div>
        <button onClick={() => onRouteChange('home')} type="submit" className="btn btn-primary">Sign in</button>
        <small onClick={() => onRouteChange('register')} className='btn'>Register</small>
      </div>
    </div>
  );
}

export default Signin;