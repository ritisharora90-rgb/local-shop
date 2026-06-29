"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

// ❌ REMOVED THE INTERFACE BLOCK FROM HERE

export default function Products() {
  // Configured state to default to an empty array without Type annotations
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const shopId = searchParams.get("shop_id");

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);

        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [shopId]);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-success mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-secondary fw-semibold fs-5">Loading Fresh Groceries...</p>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        
        <div className="border-b pb-3 mb-5">
          <h1 className="display-5 fw-bold text-dark text-capitalize">
            {shopId ? `${shopId} Shop` : "Fresh Grocery Items"}
          </h1>
          <p className="text-muted fs-5">
            Handpicked, organic, fresh, and delivered right to your doorstep.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-5 bg-white rounded-4 border border-secondary border-dashed my-5">
            <h3 className="mt-3 fw-semibold text-dark">No products found</h3>
            <p className="text-muted">We could not find any items matching this shop setup.</p>
          </div>
        ) : (
          
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((item) => {
              const itemId = item._id || item.id;
              const displayName = item.name || "Unnamed Product";
              const displayImage = item.image || item.image_url || "https://placehold.co/300x300?text=No+Image";
              const displayPrice = item.price ?? "N/A";

              return (
                <div key={itemId} className="col">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                    
                    <Link href={`/products/${itemId}`} className="bg-light d-flex align-items-center justify-content-center p-4" style={{ height: "220px" }}>
                      <img
                        src={displayImage}
                        alt={displayName}
                        className="img-fluid h-100 object-fit-contain transition-transform"
                        loading="lazy"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      />
                    </Link>

                    <div className="card-body d-flex flex-column justify-content-between p-4">
                      <div className="mb-3">
                        <Link href={`/products/${itemId}`} className="text-decoration-none">
                          <h5 className="card-title text-dark fw-bold text-truncate mb-1">
                            {displayName}
                          </h5>
                        </Link>
                        <p className="card-text fs-4 fw-extrabold text-success mb-0">
                          ₹{displayPrice}
                        </p>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          onClick={() => {
                            addToCart(item);
                            alert(`Added ${displayName} to cart!`);
                          }}
                          className="btn btn-outline-success w-50 py-2 rounded-3 fw-semibold"
                        >
                          Add to cart
                        </button>
                        <button
                          onClick={() => router.push(`/checkout/${itemId}`)}
                          className="btn btn-success w-50 py-2 rounded-3 fw-semibold"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 