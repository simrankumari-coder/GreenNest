import React from "react";
import { Link, useNavigate } from "react-router";
import {
    LuUserRound,
    LuMail,
    LuPhone,
    LuMapPin,
    LuCalendarDays,
    LuShieldCheck,
    LuLogOut,
    LuPencil
} from "react-icons/lu";

const MyProfile = () => {
    const navigate = useNavigate();

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    if (!loggedInUser) {
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
            <div className="mx-auto max-w-4xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        My Profile
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Manage your personal information and account.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                    <div className="bg-green-800 px-6 py-8 text-white">
                        <div className="flex flex-col items-center gap-4 sm:flex-row">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-green-800">
                                <LuUserRound />
                            </div>

                            <div className="text-center sm:text-left">
                                <h2 className="text-2xl font-bold">
                                    {loggedInUser.name}
                                </h2>
                                <p className="mt-1 text-green-100">
                                    {loggedInUser.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Personal Information
                            </h3>


                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            <div className="flex gap-3">
                                <LuUserRound className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Full Name</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.name}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <LuMail className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <LuPhone className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Phone Number</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <LuShieldCheck className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Account Role</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.role}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:col-span-2">
                                <LuMapPin className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.address}, {loggedInUser.city} - {loggedInUser.pinCode}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:col-span-2">
                                <LuCalendarDays className="mt-1 text-xl text-green-700" />
                                <div>
                                    <p className="text-sm text-gray-500">Account Created</p>
                                    <p className="font-medium text-gray-800">
                                        {loggedInUser.createdAt
                                            ? new Date(loggedInUser.createdAt).toLocaleDateString()
                                            : "Not available"}
                                    </p>
                                </div>
                            </div>

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

export default MyProfile;