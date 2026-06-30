"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  useCart,
} from "@/context/CartContext";

export default function ProductsContent() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const { addToCart } =
    useCart();

  const router =
    useRouter();

  const searchParams =
    useSearchParams();

  const shopId =
    searchParams.get(
      "shop_id"
    );

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);

        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res =
          await fetch(url);

        const data =
          await res.json();

        setProducts(
          Array.isArray(
            data
          )
            ? data
            : []
        );
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [shopId]);

  if (loading)
    return (
      <p>
        Loading...
      </p>
    );

  return (
    <div>
      {products.map(
        (item) => (
          <div
            key={
              item._id
            }
          >
            {item.name}
          </div>
        )
      )}
    </div>
  );
}