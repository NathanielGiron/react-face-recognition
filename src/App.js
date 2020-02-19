import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './bootstrap.min.css';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'de85eb435b1649d093462272bf36bce0'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true});
    } else {
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }

  render() {
    const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={ this.onRouteChange } />
        { route === 'home'
        ? <div>
            <div className="container">
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={ this.onInputChange } 
                onButtonSubmit={ this.onButtonSubmit } 
              />
              <FaceRecognition box={ box } imageUrl={ imageUrl } />
            </div>
          </div>
        : (
          route === 'signin'
          ? <Signin onRouteChange={ this.onRouteChange } />
          : <Register onRouteChange={ this.onRouteChange } />
          )
        }
      </div>
    );
  }
}

export default App;
