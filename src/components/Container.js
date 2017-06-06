import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import ContentBlock from './ContentBlock';


class Container extends Component {

  state = {
    contentBlocks: []
  }

  componentDidMount() {
    this.setState({
      contentBlocks: this.props.content.fields.contentBlock
    });

  }

  createContentBlockElements = (contentBlockData) => {
    return contentBlockData.map((data, index) => {
      return( <ContentBlock key={index} content={data} />);
    })
  }


  render() {
    const contentBlockEls = this.createContentBlockElements(this.state.contentBlocks);

    return(
      <div id='container'>
        <ContentHeader
          hasFetched={this.props.hasFetched}
          content={this.props.content.fields.headerBlock}
        />

        { contentBlockEls }
      </div>
    );
  }
}

export default Container;
