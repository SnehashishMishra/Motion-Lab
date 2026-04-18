"use client";

import React from "react";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-foreground">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex itenms-center justify-between">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6,0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm font-mediun">
                  Total Users
                </h3>
                <span className="I bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +12%
                </span>
              </div>
              <p className="text-3xl font-bold mt-2">2,543</p>
              <p className="text-sm text-gray-500 mt-2">
                Increased by 257 since last month
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="Dtext-gray-500 text-sm font-mediumn">
                  Revenues
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +8%
                </span>
              </div>
              <p className="text-3xl font-bold mt-2">$45,257</p>
              <p className="text-sm text-gray-500 mt-2">
                Increased by $3,257 since last month
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="Dtext-gray-500 text-sm font-mediumn">
                  Active Sessions
                </h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +5%
                </span>
              </div>
              <p className="text-3xl font-bold mt-2">1,325</p>
              <p className="text-sm text-gray-500 mt-2">
                Increased by 103 since last month
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="Dtext-gray-500 text-sm font-mediumn">
                  Conversion Rate
                </h3>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  -2%
                </span>
              </div>
              <p className="text-3xl font-bold mt-2">1,325</p>
              <p className="text-sm text-gray-500 mt-2">
                Increased by 1.8% since last month
              </p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">User Activity</h3>
              <div className="h-6 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="divide-y">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="p-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-4"></div>
                  <div className="flex-1">
                    <p className="font-medium">
                      User #{item} performed an action
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
