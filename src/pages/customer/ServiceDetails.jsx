import React from 'react'
import { useParams } from 'react-router'
import services from '../../data/services';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const service = services.find((item) => item.id === Number(serviceId))
    console.log(service)
    return (


        <div className="min-h-screen bg-green-50/40 px-4 py-10 sm:px-8 lg:px-16">

            {service ? (
                <div className="mx-auto max-w-6xl">

                    {/* Service Details */}
                    <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-5 shadow-md md:grid-cols-2 md:p-8">

                        {/* Service Image */}
                        <div className="h-[300px] overflow-hidden rounded-xl md:h-[350px]">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Service Information */}
                        <div className="flex flex-col justify-center gap-5">

                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                                {service.name}
                            </h1>

                            <p className="leading-relaxed text-gray-600">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <p className="text-2xl font-bold text-green-700">
                                    Starting ₹{service.price}
                                </p>

                                <p className="text-yellow-600">
                                    ★ {service.rating} / 5
                                </p>
                            </div>

                            <p className="text-gray-600">
                                Duration: <span className="font-semibold">{service.duration}</span>
                            </p>

                            <div className="h-px bg-gray-200"></div>

                            <div>
                                <h2 className="mb-3 text-lg font-semibold text-gray-800">
                                    What's Included?
                                </h2>

                                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                                    <li>Professional gardening assistance</li>
                                    <li>Careful handling of plants and equipment</li>
                                    <li>Guidance for maintaining your garden</li>
                                </ul>
                            </div>

                            <button className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
                                Book This Service
                            </button>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-20 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Service Not Found!
                    </h2>
                </div>
            )}

        </div>
    );


}

export default ServiceDetails
