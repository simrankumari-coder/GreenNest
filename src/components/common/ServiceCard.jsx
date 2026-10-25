
import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Service Image */}
            <div className="h-52 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>

            {/* Service Information */}
            <div className="flex flex-col gap-3 p-5">

                <h2 className="text-xl font-semibold text-gray-800">
                    {service.name}
                </h2>

                <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="font-bold text-green-700">
                        Starting ₹{service.price}
                    </span>

                    <span className="text-sm text-yellow-600">
                        ★ {service.rating}
                    </span>
                </div>

                <p className="text-sm text-gray-500">
                    Duration: {service.duration}
                </p>

                <Link
                    to={`/services/${service.id}`}
                    className="mt-2 rounded-lg bg-green-700 py-2.5 text-center font-medium text-white transition hover:bg-green-800"
                >
                    Book Now
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;
