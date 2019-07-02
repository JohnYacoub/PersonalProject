import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Particles from 'react-particles-js';
import Characters from './components/Characters'
import './App.css';
import 'tachyons';
import CharacterForm from './components/CharacterForm';

const Particle = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "images",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "images": [
        {src: 'img/iconfinder_morty_2981857.png', height: 50, width: 50},
        {src: 'img/R-ICON.png', height: 50, width: 50},
        // {src: 'img/icons8-rick-sanchez-480.png', height: 50, width: 50},
    ]
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 16.03412060865523,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 160.3412060865523,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 3.206824121731046
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Particles params={Particle} className="particles" />
        <Route exact path='/characters' component={Characters} />
        {/* <Route path='/:id' component={Characters} /> */}
        <Route exact path='/characters/add' component={CharacterForm} />
      </Layout>
      
    );
  }
}
