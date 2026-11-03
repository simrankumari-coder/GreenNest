import React, { useState } from "react";
import {
    LuMail,
    LuPhone,
    LuMapPin,
    LuSend
} from "react-icons/lu";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccess(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    const contactDetails = [
        {
            icon: <LuMail />,
            title: "Email Us",
            value: "support@greennest.com"
        },
        {
            icon: <LuPhone />,
            title: "Call Us",
            value: "+91 98765 43210"
        },
        {
            icon: <LuMapPin />,
            title: "Our Location",
            value: "Punjab, India"
        }
    ];

    return (
        <div className="bg-gray-50">

            {/* Hero Section */}
            <section className="bg-green-50 px-5 py-16 text-center md:py-20">
                <span className="font-semibold uppercase tracking-widest text-green-700">
                    Get In Touch
                </span>

                <h1 className="mt-4 text-3xl font-bold text-green-900 md:text-5xl">
                    Contact Us
                </h1>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                    Have a question or need help with your gardening journey?
                    We'd love to hear from you.
                </p>
            </section>

            {/* Contact Section */}
            <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">

                {/* Contact Information */}
                <div>
                    <span className="font-semibold uppercase tracking-widest text-green-700">
                        Contact Information
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900">
                        Let's Talk About Plants!
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600">
                        Whether you have questions about our products,
                        gardening services or your bookings, feel free
                        to get in touch with us.
                    </p>

                    <div className="mt-8 space-y-6">
                        {contactDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-700">
                                    {detail.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {detail.title}
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        {detail.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Send Us a Message
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Fill out the form below and share your query with us.
                    </p>

                    {success && (
                        <div className="mt-5 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
                            Thank you! Your message has been submitted successfully.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter subject"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="5"
                                required
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
                        >
                            <LuSend />
                            Send Message
                        </button>

                    </form>
                </div>

            </section>
        </div>
    );
};

export default Contact;