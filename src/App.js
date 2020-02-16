import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    </div>
  );
}

export default App;
