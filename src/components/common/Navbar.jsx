import React from 'react'
import { NavLink } from 'react-router'
import { FaSeedling } from 'react-icons/fa'
import { CiCircleInfo } from 'react-icons/ci'
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import { LuLogIn } from 'react-icons/lu'
import { LuUserRoundPlus } from 'react-icons/lu'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FaHome, FaShoppingBag, FaThLarge, FaLeaf, FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const navLinkStyle = ({ isActive }) => isActive ? "text-green-900 font-semibold underline underline-offset-2 decoration-2 border-green-700" : 'text-green-900  hover:text-green-950 text-xl font-bold transition';

    const mobileLink = ({ isActive }) => isActive ? "text-green-900 font-semibold flex flex-col items-center justify-center p-1 " : 'flex flex-col items-center justify-center text-green-800 hover:text-green-950 transition p-1'

    const style = ({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
${isActive ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-600 hover:bg-green-50 hover:text-green-700"
        }`

    return (
        <>
            <nav className='flex justify-between items-center py-3 px-6 bg-slate-50 relative'>
                {/* logo+home */}
                <section className='flex'>
                    <FaSeedling className='text-green-900 text-2xl mt-1' />
                    <span className='text-green-900 text-2xl font-bold'>GreenNest</span>
                </section>
                {/* Mobile Hamburger */}

                <button onClick={() => setMenu(!menu)} className='flex lg:hidden text-green-800 p-2 rounded-lg hover:bg-green-50 transition-colors'>  {menu ? <ImCross size={24} /> : <FaBars size={24} />}
                </button>



                {
                    menu && (
                        <aside className="lg:hidden flex flex-col w-60 min-h-screen bg-white border-r border-gray-200 p-5 absolute top-full right-0 z-40">

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

                {/* PublicLayout links */}
                <div className=' gap-20 text-center items-center hidden lg:flex'>

                    <section className='flex gap-10'>
                        <NavLink className={navLinkStyle} to="/">Home</NavLink>
                        <NavLink className={navLinkStyle} to="/about">About</NavLink>
                        <NavLink className={navLinkStyle} to="/contact">Contact</NavLink>
                    </section>
                    <section className='flex gap-6 '>
                        <NavLink className='text-green-900 text-xl hover:text-green-950 transition text-center font-bold bg-green-100 px-3 py-2 rounded-full' to="login">Login</NavLink>
                        <NavLink className='text-green-900 text-xl hover:text-green-950 transition text-center font-bold bg-green-100 px-3 py-2 rounded-full' to="signup">SignUp</NavLink>
                    </section>
                </div>
            </nav >

            {/* Mobile Layout */}
            <div className='bottom-0 z-50 left-0 fixed flex lg:hidden w-full bg-white '>
                <section className='flex justify-between md:justify-around items-center w-full py-1  px-2'>
                    <NavLink to="/" className={mobileLink}>
                        <FaHome className='text-center text-green-900' />
                        <span className='text-sm text-green-900 font-bold '>Home</span>
                    </NavLink>
                    <NavLink to="/about" className={mobileLink}>
                        <CiCircleInfo className='text-center text-green-900 font-bold' />
                        <span className='text-sm text-green-900 font-bold '>About</span></NavLink>
                    <NavLink to="/contact" className={mobileLink}>
                        <IoMdContact className='text-center text-green-900' />
                        <span className='text-sm text-green-900 font-bold -'> Contact</span></NavLink>
                    <NavLink to="login" className={mobileLink}>
                        <LuLogIn className='text-center text-green-900' />
                        <span className='text-sm text-green-900 font-bold '>Login</span>
                    </NavLink>
                    <NavLink to="signup" className={mobileLink}>
                        <LuUserRoundPlus className='text-center text-green-900' />
                        <span className='text-sm text-green-900 font-bold '>SignUp</span>
                    </NavLink>
                </section>
            </div>
        </>
    )
}

export default Navbar
