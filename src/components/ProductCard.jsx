
"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
      <Link href={`/product/${product.id}`} className="block relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          alt={product.title}
        />
      </Link>

      <div className="p-4">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">{product.title}</h3>
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
