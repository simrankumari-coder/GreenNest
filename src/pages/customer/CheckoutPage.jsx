import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [pin, setPin] = useState("")
  const [city, setCity] = useState("")
  const [error, setError] = useState(false)
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

  const totalPrice = () => {
    return cart.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity)
    }, 0)
  }
  const deliveryCharges = 15;
  const finalAmount = () => {
    return totalPrice() + deliveryCharges;
  }

  const handleOrder = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      return;
    }
    const orders = JSON.parse(localStorage.getItem("orders")) || []


    if (name.trim().length < 2 || phone.length != 10 || address.trim() === "" || city.trim() === "" || pin.length === "" && pin.length != 6) {
      setError(true)
      return;
    } else {


      const orderData = {
        orderId: Date.now(),
        userId: loggedInUser.id,
        name,
        phone,
        address,
        pin,
        city,
        cart,
        totalPrice: totalPrice(),
        deliveryCharges,
        finalAmount: finalAmount(),
        orderDate: new Date().toLocaleDateString(),
        status: "Pending"
      }
      orders.push(orderData)
      localStorage.setItem("orders", JSON.stringify(orders))
      setError(false)
      setName("")
      setPhone("")
      setAddress("")
      setCity("")
      setPin("")
      localStorage.removeItem("cart");
      navigate(`/orderConfirmation/${orderData.orderId}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Checkout
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Delivery Details */}
          <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              Delivery Information
            </h2>

            <form className="space-y-5" onSubmit={handleOrder}>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input value={name} onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
                {(name.length > 0 && name.length < 2) && <p className="text-red-600 text-sm">Name should have two characters</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
                {(phone.length > 0 && phone.length != 10) && <p className="text-red-600 text-sm">Phone number should have 10 digits</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Delivery Address
                </label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}
                  rows="3"
                  placeholder="Enter your complete address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    City
                  </label>
                  <input value={city} onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Enter city"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    PIN Code
                  </label>
                  <input value={pin} onChange={(e) => setPin(e.target.value)}
                    type="text"
                    placeholder="Enter PIN code"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                  />
                  {(pin.length > 0 && pin.length != 6) && <p className="text-red-600 text-sm">Pincode is not valid</p>}
                </div>
              </div>


              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Place Order
              </button>
              {error && <p className="text-red-600 text-sm">Fields can't be empty</p>}
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₹{product.price} × {product.quantity}
                    </p>
                    <p className="font-semibold text-gray-800">
                      ₹{product.price * product.quantity}
                    </p>
                  </div>

                </div>
              ))
            )}

            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{totalPrice()}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery Charges</span>
                <span>₹{deliveryCharges}</span>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-bold text-gray-800">
                <span>Final Amount</span>
                <span>₹{finalAmount()}</span>
              </div>
            </div>
            <div>


              <Link
                to="/cart"
                className="mt-4 block text-center text-sm text-green-700 hover:underline"
              >
                Back to Cart
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
