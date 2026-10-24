import React from 'react'
import Hero from '../../components/common/Hero'
import CategorySection from "../../components/common/CategorySection"
import FeaturedProducts from '../../components/common/FeaturedProducts'
const Home = () => {
    return (
        <div>
            <Hero />
            <CategorySection />
            <FeaturedProducts />
        </div>
    )
}

export default Home
