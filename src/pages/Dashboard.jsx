import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";
import ManagecardIcon from "../icons/ManagecardIcon";
import InstatntCardIcon from "../icons/InstatntCardIcon";
import PersonalizedCardIcon from "../icons/PersonalizedCardIcon";
import ReviewCardIcon from "../icons/ReviewCardIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import CardRequestIcon from "../icons/CardRequestIcon";
import CalendarIcon from "../icons/CalendarIcon";
import RevenueIcon from "../icons/RevenueIcon";
import PendingIcon from "../icons/PendingIcon";
import IncrementIcon from "../icons/IncrementIcon";
import WarningIcon from "../icons/WarningIcon";

const quickAccess = [
  { label: "Manage a Card", icon: <ManagecardIcon /> },
  { label: "Issue Instant Card", icon: <InstatntCardIcon /> },
  { label: "Issue Personalized Card", icon: <PersonalizedCardIcon /> },
  { label: "Review Card Requests", icon: <ReviewCardIcon /> },
];

const analytics = [
  {
    label: "Total Active Cards",
    value: "26,478",
    icon: <CardRequestIcon activeStyle="#00984C" />,
    change: (
      <span className="flex items-center bg-alt-50 p-1 px-2 rounded-md gap-1">
        <IncrementIcon /> +9%
      </span>
    ),
    sub: "this month",
  },
  {
    label: "Total Personalized Cards",
    value: "15,703",
    icon: <PersonalizedCardIcon activeStyle="#8020E7" />,
    change: (
      <span className="flex items-center bg-alt-50 p-1 px-2 rounded-md gap-1">
        <IncrementIcon /> +8.5%
      </span>
    ),
    sub: "this month",
  },
  {
    label: "Today's Revenue",
    value: "₦9.3M",
    icon: <RevenueIcon />,
    change: (
      <span className="flex items-center bg-alt-50 p-1 px-2 rounded-md gap-1">
        <IncrementIcon /> +6%
      </span>
    ),
    sub: "vs yesterday",
  },
  {
    label: "Pending Requests",
    value: "38",
    icon: <PendingIcon />,
    change: (
      <span className="flex items-center gap-1 text-alt-100">
        <WarningIcon /> Requires attention
      </span>
    ),
    sub: "",
  },
];

const monthlyIssuanceData = [
  { name: "May", Personalized: 20, Instant: 40 },
  { name: "Jun", Personalized: 25, Instant: 60 },
  { name: "Jul", Personalized: 15, Instant: 30 },
  { name: "Aug", Personalized: 30, Instant: 40 },
  { name: "Sep", Personalized: 20, Instant: 35 },
  { name: "Oct", Personalized: 30, Instant: 70 },
  { name: "Nov", Personalized: 25, Instant: 60 },
];

const recentRequests = [
  {
    branch: "Corporate",
    type: "Instant",
    qty: 10,
    status: "Ready",
    action: "View",
  },
  {
    branch: "Corporate",
    type: "Personalized",
    qty: 10,
    status: "In Progress",
    action: "View",
  },
  {
    branch: "Corporate",
    type: "Personalized",
    qty: 10,
    status: "Acknowledged",
    action: "View",
  },
  {
    branch: "Corporate",
    type: "Instant",
    qty: 10,
    status: "Pending",
    action: "View",
  },
];

const incomeData = [
  { name: "Mon", value: 60 },
  { name: "Tue", value: 50 },
  { name: "Wed", value: 40 },
  { name: "Thu", value: 55 },
  { name: "Fri", value: 45 },
  { name: "Sat", value: 80 },
  { name: "Sun", value: 75 },
];

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

export default function Dashboard() {
  return (
    <div className="space-y-3 text-dark-600">
      <div className="text-dark-600">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold ">
            Hi Nazeer, what would you like to do today?
          </h1>
          <div className="rounded-md text-[11px] p-2 flex items-center gap-2 border border-light-100">
            <CalendarIcon />
            <span className="font-medium">Today</span>{" "}
            <span className="text-light-100">| </span>
            <span className="font-normal">{new Date().toDateString()}</span>
          </div>
        </div>
        <p className="text-xs font-medium py-1">
          Last login:{" "}
          <span className="font-normal">{new Date().toLocaleString()}</span>
        </p>
      </div>

      {/* Quick Access */}
      <div className="grid gap-3 rounded-xl p-3 bg-white  border border-light-200">
        <h2 className="text-base font-medium">Your Quick Access</h2>
        <div className=" flex flex-wrap gap-1">
          {quickAccess.map((item) => (
            <button
              key={item.label}
              className="flex-1 w-full max-w-[278px] text-sm flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition rounded-lg px-6 py-4 font-medium text-dark-600"
            >
              <span className="bg-primary-50 grid place-items-center text-white h-[28px] w-[28px] rounded-full ">
                {item.icon}
              </span>
              {item.label}
              <span className="">
                <ChevronRightIcon />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-black text-lg font-bold">Analytics</h2>
          <div className="w-full bg-light-100 h-[0.38px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {analytics.map((a) => (
            <div
              key={a.label}
              className={`bg-white grid gap-1 rounded-xl p-4 border border-light-200`}
            >
              <div>{a.icon}</div>
              <div className="text-sm text-gray-400 mb-1">{a.label}</div>
              <div className="flex items-center justify-between my-1">
                <div className="text-2xl font-bold mb-1">{a.value}</div>
                <div className="text-xs flex items-center gap-2">
                  {a.change}
                  <span className="text-gray-400">{a.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {/* Monthly Issuance */}
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
            <div className="p-4 flex gap-4 mt-2 text-xs justify-center text-light-600 border-t-[0.7px]  border-light-200">
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-50 "></span>{" "}
                Personalized
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-alt-150"></span>{" "}
                Instant
              </span>
            </div>
          </div>

          {/* This Week's Income */}
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
        </div>

        <div className="flex flex-col gap-2">
          {/* Recent Card Requests */}
          <div className="bg-white rounded-xl p-4  border border-light-200">
            <div className="font-medium text-lg mb-4 text-dark-200">
              Recent Card Requests
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-secondary-50 border border-light-200">
                  <tr className="text-dark-400 text-xs font-medium">
                    <th className="text-center py-2 px-6">Branch</th>
                    <th className="text-center py-2 px-6">Card Type</th>
                    <th className="text-center py-2 px-6">Quantity</th>
                    <th className="text-center py-2 px-6">Status</th>
                    <th className="text-center py-2 px-6">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRequests.map((r, i) => (
                    <tr key={i} className="border-t text-light-800 text-[10px]">
                      <td className="py-4 px-6 text-center">{r.branch}</td>
                      <td className="py-4 px-6 text-center">{r.type}</td>
                      <td className="py-4 px-6 text-center">{r.qty}</td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`px-2 text-center py-1 rounded-full  font-medium ${
                            r.status === "Ready"
                              ? "bg-success-50 text-success-400 border border-success-200"
                              : r.status === "In Progress"
                              ? "bg-warning-50 text-warning-400 border border-warning-200"
                              : r.status === "Acknowledged"
                              ? "bg-info-50 text-info-400 border border-info-200"
                              : "bg-light-250 text-light-900 border border-light-300"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-center text-primary-50 cursor-pointer font-bold">
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card Status Distribution */}
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
                {/* Center label */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-medium "
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
        </div>
      </div>
    </div>
  );
}
