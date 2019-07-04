import React, {Component} from 'react';
import {Container, NavbarBrand, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render () {
    return (
      <header>
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img
              alt="rick-log"
              src="img/rick-and-morty-folder-logo.png"
              style={{width: '50px', height: '50px'}}
            />
          </NavbarBrand>
          <h2 class=" tc mt2 mb0 f6 fw9 ttu tracked dark-red">
            wubba lubba dub dub
          </h2>
          <nav className="bt bb tc mw7 center mt4">

            <NavLink
              tag={Link}
              className=" 
              navy b f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              tag={Link}
              className=" 
              navy b f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
              to="/characters"
            >
              Characters
            </NavLink>
            <NavLink
              tag={Link}
              className="
              navy b f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
              to="/videos"
            >
              Videos
            </NavLink>

          </nav>
        </Container>
      </header>
    );
  }
}
