
import React, { useState } from "react";
import { Link } from "react-router";
import { LuPlus, LuSearch } from "react-icons/lu";

const MyProducts = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem("addProduct")) || []
    );

    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser")) || {};

    // Get products belonging to the logged-in vendor
    const matchedProducts = products.filter(
        (product) => product.vendorId === loggedInUser.id
    );

    // Search and category filtering
    const filterData = matchedProducts.filter(
        (product) =>
            (search === "" ||
                product.name.toLowerCase().includes(search.trim().toLowerCase())) &&
            (category === "" || product.category === category)
    );

    // Delete product
    const deleteProduct = (id) => {
        const updatedProduct = products.filter(
            (product) => product.id !== id
        );

        setProducts(updatedProduct);

        localStorage.setItem(
            "addProduct",
            JSON.stringify(updatedProduct)
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">

            {/* Heading */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-green-800">
                        My Products
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Manage your nursery products and stock.
                    </p>
                </div>

                <Link
                    to="/vendor/add-product"
                    className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                >
                    <LuPlus />
                    Add Product
                </Link>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">

                {/* Search and Filter */}
                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1">
                        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-green-600"
                        />
                    </div>

                    <select
                        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="indoor-plants">Indoor Plants</option>
                        <option value="outdoor-plants">Outdoor Plants</option>
                        <option value="seeds">Seeds</option>
                        <option value="pots-planters">Pots & Planters</option>
                        <option value="gardening-tools">Gardening Tools</option>
                    </select>
                </div>

                {/* Products Table */}
                {filterData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[750px] text-left">
                            <thead>
                                <tr className="border-b bg-gray-50 text-sm text-gray-600">
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Stock</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterData.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b text-sm text-gray-600 hover:bg-gray-50"
                                    >
                                        <td className="p-4 font-medium text-gray-800">
                                            {product.name}
                                        </td>

                                        <td className="p-4">
                                            {product.category}
                                        </td>

                                        <td className="p-4">
                                            ₹{product.price}
                                        </td>

                                        <td className="p-4">
                                            {product.quantity}
                                        </td>

                                        <td className="p-4">
                                            {product.status}
                                        </td>

                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <Link
                                                    to={`/vendor/products/edit-product/${product.id}`}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteProduct(product.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="py-12 text-center">
                        <p className="font-semibold text-gray-700">
                            No products found
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Start adding products to your nursery store.
                        </p>

                        <Link
                            to="/vendor/add-product"
                            className="mt-4 inline-block font-semibold text-green-700 hover:underline"
                        >
                            Add your first product
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProducts;
