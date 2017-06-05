import React, { Component } from 'react';
import Router from 'react-router/Router';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Overlay from './components/Overlay.js';
import Content from './components/Content.js';
import ContentfulClient from './lib/ContentfulClient.js'

const history = createHistory();

class App extends Component {
  state = {
    navIsOpen: false,
  };

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {

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
      <Router history={history}>
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
      </Router>
    );
  }
}

export default App;
