import React from 'react';

const Register = ({ onRouteChange }) => {
  return(
    <div className='card col-md-3 p-4 mx-auto mt-4' style={{backgroundColor: '#f8f9fa'}}>
      <div>
        <h3>Register</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button onClick={() => onRouteChange('home')} type="submit" className="btn btn-primary">Register</button>
        <small onClick={() => onRouteChange('signin')} className='btn'>Signin</small>
      </div>
    </div>
  );
}

export default Register;