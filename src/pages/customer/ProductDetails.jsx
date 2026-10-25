import React from 'react'
import { useParams } from 'react-router'
import products from '../../data/products'
import { useState } from 'react'
import { Link } from 'react-router'
const ProductDetails = () => {
    const { productId } = useParams();
    const [count, setCount] = useState(1)

    const product = products.find((item) => item.id === Number(productId))

    return (
        <div>

            <div className="min-h-screen bg-green-50/40 px-4 py-10 sm:px-8 lg:px-16">

                {product ? (
                    <div className="mx-auto max-w-6xl">

                        {/* Back Link */}
                        <Link
                            to="/"
                            className="mb-8 inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition"
                        >
                            ← Back to Home
                        </Link>

                        {/* Product Details Container */}
                        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-5 shadow-md md:grid-cols-2 md:p-8">

                            {/* Product Image */}
                            <div className="h-[300px]  md:h-[550px] overflow-hidden rounded-xl bg-green-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Product Information */}
                            <div className="flex flex-col justify-center gap-5">

                                <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                                    {product.category}
                                </p>

                                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                                    {product.name}
                                </h1>

                                <p className="text-yellow-600">
                                    ★ {product.rating} / 5
                                </p>

                                <p className="text-3xl font-bold text-green-700">
                                    ₹{product.price}
                                </p>

                                <div className="h-px bg-gray-200"></div>

                                <div>
                                    <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                        Product Description
                                    </h2>

                                    <p className="leading-relaxed text-gray-600">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Plant Care Information */}
                                <div className="rounded-xl bg-green-50 p-4">
                                    <h2 className="mb-2 font-semibold text-green-800">
                                        Plant Care Tips
                                    </h2>

                                    <p className="text-sm leading-relaxed text-gray-600">
                                        Give your plant proper sunlight, water it regularly
                                        according to its needs, and keep it in a suitable
                                        environment for healthy growth.
                                    </p>
                                </div>
                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-gray-700">Quantity:</span>

                                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                                        <button onClick={() => setCount(count - 1)} className="px-4 py-2 text-lg hover:bg-green-50">
                                            −
                                        </button>

                                        <span className="px-5 py-2 font-medium">{count}</span>

                                        <button onClick={() => setCount(count + 1)} className="px-4 py-2 text-lg hover:bg-green-50">
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart */}
                                <button className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <h2 className="mb-3 text-2xl font-bold text-gray-800">
                            Product Not Found!
                        </h2>

                        <p className="mb-6 text-gray-500">
                            Sorry, this product is not available.
                        </p>

                        <Link
                            to="/"
                            className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
                        >
                            Back to Home
                        </Link>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ProductDetails
