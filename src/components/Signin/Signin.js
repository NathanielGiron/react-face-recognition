import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }
  
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }
  
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data==='success') {
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return(
      <div className='card col-md-3 p-4 mx-auto mt-4' style={{backgroundColor: '#f8f9fa'}}>
        <div>
          <h3>Sign in</h3>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="passwod" 
              placeholder="Password" 
              onChange={this.onPasswordChange}
            />
          </div>
          <button onClick={this.onSubmitSignIn} type="submit" className="btn btn-primary">Sign in</button>
          <small onClick={() => this.props.onRouteChange('register')} className='btn'>Register</small>
        </div>
      </div>
    );
  } 
}

export default Signin;