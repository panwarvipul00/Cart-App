// src/components/ProductGrid.jsx
"use client";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function ProductGrid() {
  const params = useSearchParams();

  const category = params.get("category") || "all";
  const maxPrice = Number(params.get("price")) || 1000;
  const search = params.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter(product => {
    const matchCategory =
      category === "all" || product.category === category;
    const matchPrice = product.price <= maxPrice;
    const matchSearch = product.title.toLowerCase().includes(search);

    return matchCategory && matchPrice && matchSearch;
  });

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No products found 😕
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
