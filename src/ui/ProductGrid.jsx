import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-12xl mx-auto sm:mx-8 lg:mx-12 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-8 md:gap-3">
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
