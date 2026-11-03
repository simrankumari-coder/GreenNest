import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const products = JSON.parse(localStorage.getItem("addProduct")) || [];

    const matchedProduct = products.find(
        (product) => product.id === Number(productId)
    );

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!matchedProduct) return;

        setName(matchedProduct.name);
        setCategory(matchedProduct.category);
        setPrice(matchedProduct.price);
        setQuantity(matchedProduct.quantity);
        setDescription(matchedProduct.description);
        setStatus(matchedProduct.status);
        setImg(matchedProduct.img);
    }, []);

    const handleImage = (e) => {
        const selectedImg = e.target.files[0];

        if (!selectedImg) return;

        if (selectedImg.size > 1024 * 1024) {
            alert("Please select an image smaller than 1 MB.");
            e.target.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setImg(reader.result);
        };

        reader.readAsDataURL(selectedImg);
    };

    const handleProduct = (e) => {
        e.preventDefault();

        if (
            !name.trim() ||
            !category ||
            price === "" ||
            Number(price) <= 0 ||
            quantity === "" ||
            Number(quantity) < 0 ||
            !description.trim() ||
            !status ||
            !img
        ) {
            setError(true);
            return;
        }

        if (!matchedProduct) {
            alert("Product not found.");
            return;
        }

        const latestProducts =
            JSON.parse(localStorage.getItem("addProduct")) || [];

        const updatedProducts = latestProducts.map((product) => {
            if (product.id === Number(productId)) {
                return {
                    ...product,
                    name,
                    category,
                    price,
                    quantity,
                    description,
                    status,
                    img
                };
            }

            return product;
        });

        localStorage.setItem(
            "addProduct",
            JSON.stringify(updatedProducts)
        );

        setError(false);
        navigate("/vendor/products");
    };

    if (!matchedProduct) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-red-600">
                    Product not found
                </h2>
                <Link to="/vendor/products" className="mt-4 inline-block text-green-700 underline">
                    Back to My Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-4xl">

                <div className="mb-6">
                    <Link
                        to="/vendor/dashboard"
                        className="text-sm text-green-700 hover:underline"
                    >
                        ← Back to Dashboard
                    </Link>

                    <h1 className="mt-4 text-2xl font-bold text-green-800">
                        Edit Product
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Update your product details.
                    </p>
                </div>

                <form
                    onSubmit={handleProduct}
                    className="space-y-6 rounded-2xl bg-white p-5 shadow-sm md:p-8"
                >

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600"
                        >
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
                                min="0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
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
                                min="0"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
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
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your product..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Image
                        </label>

                        {img && (
                            <div className="mb-3">
                                <p className="mb-2 text-sm text-gray-600">
                                    Current image:
                                </p>
                                <img
                                    src={img}
                                    alt="Current product"
                                    className="h-32 w-32 rounded-lg object-cover"
                                />
                            </div>
                        )}

                        <input
                            onChange={handleImage}
                            type="file"
                            accept="image/*"
                            className="w-full text-sm"
                        />

                        <p className="mt-1 text-xs text-gray-500">
                            Choose a new image only if you want to replace the current one. Maximum 1 MB.
                        </p>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product Status
                        </label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600"
                        >
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
                            Update Product
                        </button>
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">
                            Please fill in all required fields correctly.
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
};

export default EditProduct;