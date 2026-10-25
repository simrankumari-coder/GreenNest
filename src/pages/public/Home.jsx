import React from 'react'
import Hero from '../../components/common/Hero'
import CategorySection from "../../components/common/CategorySection"
import FeaturedProducts from '../../components/common/FeaturedProducts'
import WhyChooseGreenNest from '../../components/common/WhyChooseGreenNest'
import CustomerReviews from '../../components/common/CustomerReviews'
const Home = () => {
    return (
        <div>
            <Hero />
            <CategorySection />
            <FeaturedProducts />
            <WhyChooseGreenNest />
            <CustomerReviews />
        </div>
    )
}

export default Home
