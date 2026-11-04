import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";
import { useState } from "react";
const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className="flex-1 min-w-0">

                {/* Mobile header */}
                <div className="md:hidden flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-green-900 text-white p-3 rounded-lg"
                    >
                        ☰
                    </button>
                </div>

                <main className="min-w-0 p-5 md:p-8">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;