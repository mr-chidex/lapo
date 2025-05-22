import React from "react";
import { Link, Outlet } from "react-router-dom";

const menuItems = [
  "Branches",
  "Roles",
  "Users",
  "Card Scheme",
  "Card Profile",
  "Card Request",
  "Stock",
  "Cards",
  "Authorization List",
  "Authorization Queue",
  "Trail",
  "Account",
];

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="flex items-center h-20 px-6 border-b">
            <span className="font-bold text-xl text-orange-600">LAPO</span>
          </div>
          <nav className="mt-6">
            <ul>
              <li className="px-6 py-3 text-blue-700 font-semibold bg-blue-50 rounded-r-full mb-2">
                Dashboard
              </li>
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-r-full mb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-6 py-4 border-t">
          <button className="text-red-500 font-semibold">Logout</button>
          <div className="mt-8 text-xs text-gray-400">
            Powered by cardinfra.
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b flex items-center justify-between px-8">
          <div>
            <h2 className="text-lg font-semibold">
              Hi [User], what would you like to do today?
            </h2>
            <div className="text-xs text-gray-400">Last login: [date/time]</div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-3 py-1"
            />
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              U
            </div>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
