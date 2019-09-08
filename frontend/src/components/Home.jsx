import React, { Component } from 'react';

import TrackVisibility from 'react-on-screen';

import Summary from './Summary';
import Earned from './Earned';
import Spent from './Spent';
import Net from './Net';

import pigEarning from '../images/pig-earning.gif';
import pigSpending from '../images/pig-spending.gif';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePig: pigEarning,
      counter: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.counter === 1) {
      return;
    }
    if (window.scrollY < 700) {
      this.setState({activePig: pigEarning});
    } else if (window.scrollY < 1700) {
      this.setState({counter: this.state.counter + 1});
      this.setState({activePig: pigSpending});
    } else {
      this.setState({activePig: pigSpending});
    }
  }

  render() {
    const options = {
      onChange: this.handleIntersection,
      root: "#home-container",
      rootMargin: "0% 0% -25%",
    };

    return (
      <div id="home-container" onScroll={this.handleScroll}>
        <div id="info">
          <Summary />
          <Spent />
          <Net />
        </div>
        <div id="anim-div">
          <img id="fixed-element" src={this.state.activePig} />
        </div>
      </div>
      );
}
};

export default Home;
