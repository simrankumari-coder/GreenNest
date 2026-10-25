
import React from "react";
import services from "../../data/services";
import ServiceCard from "../../components/common/ServiceCard";

const GardeningServices = () => {
    return (
        <div className="min-h-screen bg-green-50/40 px-4 py-12 sm:px-8 lg:px-16">

            {/* Page Heading */}
            <div className="mx-auto mb-12 max-w-3xl text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
                    Our Gardening Services
                </h1>

                <p className="leading-relaxed text-gray-600">
                    Let our gardening professionals help you create and maintain
                    a beautiful, healthy green space at home.
                </p>
            </div>

            {/* Service Cards */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>

        </div>
    );
};

export default GardeningServices;
