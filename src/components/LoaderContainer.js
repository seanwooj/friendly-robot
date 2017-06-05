import React, { Component } from 'react';
var Loader = require('react-loaders').Loader;

class LoaderContainer extends Component {
  state = {
    windowWidth: 0,
    windowHeight: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  render() {
    const styles = {
      height: this.state.windowHeight,
      width: this.state.windowWidth
    };

    return (
      <div className='loader-container' style={styles}>
        <div className='loader-inner'>
          <Loader type="ball-scale-ripple-multiple" active />
        </div>
      </div>
    );
  }
}

export default LoaderContainer;
