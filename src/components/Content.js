import React, { Component } from 'react';


class Content extends Component {
  componentDidMount() {
  }

  render() {

    return(
      <div className='six columns'>
        {this.props.content.fields.textContent}
      </div>
    );
  }
}

export default Content;
