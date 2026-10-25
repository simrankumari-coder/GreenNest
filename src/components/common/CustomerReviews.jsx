import React from "react";
import { LuStar } from "react-icons/lu";

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Plant Lover",
        review:
            "I received healthy plants in great condition. The whole shopping experience was simple and smooth.",
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Home Gardener",
        review:
            "The gardening service made it easier to take care of my home garden. Really helpful experience.",
    },
    {
        id: 3,
        name: "Ananya Singh",
        role: "GreenNest Customer",
        review:
            "I found beautiful plants and useful gardening essentials in one place. I would recommend it.",
    },
];

const CustomerReviews = () => {
    return (
        <section className="w-full px-6 md:px-12 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 mt-3">
                        A little feedback from our gardening community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="p-7 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <div className="flex gap-1 text-yellow-500 mb-5">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <LuStar key={index} fill="currentColor" size={18} />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                "{item.review}"
                            </p>

                            <h3 className="font-semibold text-gray-800">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {item.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;