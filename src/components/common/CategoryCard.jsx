import React from 'react'
import { Link } from 'react-router'
const CategoryCard = ({ id, name, link, description, image }) => {
    return (
        <div className='w-full bg-green-200 p-5 '>
            {/* image */}
            <div className=' overflow-hidden'>

                <img className='w-full h-full object-cover' src={image} name={name} />
            </div>
            {/* description of image */}
            <div className='flex flex-col gap-2 items-center justify-center mt-4'>
                <h2 className='text-mauve-800  font-bold text-xl'>{name}</h2>
                <p className='text-gray-700 text-sm'>{description}</p>
                <Link className='bg-green-800 rounded-full text-white px-3 py-2 mt-1' to={link}>Explore Category</Link>
            </div>
        </div>
    )
}

export default CategoryCard
