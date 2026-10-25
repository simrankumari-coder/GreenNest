import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <main className='pb-20 sm:pb-0'>

                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
