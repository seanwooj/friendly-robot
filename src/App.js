import React, { Component } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Overlay from './components/Overlay.js';
import Content from './components/Content.js';
import ContentfulClient from './lib/ContentfulClient.js'

class App extends Component {
  state = {
    navIsOpen: false,
  };

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.client = new ContentfulClient();
  }

  componentDidMount() {

    // this may be useful in the constructor. peek into the book to make sure
    // this follows best practices.
    this.client.fetchPages().then(function(pages){
      this.setState(pages);
    }.bind(this))
  }

  toggleNav() {
    this.setState({
      navIsOpen: !(this.state.navIsOpen)
    });

    console.log('toggled!');
    console.log('navIsOpen:' + this.state.navIsOpen)
  };

  render() {
    let classNames = ['App'];
    if(this.state.navIsOpen) classNames.push('menu-open');

    return (
      <div className={classNames.join(' ')}>
        <Header
          handleNavOpen={this.toggleNav}
        />
        <Nav
          handleNavClose={this.toggleNav}
        />
        <Content
          titleText='Design for Humans'
        />
        <Overlay
          handleNavClose={this.toggleNav}
        />
      </div>
    );
  }
}

export default App;
