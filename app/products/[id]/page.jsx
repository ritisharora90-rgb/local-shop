"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchItems() {
      try {
        const shopId =
          typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("shop_id")
            : null;

        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res = await fetch(url, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const data = await res.json();

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);

        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading Fresh Groceries...</p>;
  }

  return (
    <div>
      <h1>Fresh Grocery Items</h1>

      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((item) => {
            const itemId = item._id || item.id;

            return (
              <div key={itemId}>
                <Link href={`/products/${itemId}`}>
                  <img
                    src={
                      item.image || item.image_url || "https://placehold.co/200"
                    }
                    alt={item.name}
                    width={200}
                  />

                  <h2>{item.name}</h2>

                  <p>₹{item.price}</p>
                </Link>

               
                      <button 
                        className="btn btn-outline-success w-50" 
                        onClick={() => { 
                          addToCart(product); 
                          alert(`Added ${product.name} to cart!`);
                        }}
                      >
                        Add to carts
                      </button>
                      <button 
                        className="btn btn-success w-50" 
                        onClick={() => router.push(`/checkout/${product.id}`)}
                      >
                        Buy
                      </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
