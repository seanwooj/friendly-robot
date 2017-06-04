import React, { Component } from 'react';
import close from '../img/close.svg';
import Isvg from 'react-inlinesvg';


class Nav extends Component {
  render() {
    return (
      <nav className='site-nav'>
          <div className='site-close' onClick={this.props.handleNavClose}>
            <Isvg src={close}>
              { /* }// <img src="/path/to/myfile.png" /> */}
            </Isvg>
            <hr />
          </div>
          <ul className='menu'>
            <li className='menu-section'>Products</li>
            <li><a href='#'>Cutting Board</a></li>
            <li><a href='#'>Serving Tray</a></li>
            <li><a href='#'>Tea Lights</a></li>
            <li><a href='#'>Herb Dish</a></li>
            <li><a href='#'>Coaster</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
