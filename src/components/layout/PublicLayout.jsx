import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../common/Navbar'
import PublicSidebar from '../../pages/public/PublicSidebar'
import Footer from '../common/Footer'
const PublicLayout = () => {
    return (
        <div >
            <Navbar />
            <main className='pb-20 sm:pb-0 min-h-screen bg-gray-50 flex'>
                <PublicSidebar className="" />
                <Outlet className="flex-1 min-w-0 " />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
