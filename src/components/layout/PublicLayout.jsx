import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout
