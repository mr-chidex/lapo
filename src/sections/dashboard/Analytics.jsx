import React from "react";
import CardRequestIcon from "../../icons/CardRequestIcon";
import PersonalizedCardIcon from "../../icons/PersonalizedCardIcon";
import RevenueIcon from "../../icons/RevenueIcon";
import PendingIcon from "../../icons/PendingIcon";
import IncrementIcon from "../../icons/IncrementIcon";
import WarningIcon from "../../icons/WarningIcon";

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

export default function Analytics() {
  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-black text-lg font-bold">Analytics</h2>
        <div className="w-full bg-light-100 h-[0.38px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {analytics.map((a) => (
          <div
            key={a.label}
            className="bg-white grid gap-1 rounded-xl p-4 border border-light-200"
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
  );
}
