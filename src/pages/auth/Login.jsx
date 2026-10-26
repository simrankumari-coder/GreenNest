
import React from "react";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers =
            JSON.parse(localStorage.getItem("userData")) || [];

        const user = storedUsers.find(
            (item) => item.email === email && item.password === password
        );

        if (!user) {
            setError("Invalid email or password.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        if (user.role === "Customer") {
            navigate("/customer/dashboard");
        } else if (user.role === "Vendor") {
            navigate("/vendor/dashboard");
        } else if (user.role === "Gardener") {
            navigate("/gardener/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-green-50/60 px-4 py-10 flex items-center justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* Branding Section */}
                <div className="hidden md:flex flex-col items-center justify-center bg-green-800 text-white p-10 text-center">
                    <FaSeedling className="text-5xl mb-5" />
                    <h1 className="text-3xl font-bold mb-3">Welcome Back!</h1>
                    <p className="text-green-100 leading-relaxed">
                        Continue your journey towards a greener and healthier space
                        with GreenNest.
                    </p>
                </div>

                {/* Login Form */}
                <div className="p-7 sm:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-green-800">
                            Login
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Welcome back to GreenNest
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-2">
                                Email Address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    value={password}
                                    on
                                    Change={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <LuEyeOff /> : <LuEye />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-green-700 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
