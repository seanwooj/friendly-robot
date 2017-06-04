import React from 'react';

class ContentHeader extends React.Component {

  // it is entirely possible that this is not the best place to put this.
  state = {
    windowHeight: 0,
    windowWidth: 0,
    // this needs to be moved at some point, and replaced with a more sane system
    bgImgUrl: 'https://images.contentful.com/4bfme0qry1sf/1CG9CuGWEgOOi6EygYcyG2/c332b163d8358b70eecc8079fe86c2b1/introduction_img3.jpg'
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  render() {
    const styles = {
      height: this.state.windowHeight,
      width: this.state.windowWidth
    };

    return(
      <div className='content-header' style={styles}>
        <div className='content-header-container' style={{'backgroundImage': 'url(' + this.state.bgImgUrl + ')'}}>
          <div className='content-header-radial'>
            <div className='container'>
              <div className='row'>
                <div className='content-header-title' style={{'lineHeight': this.state.windowHeight + 'px'}}>
                  <h1>{this.props.titleText}</h1>
                </div>
                <div className='content-header-subtitle'>{this.props.subtitleText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
