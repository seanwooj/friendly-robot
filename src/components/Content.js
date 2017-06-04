import React, { Component } from 'react';
import ContentHeader from './ContentHeader'

class Content extends Component {


  render() {
    return(
      <div id='content'>
        <ContentHeader
          titleText={this.props.titleText}
        />
      </div>
    );
  }
}

export default Content;
