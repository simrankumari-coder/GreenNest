import React from "react";
import { Link } from "react-router";
import { LuCircleCheck, LuCalendarDays, LuClock, LuMapPin } from "react-icons/lu";

const BookingConfirmation = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <LuCircleCheck className="text-5xl text-green-700" />
                </div>

                <h1 className="mb-3 text-3xl font-bold text-gray-800">
                    Booking Confirmed!
                </h1>

                <p className="mb-8 text-gray-500">
                    Your gardening service booking has been submitted successfully.
                    We will contact you soon to confirm your appointment.
                </p>

                <div className="mb-8 rounded-xl bg-gray-50 p-5 text-left">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        What's Next?
                    </h2>

                    <div className="space-y-3 text-sm text-gray-600">
                        <p className="flex items-center gap-3">
                            <LuCircleCheck className="text-green-700" />
                            Your booking request has been received.
                        </p>

                        <p className="flex items-center gap-3">
                            <LuCalendarDays className="text-green-700" />
                            Your preferred date and time have been saved.
                        </p>

                        <p className="flex items-center gap-3">
                            <LuClock className="text-green-700" />
                            Your booking is currently pending confirmation.
                        </p>

                        <p className="flex items-center gap-3">
                            <LuMapPin className="text-green-700" />
                            Our team will contact you about your service.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                        to="/customer/bookings"
                        className="flex-1 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        View My Bookings
                    </Link>

                    <Link
                        to="/services"
                        className="flex-1 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        Explore Services
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BookingConfirmation;