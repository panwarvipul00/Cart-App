// src/components/ProductCard.jsx
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-cover mb-3 cursor-pointer"
        />
        <h3 className="font-semibold">{product.title}</h3>
      </Link>

      <p className="text-gray-600">${product.price}</p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
