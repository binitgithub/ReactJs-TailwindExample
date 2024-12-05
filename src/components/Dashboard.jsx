import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faChartLine, faCogs, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>Dashboard</h1>
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#home" className="flex items-center">
                <FontAwesomeIcon icon={faHome} />
                <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>Home</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#analytics" className="flex items-center">
                <FontAwesomeIcon icon={faChartLine} />
                <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>Analytics</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#settings" className="flex items-center">
                <FontAwesomeIcon icon={faCogs} />
                <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>Settings</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#profile" className="flex items-center">
                <FontAwesomeIcon icon={faUser} />
                <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center">
            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Statistic Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
              <p className="mt-2 text-sm text-gray-500">Updated just now</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">$12,345</p>
              <p className="mt-2 text-sm text-gray-500">Last 24 hours</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
              <p className="mt-2 text-3xl font-bold text-yellow-600">87%</p>
              <p className="mt-2 text-sm text-gray-500">Compared to last week</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <p className="mt-2 text-3xl font-bold text-red-600">5</p>
              <p className="mt-2 text-sm text-gray-500">Pending alerts</p>
            </div>
          </div>

          {/* Additional Analytics Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center justify-between">
                  <span>User logged in</span>
                  <span className="text-gray-500">2 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>New sale</span>
                  <span className="text-gray-500">5 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>System update</span>
                  <span className="text-gray-500">1 day ago</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">System Health</h3>
              <p className="mt-4 text-lg text-gray-600">All systems operational.</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Uptime: <span className="font-bold text-green-600">99.98%</span></p>
                <p className="text-sm text-gray-500">Response Time: <span className="font-bold text-blue-600">250ms</span></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
