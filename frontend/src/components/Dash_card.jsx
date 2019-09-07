import React, { Component } from 'react';

const green = {
    color: 'green',
}

const red = {
    color: 'red',
}

class DashCard extends Component {
    // props: k (string), v (int), showpercentage (bool), percentage (int), reverse (bool)
    // example: "Spent", 70, true, 5, false

    // FIXME terrible hack
    cond_red(x) {
        return x < 0 ? <span style={red}>-${Math.abs(x)}</span> : <span>${x}</span>;
    }

    more_or_less(x) {
        return x === 0 ? <span>the</span> :
            (x < 0) ?
            <span style={this.props.reverse ? green : red}>less than</span> :
            <span style={this.props.reverse ? red : green}>more than</span>;
    }

    render() {
        return <div>
            <span>{this.props.k}:</span>&nbsp;
            <span>
                {this.cond_red(this.props.v)}&nbsp;
                {this.props.showpercentage &&
                        <span>(
                            {this.props.percentage ?
                                <span>
                                {Math.abs(this.props.percentage)}%&nbsp;
                                {this.more_or_less(this.props.percentage)}
                                </span> :
                                <span>the</span>} usual)</span>
                }
            </span>
        </div>;
    }
}

export default DashCard;
