import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const updatedQuantity = (id, action) => {
        const updatedCart = cart.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: action === "increase" ? product.quantity + 1 :
                        Math.max(1, product.quantity - 1)
                }
            } else {
                return product;
            }
        })
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))

    }

    const deleteItem = (idToDelete) => {
        const removeItem = cart.filter((product) => product.id !== idToDelete)
        setCart(removeItem)
        localStorage.setItem("cart", JSON.stringify(removeItem))

    }

    const totalPrice =  () => {
        return cart.reduce((accumulator , product) =>{
            return accumulator +  (product.price * product.quantity)
        },0)
       
    }
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
            <div className="mx-auto max-w-6xl">

                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    My Shopping Cart
                </h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Cart Items */}
                    <div className="space-y-5 lg:col-span-2">
                        {cart.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                                >
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-28 w-28 rounded-lg object-cover"
                                    />

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {product.name}
                                        </h2>

                                        <p className="mt-2 text-gray-600">
                                            Price: ₹{product.price}
                                        </p>

                                        <div className="mt-3 flex items-center gap-3">
                                            <button onClick={() => updatedQuantity(product.id, "decrease")} className="rounded-md border px-3 py-1"> −</button>
                                            <span className="font-medium">{product.quantity}</span>
                                            <button onClick={() => updatedQuantity(product.id, "increase")} className="rounded-md border px-3 py-1"> +</button>
                                        </div>

                                        <p className="mt-2 font-semibold text-green-700">
                                            Subtotal: ₹{product.price * product.quantity}
                                        </p>
                                        <button className="mt-3 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50" onClick={() => deleteItem(product.id)}>Remove Item</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Order Summary */}
                    <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-semibold">
                            Order Summary
                        </h2>

                        <div className="mb-4 flex justify-between">
                            <span>Total :</span>
                            <span>₹{totalPrice()}</span>
                        </div>

                        <Link to="/checkout" className="w-full rounded-lg bg-green-700 px-2  py-3 text-white hover:bg-green-800">
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;