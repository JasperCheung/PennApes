import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from 'recharts';

const data = [
  {
    name:'3/1', bal: 10,
  },
  {
    name:'3/2', bal: -10,
  },
   {
    name:'3/3', bal: -10,
   },
   {
    name:'3/4', bal: 10,
   },
   {
    name:'3/5', bal: -10,
   },
   {
    name:'3/6', bal: 10,
   },
   {
     name:'3/7', bal: -10,
   },

];
class Net extends Component {

  render() {
    return (
      <div>
        <p>Net</p>
        <div>
          <BarChart data={data}width={600} height={200} type={"bar"}
          >
            < XAxis dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    />
            <YAxis />
            <ReferenceLine y={0} stroke="#000" />

       <Bar dataKey="bal">
            {
                data.map((entry, index) => {
                  const result = entry.bal >  0 ? '#33cc33' : '#cc3333';
                  return <Cell fill={result} />;
                })
              }
            </Bar>
          </BarChart>
        </div>
      </div>
    );
  }
};

export default Net;
