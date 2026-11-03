import React from "react";
import { Link } from "react-router";
import {
    LuCalendarDays,
    LuClock,
    LuMapPin,
    LuClipboardList,
    LuSprout
} from "react-icons/lu";

const MyBookings = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const myBookings = bookings.filter((booking) => booking.userId === loggedInUser.id)
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    My Bookings
                </h1>
                <p className="mt-2 text-gray-500">
                    Manage and track your gardening service bookings.
                </p>
            </div>

            {myBookings.length === 0 ? (
                <div className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
                    <LuClipboardList className="mx-auto mb-4 text-5xl text-gray-400" />

                    <h2 className="mb-2 text-xl font-semibold text-gray-800">
                        No Bookings Yet
                    </h2>

                    <p className="mb-6 text-gray-500">
                        You haven't booked any gardening services yet.
                    </p>

                    <Link
                        to="/services"
                        className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                    >
                        Explore Services
                    </Link>
                </div>
            ) : (
                <div className="space-y-5">
                    {myBookings.map((booking) => (
                        <div
                            key={booking.bookingId}
                            className="rounded-xl bg-white p-5 shadow-sm"
                        >
                            <div className="mb-5 flex min-w-0 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Booking ID: #{booking.bookingId}
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-gray-800">
                                        {booking.serviceName}
                                    </h2>
                                </div>

                                <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                                    {booking.status}
                                </span>
                            </div>

                            <div className="grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">

                                <div className="flex items-center gap-3 text-gray-600">
                                    <LuCalendarDays className="text-xl text-green-700" />
                                    <div>
                                        <p className="text-xs text-gray-500">Booking Date</p>
                                        <p className="font-medium">{booking.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <LuClock className="text-xl text-green-700" />
                                    <div>
                                        <p className="text-xs text-gray-500">Preferred Time</p>
                                        <p className="font-medium">{booking.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <LuMapPin className="text-xl text-green-700" />
                                    <div>
                                        <p className="text-xs text-gray-500">Service Address</p>
                                        <p className="font-medium">{booking.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <LuSprout className="text-xl text-green-700" />
                                    <div>
                                        <p className="text-xs text-gray-500">Service Price</p>
                                        <p className="font-medium text-green-700">
                                            ₹{booking.price}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 border-t border-gray-100 pt-4">
                                <p className="text-sm text-gray-500">
                                    Gardening Requirements
                                </p>
                                <p className="mt-1 text-gray-700 break-words">
                                    {booking.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default MyBookings;