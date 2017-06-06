import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


class Content extends Component {
  state = {
    colWidth: 'six'
  }

  componentDidMount() {
    const colWidth = this.props.content.fields.columnWidth;
    if(colWidth) this.setState({colWidth: colWidth});
  }

  createClasses = () => {
    let classes = ['content', 'columns'];

    if(this.state.colWidth) {
      classes.push(this.state.colWidth)
    }

    return classes;
  }

  render() {
    const classes = this.createClasses();

    return(
      <div className={classes.join(' ')}>
        <ReactMarkdown source={this.props.content.fields.textContent} />
      </div>
    );
  }
}

export default Content;
