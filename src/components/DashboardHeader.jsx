import React from "react";
import BellIcon from "../icons/BellIcon";
import SeacrhIcon from "../icons/SeacrhIcon";
import UserIcon from "../icons/userIcon";

const DashboardHeader = ({ page }) => (
  <header className="h-16 bg-white border-b flex items-center justify-between px-8">
    <div className="flex items-center gap-2 text-dark-600 font-medium">
      <span>{page.icon}</span>
      <span className="ml-2 text-sm tet-dark-500 font-medium">{page.name}</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex items-center relative">
        <SeacrhIcon className="w-4 h-4 text-gray-400 mr-2 absolute left-3" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-xs placeholder:text-light-900 px-8 py-1 shadow-header-search rounded-full w-[214px] outline-none text-light-600 h-8 border-[0.98px] border-light-100"
        />
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-light-50 transition-colors">
        <BellIcon className="w-5 h-5 text-gray-500" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-light-150 border border-light-100 hover:bg-light-50">
        <UserIcon className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  </header>
);

export default DashboardHeader;
