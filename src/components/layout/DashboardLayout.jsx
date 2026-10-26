import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            <main className="flex-1 min-w-0 p-5 md:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;