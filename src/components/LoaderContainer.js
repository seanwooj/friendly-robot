import React, { Component } from 'react';
var Loader = require('react-loaders').Loader;

class LoaderContainer extends Component {
  render() {
    return (
      <div className='loader-container'>
        <Loader type="line-scale" active />
      </div>
    );
  }
}

export default LoaderContainer;
