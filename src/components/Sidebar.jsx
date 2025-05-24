import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import logo from "../assets/logo_light.svg";
import cardinfraLogo from "../assets/cardinfra_logo.svg";
import BranchesIcon from "../icons/BranchesIcon.jsx";
import RolesIcon from "../icons/RolesIcon.jsx";
import UsersIcon from "../icons/UsersIcon.jsx";
import CardSchemeIcon from "../icons/CardSchemeIcon.jsx";
import CardProfileIcon from "../icons/CardProfileIcon.jsx";
import CardRequestIcon from "../icons/CardRequestIcon.jsx";
import StockIcon from "../icons/StockIcon.jsx";
import CardsIcon from "../icons/CardsIcon.jsx";
import AuthListIcon from "../icons/AuthListIcon.jsx";
import AuthQueueIcon from "../icons/AuthQueueIcon.jsx";
import TrailIcon from "../icons/TrailIcon.jsx";
import AccountIcon from "../icons/AccountIcon.jsx";
import DashboardIcon from "../icons/DashboardIcon.jsx";
import LogoutIcon from "../icons/LogoutIcon.jsx";

const Sidebar = ({ isCollapsed }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: (
        <DashboardIcon
          activeStyle={isActive("/dashboard") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Branches",
      path: "/dashboard/branches",
      icon: (
        <BranchesIcon
          activeStyle={isActive("/dashboard/branches") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Roles",
      path: "/dashboard/roles",
      icon: (
        <RolesIcon
          activeStyle={isActive("/dashboard/roles") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Users",
      path: "/dashboard/users",
      icon: (
        <UsersIcon
          activeStyle={isActive("/dashboard/users") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Card Scheme",
      path: "/dashboard/card-scheme",
      icon: (
        <CardSchemeIcon
          activeStyle={isActive("/dashboard/card-scheme") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Card Profile",
      path: "/dashboard/card-profile",
      icon: (
        <CardProfileIcon
          activeStyle={isActive("/dashboard/card-profile") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Card Request",
      path: "/dashboard/card-request",
      icon: (
        <CardRequestIcon
          activeStyle={isActive("/dashboard/card-request") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Stock",
      path: "/dashboard/stock",
      icon: (
        <StockIcon
          activeStyle={isActive("/dashboard/stock") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Cards",
      path: "/dashboard/cards",
      icon: (
        <CardsIcon
          activeStyle={isActive("/dashboard/cards") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Authorization List",
      path: "/dashboard/authorization-list",
      icon: (
        <AuthListIcon
          activeStyle={
            isActive("/dashboard/authorization-list") ? "#014DAF" : null
          }
        />
      ),
    },
    {
      label: "Authorization Queue",
      path: "/dashboard/authorization-queue",
      icon: (
        <AuthQueueIcon
          activeStyle={
            isActive("/dashboard/authorization-queue") ? "#014DAF" : null
          }
        />
      ),
    },
    {
      label: "Trail",
      path: "/dashboard/trail",
      icon: (
        <TrailIcon
          activeStyle={isActive("/dashboard/trail") ? "#014DAF" : null}
        />
      ),
    },
    {
      label: "Account",
      path: "/dashboard/account",
      icon: (
        <AccountIcon
          activeStyle={isActive("/dashboard/account") ? "#014DAF" : null}
        />
      ),
    },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white border-r flex flex-col justify-between py-4 fixed h-screen z-30 overflow-y-auto scrollbar-none transition-all duration-300`}
    >
      <div>
        <div
          className={`flex py-4 px-4 h-[45px] ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <img
            src={logo}
            alt="LAPO"
            className={`h-12 ${isCollapsed ? "w-12" : "w-[138.32px]"}`}
          />
        </div>
        <nav className="mt-10 px-4">
          <ul>
            {menuItems.map((item, idx) => (
              <li key={item.label} className={idx === 1 ? "mt-4" : ""}>
                {item.label === "Branches" && !isCollapsed && (
                  <div className="px-6 py-2 text-[8.5px] text-gray-400 tracking-widest font-medium">
                    MAIN MENU
                  </div>
                )}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-xs px-3 py-3 my-1 rounded-lg transition-colors ${
                      isActive
                        ? "bg-light-50 text-primary-50 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                  end={item.label === "Dashboard"}
                  title={isCollapsed ? item.label : ""}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </span>
                  {!isCollapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`flex flex-col items-center gap-8 px-6 pb-4 pt-2 bg-white border-t ${
          isCollapsed ? "px-2" : ""
        }`}
      >
        <button
          onClick={handleLogout}
          className={`mt-6 flex text-sm items-center gap-2 text-gray-700 font-medium w-full ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          title={isCollapsed ? "Logout" : ""}
        >
          <LogoutIcon className="w-5 h-5" />
          {!isCollapsed && "Logout"}
        </button>
        <div
          className={`w-full flex flex-col mt-8 ${
            isCollapsed ? "items-center" : ""
          }`}
        >
          {!isCollapsed && (
            <span className="text-[8.5px] text-gray-400 tracking-widest mb-2">
              POWERED BY
            </span>
          )}
          <img
            src={cardinfraLogo}
            alt="cardinfra"
            className={`${isCollapsed ? "h-8 w-8" : "h-[43px] w-[93.33px]"}`}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
