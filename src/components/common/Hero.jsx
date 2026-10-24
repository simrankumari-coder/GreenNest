import React from 'react'
import bg from "../../assets/images/bg.jpg"
const Hero = () => {
    return (
        <div className='flex w-full gap-5 px-10 py-10 flex-col md:flex-row'>
            {/* left side */}
            <section className='w-full md:w-1/2 px-1 md:px-4 flex flex-col gap-2 md:gap-6 '>
                <h1 className='text-green-800 font-bold text-3xl md:text-5xl'>Bring Nature Home with GreenNest</h1>
                <p className='text-gray-600 text-sm tracking-wide'>Discover beautiful plants and gardening services to make every space greener and be happy</p>
                <div className='gap-3  flex flex-col md:flex-row'>
                    <button className='border-green-900 border md:px-3 p-2 md:py-2 font-semibold text-green-900 rounded-full'>Shop Plants</button>
                    <button className='bg-green-900 md:px-3 p-2 md:py-2 text-white font-semibold rounded-full'>Explore Gardening Services</button>
                </div>
            </section>
            {/* right side */}
            <section className='md:w-1/2 w-full  rounded-lg overflow-hidden'>
                <img
                    className='w-full h-full object-cover'
                    src={bg}
                    alt="background img"
                />
            </section>
        </div>
    )
}

export default Hero
