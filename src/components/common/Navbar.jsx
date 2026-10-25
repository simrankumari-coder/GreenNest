import React from 'react'
import { NavLink } from 'react-router'
import { FaSeedling } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { CiCircleInfo } from 'react-icons/ci'
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import { LuLogIn } from 'react-icons/lu'
import { LuUserRoundPlus } from 'react-icons/lu'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navLinkStyle = ({ isActive }) => isActive ? "text-green-900 font-semibold underline underline-offset-2 decoration-2 border-green-700" : 'text-green-900  hover:text-green-950 text-xl font-bold transition';
    const mobileLink = ({ isActive }) => isActive ? "text-green-900 font-semibold flex flex-col items-center justify-center p-1 " : 'flex flex-col items-center justify-center text-green-800 hover:text-green-950 transition p-1'
    return (
        <>
            <nav className='flex justify-between items-center py-3 px-6 bg-slate-50'>
                {/* logo+home */}
                <section className='flex'>
                    <FaSeedling className='text-green-900 text-2xl mt-1' />
                    <span className='text-green-900 text-2xl font-bold'>GreenNest</span>
                </section>
                {/* PublicLayout links */}
                <div className=' gap-20 text-center items-center hidden sm:flex'>

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
            <div className='bottom-0 z-50 left-0 fixed flex sm:hidden w-full bg-white '>
                <section className='flex justify-between items-center w-full py-1 px-2'>
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
