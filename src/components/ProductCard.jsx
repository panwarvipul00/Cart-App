// src/components/ProductCard.jsx
"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} className="h-40 w-full object-cover mb-3" />
        <h3 className="font-semibold">{product.title}</h3>
      </Link>

      <p className="text-gray-600">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
