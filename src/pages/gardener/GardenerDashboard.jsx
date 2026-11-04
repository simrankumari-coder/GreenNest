import React from "react";
import { Link } from "react-router";
import {
    LuCalendarDays,
    LuClock,
    LuCircleCheck,
    LuArrowRight
} from "react-icons/lu";

const GardenerDashboard = () => {

    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser")) || {};

    const bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    // Get bookings assigned to the logged-in gardener
    const gardenerBookings = bookings.filter(
        (booking) => booking.gardenerId === loggedInUser.id
    );
    const totalBookings = bookings.filter((booking) =>
        booking.gardenerId == null || booking.gardenerId === loggedInUser.id).length

    const pendingBookings = bookings.filter(
        (booking) => booking.gardenerId == null || booking.status === "Pending"
    ).length;

    const completedBookings = bookings.filter(
        (booking) => booking.status === "Accepted"
    ).length;

    const dashboardCards = [
        {
            title: "Total Bookings",
            count: totalBookings,
            icon: <LuCalendarDays />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Pending Bookings",
            count: pendingBookings,
            icon: <LuClock />,
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            title: "Completed Bookings",
            count: completedBookings,
            icon: <LuCircleCheck />,
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome, {loggedInUser.name || "Gardener"}!
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage your gardening service bookings from here.
                </p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {dashboardCards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {card.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                                    {card.count}
                                </h2>
                            </div>

                            <div className={`rounded-xl p-4 text-2xl ${card.color}`}>
                                {card.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Quick Action */}
            <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-semibold text-gray-800">
                    Quick Actions
                </h2>

                <Link
                    to="/gardener/mybookings"
                    className="mt-5 flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-green-500 hover:bg-green-50"
                >
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Manage Bookings
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            View and manage your gardening service bookings.
                        </p>
                    </div>

                    <LuArrowRight className="text-xl text-green-600" />
                </Link>

            </div>

        </div>
    );
};

export default GardenerDashboard;