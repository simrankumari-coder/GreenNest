import React from 'react'
import { NavLink } from 'react-router'
import { FaHome, FaShoppingBag, FaThLarge, FaLeaf, FaShoppingCart, FaUser } from 'react-icons/fa'

const PublicSidebar = () => {
    const style = ({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
${isActive ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-600 hover:bg-green-50 hover:text-green-700"
        }`
    return (
        <aside className="hidden md:flex flex-col w-60 min-h-screen bg-white border-r border-gray-200 p-5">

            <h2 className="text-2xl font-bold text-green-700 mb-8">
                GreenNest
            </h2>

            <nav className="flex flex-col gap-3">
                <NavLink to="/" className={style}>
                    <FaHome />
                    <span>Home</span>
                </NavLink>

                <NavLink to="/shop" className={style}>
                    <FaShoppingBag />
                    <span>Shop Plants</span>
                </NavLink>

                <NavLink to="/categories" className={style}>
                    <FaThLarge />
                    <span>Categories</span>
                </NavLink>

                <NavLink to="/services" className={style}>
                    <FaLeaf />
                    <span>Gardening Services</span>
                </NavLink>

                <NavLink to="/cart" className={style}>
                    <FaShoppingCart />
                    <span>Cart</span>
                </NavLink>

                <NavLink to="/customer/dashboard" className={style}>
                    <FaUser />
                    <span>My Account</span>
                </NavLink>


            </nav>

        </aside>
    )
}

export default PublicSidebar