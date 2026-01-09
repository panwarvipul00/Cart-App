
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
    <aside className="bg-blue-700 text-white p-6 w-full md:w-64 rounded-xl md:sticky md:top-24 h-fit transition-all duration-300 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {["all", "electronics", "clothing", "home"].map(cat => (
            <label key={cat} className="flex items-center cursor-pointer group">
              <div className={`w-5 h-5 rounded-full border-2 border-white/50 mr-3 flex items-center justify-center transition-colors ${category === cat ? 'border-white' : 'group-hover:border-white'}`}>
                {category === cat && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
              </div>
              <input
                type="radio"
                checked={category === cat}
                onChange={() => updateParams("category", cat)}
                className="hidden"
              />
              <span className="capitalize text-blue-100 group-hover:text-white transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={e => updateParams("price", e.target.value)}
          className="w-full accent-white h-1.5 bg-blue-900 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-blue-200 mt-2 font-medium">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>
    </aside>
  );
}
