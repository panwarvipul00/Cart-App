// src/app/page.jsx
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="p-6 flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Product Listing</h2>
        <ProductGrid />
      </div>
    </main>
  );
}
