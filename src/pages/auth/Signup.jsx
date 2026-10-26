import React from 'react'
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [error, setError] = useState("")
    const [role, setRole] = useState("Customer")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSignUp = (e) => {
        e.preventDefault()

        setError("")
        const isValid = name.trim().length < 2 ||
            !emailRegex.test(email) ||
            password.length < 6 ||
            phone.length !== 10 ||
            confirmPass !== password

        if (isValid) {
            setError("Please enter a valid details")
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
        console.log(storedUsers)
        console.log(Array.isArray(storedUsers))
        const alreadyEmails = storedUsers.some((user) => user.email === email)
        if (alreadyEmails) {
            setError("An Account with this email already exits")
            return
        }

        const signUp = {
            name,
            email,
            phone,
            password,
            role
        }
        //  we had an array properties push so that it add 
        storedUsers.push(signUp);
        localStorage.setItem("userData", JSON.stringify(storedUsers))
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPass("")
        setRole("")

        navigate("/login")

    }
    return (
        <div className="min-h-screen bg-green-50/60 px-4 py-10 flex items-center justify-center">

            <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-2">

                {/* Left Branding Section */}
                <div className="hidden md:flex flex-col justify-center bg-green-800 p-10 text-white">

                    <div className="mb-8 flex items-center gap-3">
                        <span className="text-4xl">🌱</span>
                        <h1 className="text-3xl font-bold">GreenNest</h1>
                    </div>

                    <h2 className="mb-4 text-4xl font-bold leading-tight">
                        Grow Your Green Journey With Us
                    </h2>

                    <p className="leading-relaxed text-green-100">
                        Join GreenNest to discover beautiful plants, explore gardening
                        services and bring more nature into your everyday life.
                    </p>

                    <div className="mt-10 rounded-xl bg-green-700/60 p-5">
                        <p className="text-lg font-medium">
                            "A greener space begins with one small step."
                        </p>
                    </div>

                </div>

                {/* Right Signup Form */}
                <div className="p-6 sm:p-10">

                    <div className="mb-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Create Account
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Join GreenNest and start your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Full Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                            {(name.length > 0 && name.length < 2) &&
                                <p className="mt-1 text-sm text-red-500">
                                    Name can't be less than two characters
                                </p>
                            }
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Email Address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                            {(email.length > 0 && !emailRegex.test(email)) &&
                                <p className="mt-1 text-sm text-red-500">
                                    Enter a valid email address
                                </p>
                            }
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Phone Number
                            </label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                            {(phone.length > 0 && phone.length !== 10) &&
                                <p className="mt-1 text-sm text-red-500">
                                    Enter a 10-digit phone number
                                </p>
                            }
                        </div>

                        {/* Role */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Register As
                            </label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            >
                                <option value="Customer">Customer</option>
                                <option value="Vendor">Vendor</option>
                                <option value="Gardener">Gardener</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                            {(password.length > 0 && password.length < 6) &&
                                <p className="mt-1 text-sm text-red-500">
                                    Password must contain at least 6 characters
                                </p>
                            }
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900">
                                Confirm Password
                            </label>
                            <input
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                            {confirmPass.length > 0 && confirmPass !== password &&
                                <p className="mt-1 text-sm text-red-500">
                                    Passwords don't match
                                </p>
                            }
                        </div>

                    </div>

                    {/* Signup Button */}
                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>)}

                    <button
                        type="submit"
                        onClick={handleSignUp}
                        className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        Create Account
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-green-700 hover:underline">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );

}

export default Signup
