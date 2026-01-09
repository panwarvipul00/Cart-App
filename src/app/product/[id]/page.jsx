// src/app/product/[id]/page.jsx
"use client";

import { useParams } from "next/navigation";
import products from "@/data/products";
// src/app/product/[id]/page.jsx
import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function ProductDetailPage() {
    const { id } = useParams();

    const product = products.find(
        p => p.id === Number(id)
    );

    if (!product) {
        return (
            <p className="p-6 text-center text-gray-500">
                Product not found
            </p>
        );
    }

    return (
        <main className="p-6 flex flex-col md:flex-row gap-8">

            {/* Image Section */}
            <div className="md:w-1/2 bg-white p-6 rounded shadow">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-2">
                    {product.title}
                </h1>

                <p className="text-xl text-blue-600 mb-4">
                    ${product.price}
                </p>

                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="mb-4">
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                    const [qty, setQty] = useState(1);
                    const {addToCart} = useCart();

                    <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={e => setQty(Number(e.target.value))}
                        className="w-20 border rounded px-2 py-1"
                    />


                </div>

                {/* Add to Cart */}
                <button
                    on Click={() => addToCart(product, qty)}
                    className="w-full bg-blue-600 text-white py-3 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </main>
    );
}
