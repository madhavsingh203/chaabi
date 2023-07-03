import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";
const BarGraph = () => {
  const data = [
    {
      date: "3 Jun",
      value: "100",
    },
    {
      date: "4 Jun",
      value: "120",
    },
    {
      date: "5 Jun",
      value: "120",
    },
    {
      date: "6 Jun",
      value: "100",
    },
    {
      date: "7 Jun",
      value: "210",
    },
    {
      date: "8 Jun",
      value: "270",
    },
    {
      date: "9 Jun",
      value: "200",
    },
    {
      date: "10 Jun",
      value: "220",
    },
    {
      date: "11 Jun",
      value: "90",
    },
    {
      date: "12 Jun",
      value: "230",
    },
    {
      date: "13 Jun",
      value: "380",
    },
    {
      date: "14 Jun",
      value: "400",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart data={data}>
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis domain={[0, 400]} axisLine={false} tickLine={false} />
        <Bar
          radius={10}
          barSize={20}
          dataKey="value"
          fill="rgba(13, 98, 255, 1), rgba(27, 89, 248, 1)"
          background={{ fill: "rgba(231, 239, 255, 1)", radius: 10 }}
        />
        <Tooltip contentStyle={{borderRadius:'10px'}} cursor={{fill: 'transparent'}}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
