import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const statusData = [
  { name: "Active", value: 1200, color: "#01A4AF" },
  { name: "Expired", value: 400, color: "#FFBA24" },
  { name: "Inactive", value: 500, color: "#014DAF" },
  { name: "Blocked", value: 200, color: "#8020E7" },
  { name: "Lost", value: 150, color: "#FF4457" },
];

const statusTotal = statusData.reduce((sum, s) => sum + s.value, 0);

const statusLegend = statusData.map((s) => (
  <span key={s.name} className="flex items-center gap-1 text-xs mr-4">
    <span
      className="inline-block w-3 h-3 rounded-full"
      style={{ background: s.color }}
    ></span>
    {s.name}
  </span>
));

const statusPieData = statusData.map((s) => ({ name: s.name, value: s.value }));
const statusPieColors = statusData.map((s) => s.color);

export default function CardStatus() {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="font-medium text-lg text-dark-200 mb-4">
        Card Status Distribution
      </div>
      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Pie
            data={statusPieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={100}
            fill="#8884d8"
            label={false}
            isAnimationActive={false}
          >
            {statusPieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={statusPieColors[index]} />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs font-medium"
          >
            <tspan x="50%" dy="-0.6em" style={{ fill: "#808080" }}>
              Total Cards
            </tspan>
            <tspan
              x="50%"
              dy="1.2em"
              fontSize="16px"
              style={{ fill: "#121212", fontSize: "24px" }}
            >
              {statusTotal}
            </tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {statusLegend}
      </div>
    </div>
  );
}
