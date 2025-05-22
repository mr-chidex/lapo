import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardIcon from "../icons/DashboardIcon";
import BranchesIcon from "../icons/BranchesIcon";
import RolesIcon from "../icons/RolesIcon";
import UsersIcon from "../icons/UsersIcon";
import CardSchemeIcon from "../icons/CardSchemeIcon";
import CardProfileIcon from "../icons/CardProfileIcon";
import CardRequestIcon from "../icons/CardRequestIcon";
import StockIcon from "../icons/StockIcon";
import CardsIcon from "../icons/CardsIcon";
import AuthListIcon from "../icons/AuthListIcon";
import AuthQueueIcon from "../icons/AuthQueueIcon";
import TrailIcon from "../icons/TrailIcon";
import AccountIcon from "../icons/AccountIcon";

const pageMap = {
  "/dashboard": {
    name: "Dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
  },
  "/dashboard/branches": {
    name: "Branches",
    icon: <BranchesIcon className="w-5 h-5" />,
  },
  "/dashboard/roles": {
    name: "Roles",
    icon: <RolesIcon className="w-5 h-5" />,
  },
  "/dashboard/users": {
    name: "Users",
    icon: <UsersIcon className="w-5 h-5" />,
  },
  "/dashboard/card-scheme": {
    name: "Card Scheme",
    icon: <CardSchemeIcon className="w-5 h-5" />,
  },
  "/dashboard/card-profile": {
    name: "Card Profile",
    icon: <CardProfileIcon className="w-5 h-5" />,
  },
  "/dashboard/card-request": {
    name: "Card Request",
    icon: <CardRequestIcon className="w-5 h-5" />,
  },
  "/dashboard/stock": {
    name: "Stock",
    icon: <StockIcon className="w-5 h-5" />,
  },
  "/dashboard/cards": {
    name: "Cards",
    icon: <CardsIcon className="w-5 h-5" />,
  },
  "/dashboard/authorization-list": {
    name: "Authorization List",
    icon: <AuthListIcon className="w-5 h-5" />,
  },
  "/dashboard/authorization-queue": {
    name: "Authorization Queue",
    icon: <AuthQueueIcon className="w-5 h-5" />,
  },
  "/dashboard/trail": {
    name: "Trail",
    icon: <TrailIcon className="w-5 h-5" />,
  },
  "/dashboard/account": {
    name: "Account",
    icon: <AccountIcon className="w-5 h-5" />,
  },
};

const DashboardLayout = () => {
  const location = useLocation();
  const page = pageMap[location.pathname] || pageMap["/dashboard"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader page={page} />
        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
