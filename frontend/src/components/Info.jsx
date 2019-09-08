import React, { Component } from 'react';

import pig from '../images/pig.png';

class Info extends Component {

  render() {
    return (
      <div>
        <center>
          <h1>Info</h1>
          <h5>A short, meaningful, personal finance experience.</h5>
          <h5>Learn the story of how your money is earned, spent, and saved.</h5>
          <a href="/home">
            <img src={pig} />
          </a>
        </center>
      </div>
      );
  }
};

export default Info;
