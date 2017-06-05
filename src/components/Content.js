import React, { Component } from 'react';
import ContentHeader from './ContentHeader'

class Content extends Component {

  render() {
    return(
      <div id='content'>
        <ContentHeader
          hasFetched={this.props.hasFetched}
          content={this.props.content.fields.headerBlock}
        />
      </div>
    );
  }
}

export default Content;
