import React, { Component } from 'react';
import Content from './Content.js'

class ContentBlock extends Component {
  state = {
    content: []
  }

  componentDidMount() {
    this.setState({
      content: this.props.content.fields.content,
    });

  }

  createContentElement = (contentData) => {
    return contentData.map((data, index) => {
      return( <Content key={index} content={data} />);
    });
  }

  render () {
    const contentEls = this.createContentElement(this.state.content);
    return(
      <div className='container'>
        {contentEls}
      </div>
    )
  }
}

export default ContentBlock;
