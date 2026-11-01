import React from "react";
import { Link } from "react-router";
import { LuCircleCheck } from "react-icons/lu";
import { useParams } from "react-router";
const OrderConfirmation = () => {
    const { orderId } = useParams()
    const orders = JSON.parse(localStorage.getItem("orders")) || []
    const currentOrder = orders.find((order) => order.orderId === Number(orderId))
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <LuCircleCheck className="text-5xl text-green-700" />
                </div>

                <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
                    Order Placed Successfully!
                </h1>

                <p className="mb-8 text-gray-500">
                    Thank you for shopping with GreenNest.
                    Your order has been received successfully.
                </p>
                {currentOrder ?

                    <div className="mb-8 rounded-xl bg-gray-50 p-5 text-left">
                        <h2 className="mb-4 text-lg font-semibold text-gray-800">
                            Order Details
                        </h2>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Order ID</span>
                            <span className="font-medium text-gray-800">
                                {currentOrder.orderId}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Order Date</span>
                            <span className="font-medium text-gray-800">
                                {currentOrder.orderDate}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Total Amount</span>
                            <span className="font-bold text-green-700">
                                {currentOrder.finalAmount}
                            </span>
                        </div>
                    </div>

                    :
                    <p>Order Not Found</p>
                }
                <div className="space-y-3 text-sm">

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/shop"
                            className="flex-1 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
                        >
                            Continue Shopping
                        </Link>

                        <Link
                            to="/customer/orders"
                            className="flex-1 rounded-lg border border-green-700 px-5 py-3 font-semibold text-green-700 transition hover:bg-green-50"
                        >
                            View My Orders
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
