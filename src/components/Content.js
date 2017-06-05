import React, { Component } from 'react';
import ContentHeader from './ContentHeader'

class Content extends Component {

  render() {
    return(
      <div id='content'>
        <ContentHeader
          hasFetched={this.props.hasFetched}
          titleText={this.props.titleText}
        />
      </div>
    );
  }
}

export default Content;
