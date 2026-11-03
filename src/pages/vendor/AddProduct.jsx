import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
const AddProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("active")
    const [img, setImg] = useState(null)
    const [error, setError] = useState(false)
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    const handleImage = (e) => {
        const selectImg = e.target.files[0];
        if (!selectImg) return;

        if (selectImg.size > 1024 * 1024) {
            alert("Please select img less than 1 MB")
            e.target.value = "";
            return;
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            setImg(reader.result)
        }
        reader.readAsDataURL(selectImg)
    }

    const handleProduct = (e) => {
        e.preventDefault()
        if (name.trim() === "" || category.trim() === "" || Number(price) <= 0 || Number(quantity) < 0 || description.trim() === "" || img === null) {
            setError(true)
            return
        } else {
            const addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
            const productData = {
                vendorId: loggedInUser.id,
                id: Date.now(),
                name,
                category,
                price,
                quantity,
                description,
                status,
                img
            }
            addProduct.push(productData)
            localStorage.setItem("addProduct", JSON.stringify(addProduct))
            setError(false)
            setName("")
            setCategory("")
            setPrice("")
            setQuantity("")
            setDescription("")
            setStatus("active")
            setImg("")
            navigate("/vendor/products")
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-4xl">

                <div className="mb-6">
                    <Link to="/vendor/dashboard" className="text-sm text-green-700 hover:underline">
                        ← Back to Dashboard
                    </Link>
                    <h1 className="mt-4 text-2xl font-bold text-green-800">
                        Add New Product
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Add a new product to your nursery store.
                    </p>
                </div>

                <form className="space-y-6 rounded-2xl bg-white p-5 shadow-sm md:p-8" onSubmit={handleProduct}>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text" value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Category
                        </label>
                        <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select category</option>
                            <option value="indoor-plants">Indoor Plants</option>
                            <option value="outdoor-plants">Outdoor Plants</option>
                            <option value="seeds">Seeds</option>
                            <option value="pots-planters">Pots & Planters</option>
                            <option value="gardening-tools">Gardening Tools</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Price (₹)
                            </label>
                            <input
                                type="number"
                                min="0" value={price} onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Enter quantity"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            rows="4" value={description} onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your product..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Image
                        </label>
                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-green-600">
                            <span className="mb-2 text-green-700">Choose product image</span>
                            <span className="text-sm text-gray-500">
                                Select an image from your device
                            </span>
                            <input onChange={handleImage} type="file" accept="image/*" className="mt-3 w-full text-sm" />
                            {img && (
                                <img src={img} alt="image preview" className="h-32 w-32 rounded-lg object-cover" />
                            )}
                        </label>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Status
                        </label>
                        <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                        <Link
                            to="/vendor/products"
                            className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                        >
                            Add Product
                        </button>
                        {error && (<p className="text-sm mt-1 text-red-600">Fields can't be empty</p>)}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;