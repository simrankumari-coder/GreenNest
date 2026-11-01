import React from "react";
import { Link } from "react-router";
import { LuPackage, LuShoppingBag } from "react-icons/lu";

const MyOrders = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const myOrders = orders.filter((order) => order.userId === loggedInUser.id)
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                    My Orders
                </h1>
                <p className="mt-2 text-gray-500">
                    Track and manage your GreenNest orders.
                </p>
            </div>

            {myOrders.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                    <LuShoppingBag className="mx-auto mb-4 text-5xl text-gray-400" />

                    <h2 className="text-xl font-semibold text-gray-800">
                        No Orders Yet
                    </h2>

                    <p className="mt-2 text-gray-500">
                        You haven't placed any orders yet.
                    </p>

                    <Link
                        to="/shop"
                        className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                    >
                        Explore Shop
                    </Link>
                </div>
            ) : (
                <div className="space-y-5">
                    {MyOrders.map((order) => (
                        <div
                            key={order.orderId}
                            className="rounded-xl bg-white p-5 shadow-sm"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order ID
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        #{order.orderId}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order Date
                                    </p>
                                    <p className="font-medium text-gray-800">
                                        {order.orderDate}
                                    </p>
                                </div>

                                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                                    {order.status}
                                </span>
                            </div>

                            <div className="space-y-3 py-4">
                                {order.cart.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center gap-4"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-16 w-16 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-800">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                ₹{product.price} × {product.quantity}
                                            </p>
                                        </div>

                                        <p className="font-semibold text-gray-800">
                                            ₹{product.price * product.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between border-t border-gray-100 pt-4">
                                <span className="font-semibold text-gray-700">
                                    Total Amount
                                </span>
                                <span className="font-bold text-green-700">
                                    ₹{order.finalAmount}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;