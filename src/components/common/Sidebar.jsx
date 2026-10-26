import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

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
            { name: "Customer Orders", path: "/vendor/orders" },
            { name: "My Profile", path: "/vendor/profile" },
        ],

        Gardener: [
            { name: "Dashboard", path: "/gardener/dashboard" },
            { name: "Service Requests", path: "/gardener/requests" },
            { name: "Upcoming Jobs", path: "/gardener/jobs" },
            { name: "My Profile", path: "/gardener/profile" },
        ],
    };

    const links = menuItems[role] || [];

    return (
        <aside className="w-64 min-h-screen bg-green-900 text-white p-5">
            <h2 className="text-2xl font-bold mb-8">GreenNest</h2>

            <p className="text-sm text-green-200 mb-5">
                {role} Panel
            </p>

            <nav className="space-y-2">
                {links.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block rounded-lg px-4 py-3 transition ${isActive
                                ? "bg-green-700 text-white"
                                : "text-green-100 hover:bg-green-800"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;