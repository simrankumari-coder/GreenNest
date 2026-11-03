import React from "react";
import {
    LuUserRound,
    LuMail,
    LuPhone,
    LuMapPin,
    LuLogOut,
    LuSprout
} from "react-icons/lu";
import { Link, useNavigate } from "react-router";

const GardenerProfile = () => {
    const navigate = useNavigate();

    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser")) || {};

    const profileDetails = [
        {
            label: "Full Name",
            value: loggedInUser.name,
            icon: <LuUserRound />
        },
        {
            label: "Email Address",
            value: loggedInUser.email,
            icon: <LuMail />
        },
        {
            label: "Phone Number",
            value: loggedInUser.phone,
            icon: <LuPhone />
        },
        {
            label: "Address",
            value: loggedInUser.address,
            icon: <LuMapPin />
        },
        {
            label: "City",
            value: loggedInUser.city,
            icon: <LuMapPin />
        },
        {
            label: "PIN Code",
            value: loggedInUser.pinCode,
            icon: <LuMapPin />
        }
    ];

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    if (!loggedInUser.id) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                    <h2 className="mb-3 text-xl font-bold text-gray-800">
                        Please Login
                    </h2>
                    <p className="mb-5 text-gray-500">
                        Login to view your profile.
                    </p>
                    <Link
                        to="/login"
                        className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-5xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <Link
                        to="/gardener/dashboard"
                        className="text-sm text-green-700 hover:underline"
                    >
                        ← Back to Dashboard
                    </Link>

                    <h1 className="mt-4 text-2xl font-bold text-green-800">
                        My Profile
                    </h1>

                    <p className="mt-2 text-gray-600">
                        View your gardener account information.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                    {/* Profile Header */}
                    <div className="bg-green-800 p-6 text-white md:p-8">
                        <div className="flex flex-col items-center gap-4 sm:flex-row">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-green-800">
                                {loggedInUser.name
                                    ? loggedInUser.name.charAt(0).toUpperCase()
                                    : "G"}
                            </div>

                            <div className="text-center sm:text-left">
                                <h2 className="text-xl font-bold">
                                    {loggedInUser.name || "Gardener"}
                                </h2>

                                <p className="mt-1 text-green-100">
                                    {loggedInUser.email || "No email available"}
                                </p>

                                <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-700 px-3 py-1 text-xs font-medium">
                                    <LuSprout />
                                    Gardener Account
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="p-5 md:p-8">

                        <h3 className="mb-6 text-lg font-bold text-gray-800">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {profileDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                                >
                                    <div className="mt-1 text-xl text-green-700">
                                        {detail.icon}
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {detail.label}
                                        </p>

                                        <p className="mt-1 break-words font-medium text-gray-800">
                                            {detail.value || "Not provided"}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-3 font-semibold text-red-600 transition hover:bg-red-50"
                            >
                                <LuLogOut />
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GardenerProfile;