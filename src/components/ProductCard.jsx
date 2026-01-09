// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover mb-3"
      />

      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
