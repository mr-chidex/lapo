import React from "react";

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

export default function RecentRequests() {
  return (
    <div className="bg-white rounded-xl p-4 border border-light-200">
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
                    className={`px-2 text-center py-1 rounded-full font-medium ${
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
  );
}
