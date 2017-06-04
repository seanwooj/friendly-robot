import React, { Component } from 'react';
import logo from '../img/logo.svg';
import menuIcon from '../img/menu.svg';
import Isvg from 'react-inlinesvg';


class Header extends Component {

  render() {
    return (
      <header className='header top-bar'>
        <div className='container'>
          <div className='row'>
            <div className='logo'>

              <Isvg src={logo}>
                { /* }// <img src="/path/to/myfile.png" /> */}
              </Isvg>
              <a href='#'>Friendly Robot</a>
            </div>

            <div className='menu-icon' onClick={this.props.handleNavOpen}>
              <Isvg src={menuIcon}>
                { /* }// <img src="/path/to/myfile.png" /> */}
              </Isvg>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
