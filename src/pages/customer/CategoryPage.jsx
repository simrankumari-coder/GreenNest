import React from 'react'
import { useParams } from 'react-router'
import categories from '../../data/categories';
import products from '../../data/products';
import ProductCard from '../../components/common/ProductCard';
const CategoryPage = () => {
    const { categoryId } = useParams();
    const selectedCategory = categories.find((item) => item.id === Number(categoryId))
    const filteredProducts = products.filter((product) => product.category === selectedCategory.productCategory)
    return (
        <div>
            <div className="min-h-screen bg-green-50/40 px-4 py-10 sm:px-8 lg:px-12">

                {selectedCategory ? (
                    <>
                        {/* Category Header */}
                        <section className="mb-10 rounded-2xl bg-white px-6 py-10 text-center shadow-sm">
                            <h1 className="mb-3 text-3xl font-bold text-green-800 sm:text-4xl">
                                {selectedCategory.name}
                            </h1>

                            <p className="mx-auto max-w-2xl text-slate-600">
                                {selectedCategory.description}
                            </p>
                        </section>

                        {/* Product Count */}
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-slate-800">
                                Explore Products
                            </h2>

                            <p className="text-sm text-slate-500">
                                {filteredProducts.length} Products
                            </p>
                        </div>

                        {/* Filtered Products */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <p className="py-12 text-center text-slate-500">
                                No products available in this category.
                            </p>
                        )}
                    </>
                ) : (
                    <p className="py-20 text-center text-xl font-semibold text-slate-600">
                        Category not found!
                    </p>
                )}

            </div>
        </div>
    )
}
export default CategoryPage
