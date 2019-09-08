import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Label
} from 'recharts';

const data = [
  {
    name:'3/1', Total: 15,
  },
  {
    name:'3/2', Total: -10,
  },
   {
    name:'3/3', Total: -10,
   },
   {
    name:'3/4', Total: 14,
   },
   {
    name:'3/5', Total: -1,
   },
   {
    name:'3/6', Total: 2,
   },
   {
     name:'3/7', Total: -15,
   },
   {
    name:'3/8', Total: 15,
  },
  {
    name:'3/9', Total: -10,
  },
   {
    name:'3/10', Total: -10,
   },
   {
    name:'3/11', Total: 14,
   },
   {
    name:'3/12', Total: -1,
   },
   {
    name:'3/13', Total: 2,
   },
   {
     name:'3/14', Total: -15,
   },


];
class Net extends Component {

  render() {
    return (
      <div>
          <h1>Net Change</h1>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', height: '500px', paddingRight:"50px"}}  >
          <BarChart data={data}width={750} height={200} type={"bar"}
          >
            < XAxis dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    />
            <YAxis width={50}> <Label value="$" /> </YAxis>
        />
            <ReferenceLine y={0} stroke="#000" />
            <Tooltip/>
       <Bar dataKey="Total">
            {
                data.map((entry, index) => {
                  const result = entry.Total >  0 ? '#33cc33' : '#cc3333';
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
