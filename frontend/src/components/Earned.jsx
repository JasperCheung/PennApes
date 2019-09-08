import React, { Component } from 'react';

class Earned extends Component {

  render() {
    return (
      <div>
        <h2>
          On 8/23/19, you were paid ${this.props.earnings}
        </h2>
      </div>
    );
  }
};

export default Earned;
