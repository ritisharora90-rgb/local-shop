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
    searchParams.get("shop_id");

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);

        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res =
          await fetch(url);

        if (!res.ok)
          throw new Error();

        const data =
          await res.json();

        setProducts(
          Array.isArray(data)
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

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div
            className="spinner-border text-success mb-3"
            role="status"
          />

          <p className="fw-semibold">
            Loading Fresh
            Groceries...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        <div className="mb-5 text-center">
          <h1 className="fw-bold">
            {shopId
              ? `${shopId} Shop`
              : "Fresh Grocery Items"}
          </h1>

          <p className="text-muted">
            Fresh products delivered
            to your doorstep
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center">
            <h3>
              No products found
            </h3>
          </div>
        ) : (

          <div className="row g-4">

            {products.map(
              (item) => {
                const itemId =
                  item._id ||
                  item.id;

                return (
                  <div
                    key={itemId}
                    className="
                    col-12
                    col-md-6
                    col-lg-3
                  "
                  >
                    <div className="card h-100 border-0 shadow rounded-4">

                      <Link
                        href={`/products/${itemId}`}
                      >
                        <div
                          className="bg-light p-3 d-flex justify-content-center align-items-center"
                          style={{
                            height:
                              "250px",
                          }}
                        >
                          <img
                            src={
                              item.image ||
                              item.image_url ||
                              "https://placehold.co/300"
                            }
                            alt={
                              item.name
                            }
                            className="img-fluid"
                            style={{
                              maxHeight:
                                "220px",
                              objectFit:
                                "contain",
                            }}
                          />
                        </div>
                      </Link>

                      <div className="card-body d-flex flex-column">

                        <Link
                          href={`/products/${itemId}`}
                          className="text-decoration-none"
                        >
                          <h5 className="fw-bold text-dark">
                            {
                              item.name
                            }
                          </h5>
                        </Link>

                        <h4 className="text-success mb-4">
                          ₹
                          {item.price}
                        </h4>

                        <div className="mt-auto d-flex gap-2">

                          <button 
                        className="btn btn-outline-success w-50" 
                        onClick={() => { 
                          addToCart(item); 
                          alert(`Added ${item.name} to cart!`);
                        }}
                      >
              Add to cart
            </button>

                          <button
                            className="btn btn-success w-50"
                            onClick={() =>
                              router.push(
                                `/checkout/${itemId}`
                              )
                            }
                          >
                            Buy
                          </button>

                        </div>

                      </div>

                    </div>
                  </div>
                );
              }
            )}

          </div>
        )}
      </div>
    </div>
  );
}