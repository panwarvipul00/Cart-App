
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="p-6 flex flex-col md:flex-row gap-6">
      <Suspense fallback={<div className="w-64 h-64 bg-gray-200 animate-pulse rounded-xl" />}>
        <Sidebar />
      </Suspense>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Product Listing</h2>
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[...Array(6)].map((_, i) => <div key={i} className="h-64 bg-gray-200 rounded-xl" />)}
        </div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </main>
  );
}
