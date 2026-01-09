"use client";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleSearch = (e) => {
    const term = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 shadow-md">
      <h1 className="text-3xl font-bold cursor-pointer tracking-tight" onClick={() => router.push("/")}>
        WhatBytes
      </h1>

      <div className="relative w-1/3 md:w-1/2 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-white transition-colors" size={20} />
        <input
          type="text"
          placeholder="Search for products..."
          defaultValue={searchParams.get("search")?.toString()}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-blue-800/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:bg-blue-800 focus:border-blue-400 transition-all"
        />
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="relative flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-6 py-2.5 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <ShoppingCart size={20} />
        <span className="font-medium">Cart</span>
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-900">
          {count}
        </span>
      </button>
    </header>
  );
}
