import React from 'react'
import ProductCard from '../../components/common/ProductCard'
import products from '../../data/products'
import { useState } from 'react'
const ShopPage = () => {
    const [search, setSearch] = useState("")
    const filteredProducts = products
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-green-800">
                    Shop Plants
                </h1>
                <p className="text-gray-600 mt-2">
                    Find the perfect plants to bring nature into your home.
                </p>
            </div>

            <div className='mb-8'>
                <input type="text" value={search} onChange={() => setSearch(e.target.value)}
                    placeholder='Search plants,seeds, pots & gardening products...'
                    className='w-full md:w-96 px-4 py-3 border border-gray-300 rounded-xl outline-none
        focus:ring-2 focus:ring-green-500'
                />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            </div>

        </div>
    )
}

export default ShopPage