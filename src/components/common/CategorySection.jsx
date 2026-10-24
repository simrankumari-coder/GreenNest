import React from 'react'
import categories from '../../data/categories'
import CategoryCard from './CategoryCard'
const CategorySection = () => {
    return (
        <div className='bg-slate-50'>
            {/* main heading */}
            <div className='p-4'>
                <h1 className='text-green-800 text-3xl text-center font-bold '>Shop by Category</h1>
                <p className='text-gray-600 text-sm text-center'>Find the perfect plants and essentials for your green space.</p>
            </div>
            {/* category card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5 p-4 mt-6'>
                {
                    categories.map(item =>

                        <CategoryCard key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} link={item.link} />
                    )
                }
            </div>


        </div>
    )
}

export default CategorySection
