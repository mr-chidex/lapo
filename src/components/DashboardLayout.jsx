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
    icon: <DashboardIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/branches": {
    name: "Branches",
    icon: <BranchesIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/roles": {
    name: "Roles",
    icon: <RolesIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/users": {
    name: "Users",
    icon: <UsersIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/card-scheme": {
    name: "Card Scheme",
    icon: <CardSchemeIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/card-profile": {
    name: "Card Profile",
    icon: <CardProfileIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/card-request": {
    name: "Card Request",
    icon: <CardRequestIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/stock": {
    name: "Stock",
    icon: <StockIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/cards": {
    name: "Cards",
    icon: <CardsIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/authorization-list": {
    name: "Authorization List",
    icon: <AuthListIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/authorization-queue": {
    name: "Authorization Queue",
    icon: <AuthQueueIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/trail": {
    name: "Trail",
    icon: <TrailIcon activeStyle="#001735" className="w-5 h-5" />,
  },
  "/dashboard/account": {
    name: "Account",
    icon: <AccountIcon activeStyle="#001735" className="w-5 h-5" />,
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
        <main className="flex-1 p-4 bg-secondary-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
