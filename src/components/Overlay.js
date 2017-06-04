import React, { Component } from 'react';


class Overlay extends Component {
  generateLinks = () => {
    return
  }

  render() {
    return (
      <div className='overlay' display={this.props.navIsOpen} onClick={this.props.handleNavClose}></div>
    );
  }
}

export default Overlay;
