import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Graph = () => {
  const data = [
    {
      name: "M",
      value: "0",
    },
    {
      name: "T",
      value: "3",
    },
    {
      name: "W",
      value: "2",
    },
    {
      name: "T",
      value: "2",
    },
    {
      name: "F",
      value: "4",
    },
    {
      name: "S",
      value: "2.5",
    },
    {
      name: "S",
      value: "0",
    },
  ];

  return (
    <ResponsiveContainer width={170} aspect={1}>
      <AreaChart  data={data}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
      <stop offset="98%" stopColor="green" stopOpacity={0.08}/>
    </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        
        <Tooltip />
        <Area
       
          dataKey="value"
          stroke=""
          
          fillOpacity={1}
        fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
