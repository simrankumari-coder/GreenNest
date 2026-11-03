import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { IoCubeOutline, IoBagOutline } from 'react-icons/io5'
import { FaRegClock } from 'react-icons/fa'
import { CiCircleCheck } from 'react-icons/ci'
import { LuPackageSearch, LuClipboardList } from 'react-icons/lu'
import { Link } from 'react-router'
import { useState } from 'react'
const VendorDashboard = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("addProduct")) || []
    )
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {}

    const myProducts = products.filter((product) => product.vendorId === loggedInUser.id)

    const totalProducts = myProducts.length;
    const activeProducts = myProducts.filter((product) => product.status === "active").length
    const inActiveProducts = myProducts.filter((product) => product.status === "inactive").length
    console.log("products", products)
    console.log("logged user", loggedInUser)
    console.log("my products", myProducts)
    return (

        <div className="min-h-screen bg-gray-50 p-4 md:p-8">  <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-800">
                Vendor Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
                Welcome to your GreenNest dashboard.
            </p>
        </div>
            {/* Summary Cards */}
            <div className="rounded-2xl bg-green-50 p-5 md:p-8">
                <div className="mb-10">
                    <h2 className="mb-5 text-xl font-bold text-green-800">
                        Summary Cards
                    </h2>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <IoCubeOutline className="mb-3 text-3xl text-green-700" />
                            <p className="text-2xl font-bold text-gray-800">{totalProducts}</p>
                            <p className="mt-1 text-sm text-gray-500">Total Products</p>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <IoBagOutline className="mb-3 text-3xl text-blue-600" />
                            <p className="text-2xl font-bold text-gray-800">{activeProducts}</p>
                            <p className="mt-1 text-sm text-gray-500">Active Products</p>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <FaRegClock className="mb-3 text-3xl text-orange-500" />
                            <p className="text-2xl font-bold text-gray-800">{inActiveProducts}</p>
                            <p className="mt-1 text-sm text-gray-500">Inactive Products</p>
                        </div>

                    </div>
                </div>

                {/* Quick Actions */}
                <div>
                    <h2 className="mb-5 text-xl font-bold text-green-800">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                        <Link to="/vendor/add-product"
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
                            <IoIosAddCircleOutline className="mb-3 text-3xl text-green-700" />
                            <h3 className="font-semibold text-gray-800">Add Product</h3>
                            <p className="mt-1 text-sm text-gray-500">List a new product</p>
                        </Link>

                        <Link to="/vendor/products"
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
                            <LuPackageSearch className="mb-3 text-3xl text-green-700" />
                            <h3 className="font-semibold text-gray-800">My Products</h3>
                            <p className="mt-1 text-sm text-gray-500">Manage listings</p>
                        </Link>


                    </div>
                </div>

            </div>
        </div>)
}

export default VendorDashboard