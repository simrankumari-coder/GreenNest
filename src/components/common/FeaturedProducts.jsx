import React from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const FeaturedProducts = () => {
    const featuredProducts = products.slice(0, 6);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    useEffect(() => {
        const updateCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1)
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2)
            } else {
                setVisibleCount(3)
            }

        }

        updateCount();
        window.addEventListener("resize", updateCount)
        return () => {
            window.removeEventListener("resize", updateCount)
        }
    }, [])


    const nextCount = () => {
        setCurrentIndex((next) => next >= featuredProducts.length - visibleCount ? 0 : next + 1)
    }
    const prevCount = () => {
        setCurrentIndex((prev) => prev === 0 ? featuredProducts.length - visibleCount : prev - 1)
    }

    return (
        <section className="w-full px-6 md:px-12 py-14 bg-white">

            {/* Section Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                    Featured Products
                </h2>

                <p className="text-gray-600 mt-3">
                    Explore our handpicked collection of plants and gardening essentials.
                </p>
            </div>

            {/* Products Grid */}
            <div className="flex items-center gap-2">
                <button onClick={prevCount} className="shrink-0 bg-green-700 text-white p-3 rounded-full transition hover:bg-green-800" ><LuChevronLeft size={22} /></button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 flex-1 min-w-0">

                    {featuredProducts.slice(currentIndex, currentIndex + visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
                <button onClick={nextCount} className="bg-green-700 shrink-0 text-white p-3 rounded-full transition hover:bg-green-800" ><LuChevronRight size={22} /></button>

            </div>

        </section>
    );
};

export default FeaturedProducts;
