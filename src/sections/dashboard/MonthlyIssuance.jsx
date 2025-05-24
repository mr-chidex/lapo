import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const monthlyIssuanceData = [
  { name: "May", Personalized: 20, Instant: 40 },
  { name: "Jun", Personalized: 25, Instant: 60 },
  { name: "Jul", Personalized: 15, Instant: 30 },
  { name: "Aug", Personalized: 30, Instant: 40 },
  { name: "Sep", Personalized: 20, Instant: 35 },
  { name: "Oct", Personalized: 30, Instant: 70 },
  { name: "Nov", Personalized: 25, Instant: 60 },
];

export default function MonthlyIssuance() {
  return (
    <div className="bg-white rounded-xl border border-light-200">
      <div className="font-medium p-4 text-lg mb-2 text-dark-200">
        Monthly Issuance
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={monthlyIssuanceData}>
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
            axisLine={false}
            tickMargin={10}
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
          <Bar
            dataKey="Personalized"
            stackId="a"
            fill="#014DAF"
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
          <Bar
            dataKey="Instant"
            stackId="a"
            fill="#CCE2FF"
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="p-4 flex gap-4 mt-2 text-xs justify-center text-light-600 border-t-[0.7px] border-light-200">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-full bg-primary-50"></span>{" "}
          Personalized
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-full bg-alt-150"></span>{" "}
          Instant
        </span>
      </div>
    </div>
  );
}
