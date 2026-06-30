"use client";

import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function Products() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductsContent />
    </Suspense>
  );
}