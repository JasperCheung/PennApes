import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Pie, PieChart, Tooltip } from 'recharts';

import words from '../data/words.json';
import categories from '../data/categories.json';

const options = {
    rotations: 0,
    fontSizes: [20, 60],
    fontFamily: 'sans',
};

const data = (() => {
  let d = [];

  for (const [k, v] of Object.entries(words)) {
    d.push({ 'text': k, 'value': v, });
  }

  return d;
})();

class Spent extends Component {
    genData() {
        let d = [];

        for (const [k, v] of Object.entries(words)) {
            d.push({ 'text': k, 'value': v, });
        }

        this.setState({ data: d });
    }

    getCategoryData() {
        let d = [];

        for (const [cat, v] of Object.entries(categories)) {
            const total = v.reduce((acc, cur) => acc + (words[cur] || 0), 0);
            total && d.push({ 'text': cat, 'value': parseFloat(total.toFixed(2)) });
        }

        return d.reverse();
    }

    componentWillMount() {
        this.genData();
    }

    renderLabel({name}) {
        return name;
    }

    render() {
        return (
            <div>
          <h1>Spending</h1>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <ReactWordcloud size={[700, 500]} words={this.state.data} options={options} />

                <PieChart width={550} height={550}>
                    <Pie data={data} dataKey="value" nameKey="text" cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#8884d8" />
                    <Pie data={this.getCategoryData()} dataKey="value" nameKey="text" cx="50%" cy="50%" innerRadius={110} outerRadius={140} fill="#82ca9d" label={this.renderLabel} />
                    <Tooltip />
                </PieChart>
                </div>
            </div>
        );
    }
};


export default Spent;
