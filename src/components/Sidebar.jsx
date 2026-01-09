// src/components/Sidebar.jsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const params = useSearchParams();

  const category = params.get("category") || "all";
  const price = params.get("price") || 1000;

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set(key, value);
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <aside className="bg-blue-700 text-white p-4 w-full md:w-64 rounded">
      <h2 className="font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <h3 className="mb-2">Category</h3>
        {["all", "electronics", "clothing", "home"].map(cat => (
          <label key={cat} className="block capitalize">
            <input
              type="radio"
              checked={category === cat}
              onChange={() => updateParams("category", cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h3 className="mb-2">Max Price: ${price}</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={e => updateParams("price", e.target.value)}
          className="w-full"
        />
      </div>
    </aside>
  );
}
