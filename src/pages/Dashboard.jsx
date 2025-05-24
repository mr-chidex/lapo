import React from "react";
import CalendarIcon from "../icons/CalendarIcon";
import QuickAccess from "../sections/dashboard/QuickAccess";
import Analytics from "../sections/dashboard/Analytics";
import MonthlyIssuance from "../sections/dashboard/MonthlyIssuance";
import WeeklyIncome from "../sections/dashboard/WeeklyIncome";
import RecentRequests from "../sections/dashboard/RecentRequests";
import CardStatus from "../sections/dashboard/CardStatus";

export default function Dashboard() {
  return (
    <div className="space-y-3 text-dark-600">
      <div className="text-dark-600">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">
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

      <QuickAccess />

      <Analytics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <MonthlyIssuance />
          <WeeklyIncome />
        </div>

        <div className="flex flex-col gap-2">
          <RecentRequests />
          <CardStatus />
        </div>
      </div>
    </div>
  );
}
