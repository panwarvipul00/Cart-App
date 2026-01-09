// src/components/Header.jsx
"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const router = useRouter();

  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        Logo
      </h1>

      <input
        type="text"
        placeholder="Search for products..."
        className="w-1/2 px-4 py-2 rounded text-black"
      />

      <button
        onClick={() => router.push("/cart")}
        className="relative flex items-center gap-2 bg-blue-800 px-4 py-2 rounded"
      >
        <ShoppingCart size={20} />
        Cart
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
          {count}
        </span>
      </button>
    </header>
  );
}
