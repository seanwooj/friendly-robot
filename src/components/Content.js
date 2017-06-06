import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


class Content extends Component {
  componentDidMount() {
  }

  render() {

    return(
      <div className='content six columns'>
        <ReactMarkdown source={this.props.content.fields.textContent} />
      </div>
    );
  }
}

export default Content;
