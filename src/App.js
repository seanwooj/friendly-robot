import React, { Component } from 'react';
import Router from 'react-router/Router';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Overlay from './components/Overlay.js';
import Content from './components/Content.js';
import LoaderContainer from './components/LoaderContainer.js';
import { client } from './Client.js';

const history = createHistory();

class App extends Component {
  state = {
    navIsOpen: false,
    hasFetched: false
  };

  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    client.fetchPage('/').then((page) => {
      console.log(page);
      this.setState({
        hasFetched: true,
        page: page
      })
    })
  }

  toggleNav() {
    this.setState({
      navIsOpen: !(this.state.navIsOpen)
    });
  };

  render() {
    let classNames = ['App'];
    if(this.state.navIsOpen) classNames.push('menu-open');
    if(!this.state.hasFetched) classNames.push('loading');
    return (
      <Router history={history}>
        <div className={classNames.join(' ')}>
          <Header
            handleNavOpen={this.toggleNav}
          />
          <Nav
            handleNavClose={this.toggleNav}
          />
          {(this.state.hasFetched) ?
            <Content
              content={this.state.page}
              hasFetched={this.state.hasFetched}
            />
          :
            <LoaderContainer />
          }
          <Overlay
            handleNavClose={this.toggleNav}
          />
        </div>
      </Router>
    );
  }
}

export default App;
