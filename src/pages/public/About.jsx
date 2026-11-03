import React from "react";
import {
    LuSprout,
    LuHeart,
    LuLeaf,
    LuUsers,
    LuFlower2
} from "react-icons/lu";
import peaceLily from "../../assets/images/peace-lily.jpg";


const About = () => {
    const features = [
        {
            icon: <LuSprout />,
            title: "Quality Plants",
            description:
                "Explore a variety of indoor plants, outdoor plants, seeds and planters for your space."
        },
        {
            icon: <LuHeart />,
            title: "Love for Nature",
            description:
                "We encourage everyone to bring more greenery into their homes and everyday lives."
        },
        {
            icon: <LuUsers />,
            title: "Expert Gardeners",
            description:
                "Connect with gardeners for plant care, garden cleaning and other gardening services."
        }
    ];

    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="bg-green-50 px-5 py-16 md:py-24">
                <div className="mx-auto max-w-6xl text-center">
                    <span className="font-semibold uppercase tracking-widest text-green-700">
                        About GreenNest
                    </span>

                    <h1 className="mt-4 text-3xl font-bold text-green-900 md:text-5xl">
                        Bringing Nature Closer to You
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-600 leading-7">
                        GreenNest is your destination for plants, gardening
                        essentials and professional gardening services.
                        We make it easier to create greener and healthier spaces.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">

                <div>
                    <img
                        src={peaceLily}
                        alt="Beautiful green plants in a garden"
                        className="h-72 w-full rounded-2xl object-cover shadow-md md:h-96"
                    />
                </div>

                <div>
                    <span className="font-semibold uppercase tracking-widest text-green-700">
                        Our Story
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900">
                        Growing a Greener Tomorrow
                    </h2>

                    <p className="mt-5 leading-7 text-gray-600">
                        We believe that every space can become greener with
                        the right plants and a little care. GreenNest brings
                        together plant lovers, gardening products and
                        gardening services in one convenient place.
                    </p>

                    <p className="mt-4 leading-7 text-gray-600">
                        Whether you are a beginner or an experienced plant
                        lover, GreenNest helps you find what you need to
                        make your gardening journey easier and more enjoyable.
                    </p>
                </div>

            </section>

            {/* What We Offer */}
            <section className="bg-gray-50 px-5 py-16 md:py-20">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-12 text-center">
                        <span className="font-semibold uppercase tracking-widest text-green-700">
                            What We Offer
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-gray-900">
                            Everything for Your Green Space
                        </h2>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Our Mission */}
            <section className="px-5 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">

                    <LuFlower2 className="mx-auto text-4xl text-green-700" />

                    <h2 className="mt-4 text-3xl font-bold text-green-900">
                        Our Mission
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Our mission is to make gardening simple and accessible
                        by bringing quality plants, useful gardening products
                        and reliable gardening services together on one platform.
                    </p>

                </div>
            </section>

        </div>
    );
};

export default About;