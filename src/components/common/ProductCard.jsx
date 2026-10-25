
import React from "react";
import { Link } from "react-router";
const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">

            {/* Product Image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col gap-3">

                <p className="text-sm text-green-700 font-medium capitalize">
                    {product.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-800">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>

                <p className="text-sm text-gray-500">
                    {product.description}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-700">
                        ₹{product.price}
                    </span>

                    <span className="text-sm text-yellow-600">
                        ★ {product.rating}
                    </span>
                </div>

                <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default ProductCard;
