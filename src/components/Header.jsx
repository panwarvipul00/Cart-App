// src/components/Header.jsx
"use client";
import { ShoppingCart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Logo</h1>

      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleSearch}
        className="w-1/2 px-4 py-2 rounded text-black outline-none"
      />

      <button className="relative flex items-center gap-2 bg-blue-800 px-4 py-2 rounded">
        <ShoppingCart size={20} />
        Cart
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
          0
        </span>
      </button>
    </header>
  );
}
