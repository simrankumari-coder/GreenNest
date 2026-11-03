import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import services from '../../data/services';

const BookService = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate()
    const selectedService = services.find(
        (service) => service.id === Number(serviceId)
    );
    const [error, setError] = useState(false)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const handleBooking = (e) => {
        e.preventDefault();
        if (name.trim().length < 2 || phone.length != 10 || address.trim() === "" || date === "" || time === "" || description === "") {
            setError(true)
            return;
        } else {
            const bookings = JSON.parse(localStorage.getItem("bookings")) || []
            const bookData = {
                bookingId: Date.now(),
                userId: loggedInUser.id,
                gardenerId: null,
                serviceId: selectedService.id,
                serviceName: selectedService.name,
                price: selectedService.price,
                name,
                phone,
                address,
                date,
                time,
                description,
                status: "Pending"
            }
            bookings.push(bookData)
            localStorage.setItem("bookings", JSON.stringify(bookings))
            setName("")
            setPhone("")
            setAddress("")
            setDate("")
            setTime("")
            setDescription("")
            setError(false)
            navigate(`/confirm-booking/${bookData.bookingId}`)
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
            <div className="mx-auto max-w-6xl">

                <h1 className="mb-2 text-3xl font-bold text-gray-800">
                    Book Gardening Service
                </h1>

                <p className="mb-8 text-gray-500">
                    Schedule your gardening service with GreenNest.
                </p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Booking Form */}
                    <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">

                        <h2 className="mb-6 text-xl font-semibold text-gray-800">
                            Booking Information
                        </h2>

                        <form className="space-y-5" onSubmit={handleBooking}>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                />
                                {(name.length > 0 && name.length < 2) && <p className="text-red-600 text-sm">Name should have two characters</p>}

                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                />
                                {(phone.length > 0 && phone.length != 10) && <p className="text-red-600 text-sm">Phone number should have 10 digits</p>}

                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Service Address
                                </label>
                                <textarea
                                    rows="3"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter your complete address"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Booking Date
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Describe Your Gardening Requirements
                                </label>
                                <textarea
                                    rows="4"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Tell us what gardening work you need..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
                            >
                                Confirm Booking
                            </button>
                            {error && <p className="text-red-600 text-sm">Fields can't be empty</p>}

                        </form>
                    </div>

                    {/* Service Summary */}
                    <div className="h-fit rounded-xl bg-white p-6 shadow-sm">

                        <h2 className="mb-5 text-xl font-semibold text-gray-800">
                            Service Summary
                        </h2>

                        {selectedService ? (
                            <>
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.name}
                                    className="mb-4 h-48 w-full rounded-xl object-cover"
                                />

                                <h3 className="text-lg font-bold text-gray-800">
                                    {selectedService.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    {selectedService.description}
                                </p>

                                <div className="mt-5 flex justify-between border-t border-gray-100 pt-4">
                                    <span className="text-gray-600">Service Price</span>
                                    <span className="font-bold text-green-700">
                                        ₹{selectedService.price}
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-between">
                                    <span className="text-gray-600">Duration</span>
                                    <span className="font-medium text-gray-800">
                                        {selectedService.duration}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Service not found.</p>
                        )}

                        <Link
                            to="/services"
                            className="mt-6 block text-center text-sm font-medium text-green-700 hover:underline"
                        >
                            Back to Services
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookService;