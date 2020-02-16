import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Logo />
      </div>

      {/*
      <ImageLinkForm />
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
