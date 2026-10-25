import React from "react";
import { FaLeaf, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="bg-green-950 text-white px-6 md:px-12 pt-14 pb-24 sm:pb-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <FaLeaf className="text-green-400" />
                            GreenNest
                        </h2>

                        <p className="text-green-100 text-sm leading-relaxed mt-4">
                            Bring nature closer to your home with beautiful plants,
                            gardening essentials and expert gardening services.
                        </p>

                        <div className="flex gap-4 mt-5 text-green-200">
                            <FaInstagram className="cursor-pointer hover:text-white" size={19} />
                            <FaFacebookF className="cursor-pointer hover:text-white" size={19} />
                            <FaTwitter className="cursor-pointer hover:text-white" size={19} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-green-100">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            <li><a href="/shop" className="hover:text-white">Shop Plants</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Account</h3>
                        <ul className="space-y-3 text-sm text-green-100">

                            <li>Login</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

                        <ul className="space-y-4 text-sm text-green-100">
                            <li className="flex gap-3 items-center">
                                <LuMapPin size={18} />
                                India
                            </li>

                            <li className="flex gap-3 items-center">
                                <LuPhone size={18} />
                                +91 98765 43210
                            </li>

                            <li className="flex gap-3 items-center">
                                <LuMail size={18} />
                                support@greennest.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-green-800 pt-5 text-center">
                    <p className="text-sm text-green-200">
                        © 2026 GreenNest. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
