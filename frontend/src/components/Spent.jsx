import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

import words from '../data/words.json';

const options = {
    rotations: 0,
    fontSizes: [20, 60],
    fontFamily: 'sans',
};

class Spent extends Component {
  render() {
    console.log(words);
    return (
      <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
        <ReactWordcloud size={[500, 500]} words={words} options={options} />
      </div>
      );
  }
};

export default Spent;
