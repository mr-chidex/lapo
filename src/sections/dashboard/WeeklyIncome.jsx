import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const incomeData = [
  { name: "Mon", value: 60 },
  { name: "Tue", value: 50 },
  { name: "Wed", value: 40 },
  { name: "Thu", value: 55 },
  { name: "Fri", value: 45 },
  { name: "Sat", value: 80 },
  { name: "Sun", value: 75 },
];

export default function WeeklyIncome() {
  return (
    <div className="bg-white rounded-xl p-4 pb-10 border border-gray-100">
      <div className="font-medium text-lg text-dark-200 mb-4">
        This Week's Income
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={incomeData}>
          <CartesianGrid
            stroke="#F2F4F7"
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={11.76}
            tickMargin={15}
          />
          <YAxis
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            fontSize={11.76}
          />
          <Tooltip
            itemStyle={{
              color: "#808080",
              fontWeight: 500,
              fontSize: "10px",
            }}
            contentStyle={{
              color: "#121212",
              fontSize: "12px",
              fontWeight: 700,
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#22C55E"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
