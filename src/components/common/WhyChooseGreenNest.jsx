import React from "react";
import {
    LuLeaf,
    LuShieldCheck,
    LuShoppingBag,
    LuHeadset,
} from "react-icons/lu";

const benefits = [
    {
        id: 1,
        icon: <LuLeaf />,
        title: "Quality Plants",
        description: "Healthy plants selected to bring more life to your space.",
    },
    {
        id: 2,
        icon: <LuShieldCheck />,
        title: "Trusted Gardeners",
        description: "Find skilled gardeners for your gardening needs.",
    },
    {
        id: 3,
        icon: <LuShoppingBag />,
        title: "Easy Ordering",
        description: "Explore plants and gardening essentials in one place.",
    },
    {
        id: 4,
        icon: <LuHeadset />,
        title: "Helpful Support",
        description: "Get assistance whenever you need help with your order.",
    },
];

const WhyChooseGreenNest = () => {
    return (
        <section className="w-full px-6 md:px-12 py-16 bg-green-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                        Why Choose GreenNest?
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Everything you need to make gardening simple and enjoyable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="text-center px-5 py-7"
                        >
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white text-green-700 flex items-center justify-center text-3xl shadow-sm">
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseGreenNest;