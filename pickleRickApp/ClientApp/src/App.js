import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Particles from 'react-particles-js';
import Characters from './components/Characters'
import './App.css';


const Particle = {
  polygon: {
    particles: {
        shape: {
            type: 'images',
            images: [
                {src: 'path/to/first/image.svg', height: 20, width: 20},
                {src: 'path/to/second/image.jpg', height: 20, width: 20},
            ]
        }
    }
}
}

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Particles params={Particle} className="particles" />
        <Route path='/characters' component={Characters} />
      </Layout>
      
    );
  }
}
