import React from "react";
import { Link } from "react-router";
import { LuPlus, LuSearch, LuPencil, LuTrash2 } from "react-icons/lu";

const MyProducts = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
    const matchedProducts = addProduct.filter((product) => product.vendorId === loggedInUser.id)
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">

            {/* Heading */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-green-800">My Products</h1>
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
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-green-600"
                        />
                    </div>

                    <select className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600">
                        <option value="">All Categories</option>
                        <option value="indoor-plants">Indoor Plants</option>
                        <option value="outdoor-plants">Outdoor Plants</option>
                        <option value="seeds">Seeds</option>
                        <option value="pots-planters">Pots & Planters</option>
                        <option value="gardening-tools">Gardening Tools</option>
                    </select>
                </div>

                {/* Products Table */}
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
                            {matchedProducts.map((product) => {
                                return <tr key={product.id} className="border-b bg-gray-50 text-sm text-gray-600">
                                    <th>{product.name}</th>
                                    <th>{product.category}</th>
                                    <th>{product.price}</th>
                                    <th>{product.quantity}</th>
                                    <th>{product.description}</th>
                                    <th>{product.status}</th>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                <div className="py-12 text-center">
                    <p className="font-semibold text-gray-700">
                        No products added yet
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

            </div>
        </div>
    );
};

export default MyProducts;