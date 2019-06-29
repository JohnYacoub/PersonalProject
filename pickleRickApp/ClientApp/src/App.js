import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Particles from 'react-particles-js';
import Characters from './components/Characters'
import './App.css';
import 'tachyons';


const Particle = {

    particles: {
        shape: {
            type: 'images',
            images: [
                {src: 'img/rick-and-morty-folder-logo.png', height: 50, width: 50},
                {src: 'img/rick-and-morty-folder-logo.png', height: 50, width: 50},
            ]
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
