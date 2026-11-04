
import React, { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = ({ isOpen, setIsOpen }) => {


    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser")) || {};

    const role = loggedInUser?.role;

    const menuItems = {
        Customer: [
            { name: "Dashboard", path: "/customer/dashboard" },
            { name: "My Orders", path: "/customer/orders" },
            { name: "My Bookings", path: "/customer/bookings" },
            { name: "My Profile", path: "/customer/profile" },
        ],

        Vendor: [
            { name: "Dashboard", path: "/vendor/dashboard" },
            { name: "My Products", path: "/vendor/products" },
            { name: "Add Product", path: "/vendor/add-product" },
            { name: "My Profile", path: "/vendor/profile" },
        ],

        Gardener: [
            { name: "Dashboard", path: "/gardener/dashboard" },
            { name: "My Bookings", path: "/gardener/mybookings" },
            { name: "My Profile", path: "/gardener/profile" },
        ],
    };

    const links = menuItems[role] || [];

    const linkClass = ({ isActive }) =>
        `block rounded-lg px-4 py-3 transition ${isActive
            ? "bg-green-700 text-white"
            : "text-green-100 hover:bg-green-800"
        }`;

    return (
        <>


            {/* Mobile background overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:sticky top-0 left-0 z-50
                    w-64 min-h-screen bg-green-900 text-white p-5
                    transform transition-transform duration-300
                    md:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">GreenNest</h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden text-2xl text-white"
                        aria-label="Close sidebar"
                    >
                        ×
                    </button>
                </div>

                <nav className="space-y-2">
                    <NavLink
                        to="/"
                        end
                        onClick={() => setIsOpen(false)}
                        className={linkClass}
                    >
                        Home
                    </NavLink>

                    <p className="text-sm text-green-200 mt-5 mb-5">
                        {role} Panel
                    </p>

                    {links.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
