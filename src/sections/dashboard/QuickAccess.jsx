import React from "react";
import ManagecardIcon from "../../icons/ManagecardIcon";
import InstatntCardIcon from "../../icons/InstatntCardIcon";
import PersonalizedCardIcon from "../../icons/PersonalizedCardIcon";
import ReviewCardIcon from "../../icons/ReviewCardIcon";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

const quickAccess = [
  { label: "Manage a Card", icon: <ManagecardIcon /> },
  { label: "Issue Instant Card", icon: <InstatntCardIcon /> },
  { label: "Issue Personalized Card", icon: <PersonalizedCardIcon /> },
  { label: "Review Card Requests", icon: <ReviewCardIcon /> },
];

export default function QuickAccess() {
  return (
    <div className="grid gap-3 rounded-xl p-3 bg-white border border-light-200">
      <h2 className="text-base font-medium">Your Quick Access</h2>
      <div className="flex flex-wrap gap-1">
        {quickAccess.map((item) => (
          <button
            key={item.label}
            className="flex-1 w-full xl:max-w-[278px] text-nowrap text-sm flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition rounded-lg px-6 py-4 font-medium text-dark-600"
          >
            <span className="bg-primary-50 grid place-items-center text-white h-[28px] w-[28px] rounded-full">
              {item.icon}
            </span>
            {item.label}
            <span>
              <ChevronRightIcon />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
