import React, { Component } from 'react';
import close from '../img/close.svg';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';


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
            <li><Link to='/cutting-board'>Cutting Board</Link></li>
            <li><Link to='/serving-tray'>Serving Tray</Link></li>
            <li><Link to='/tea-light'>Tea Lights</Link></li>
            <li><Link to='/herb-dish'>Herb Dish</Link></li>
            <li><Link to='/coaster'>Coaster</Link></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
