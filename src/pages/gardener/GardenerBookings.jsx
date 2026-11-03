import React, { useState } from "react";
import { Link } from "react-router";
import { LuCalendarDays, LuClock, LuMapPin } from "react-icons/lu";

const GardenerBookings = () => {
    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser")) || {};

    const [bookings, setBookings] = useState(
        JSON.parse(localStorage.getItem("bookings")) || []
    );

    const availableBookings = bookings.filter(
        (booking) =>
            booking.gardenerId == null &&
            booking.status === "Pending"
    );

    const myBookings = bookings.filter(
        (booking) => booking.gardenerId === loggedInUser.id
    );

    const handleAccept = (bookingId) => {
        const updatedBookings = bookings.map((booking) =>
            booking.bookingId === bookingId
                ? {
                    ...booking,
                    gardenerId: loggedInUser.id,
                    status: "Accepted"
                }
                : booking
        );

        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    const BookingCard = ({ booking, showAccept }) => (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-800">
                    {booking.serviceName}
                </h3>

                <span className={`rounded-full px-3 py-1 text-xs font-medium ${booking.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Accepted"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                    {booking.status}
                </span>
            </div>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p><strong>Customer:</strong> {booking.name}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Price:</strong> ₹{booking.price}</p>

                <p className="flex items-center gap-2">
                    <LuCalendarDays />
                    {booking.date}
                </p>

                <p className="flex items-center gap-2">
                    <LuClock />
                    {booking.time}
                </p>

                <p className="flex items-center gap-2">
                    <LuMapPin />
                    {booking.address}
                </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">


                {showAccept && (
                    <button
                        onClick={() => handleAccept(booking.bookingId)}
                        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                    >
                        Accept Booking
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                    <Link
                        to="/gardener/dashboard"
                        className="text-sm text-green-700 hover:underline"
                    >
                        ← Back to Dashboard
                    </Link>

                    <h1 className="mt-4 text-2xl font-bold text-gray-800">
                        My Bookings
                    </h1>

                    <p className="mt-2 text-gray-500">
                        View available bookings and manage your accepted bookings.
                    </p>
                </div>

                <section className="mb-10">
                    <h2 className="mb-5 text-xl font-semibold text-gray-800">
                        Available Bookings ({availableBookings.length})
                    </h2>

                    {availableBookings.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2">
                            {availableBookings.map((booking) => (
                                <BookingCard
                                    key={booking.bookingId}
                                    booking={booking}
                                    showAccept={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-xl bg-white p-6 text-gray-500">
                            No available bookings right now.
                        </p>
                    )}
                </section>

                <section>
                    <h2 className="mb-5 text-xl font-semibold text-gray-800">
                        My Accepted Bookings ({myBookings.length})
                    </h2>

                    {myBookings.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2">
                            {myBookings.map((booking) => (
                                <BookingCard
                                    key={booking.bookingId}
                                    booking={booking}
                                    showAccept={false}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-xl bg-white p-6 text-gray-500">
                            You haven't accepted any bookings yet.
                        </p>
                    )}
                </section>

            </div>
        </div>
    );
};

export default GardenerBookings;