'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const shopId = searchParams.get("shop_id");
  
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res = await fetch(url);
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', color: '#4b5563' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #10b981', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ fontSize: '18px', fontWeight: '500' }}>Loading Fresh Groceries...</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", background: "#f9fafb", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "32px", borderBottom: "1px solid #e5e7eb", paddingBottom: "16px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>
            {shopId ? `${shopId} Shop` : "Fresh Grocery Items"}
          </h1>
          <p style={{ color: "#6b7280", margin: 0 }}>Handpicked, fresh, and delivered straight to your door.</p>
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <p style={{ fontSize: '18px', color: '#6b7280', margin: 0 }}>No products found in this category.</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {products.map((item) => {
              const itemId = item._id || item.id;
              const productPrice = item.price;

              return (
                <div 
                  key={itemId}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                    border: "1px solid #f3f4f6",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <Link href={`/products/${itemId}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div style={{ background: "#f3f4f6", padding: "16px", display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                      <img
                        src={item.image || item.image_url || "https://placehold.co/200x200"}
                        alt={item.name}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>
                    
                    <div style={{ padding: "20px 20px 12px 20px" }}>
                      <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: "0 0 8px 0", height: "26px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {item.name}
                      </h2>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span style={{ fontSize: "22px", fontWeight: "700", color: "#10b981" }}>₹{productPrice}</span>
                        <span style={{ fontSize: "12px", color: "#9ca3af", textDecoration: "line-through" }}>₹{Math.round(productPrice * 1.2)}</span>
                      </div>
                    </div>
                  </Link>

                  <div style={{ padding: "0 20px 20px 20px", marginTop: "auto", display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        flex: 1,
                        padding: "10px 0",
                        background: "#fff",
                        border: "2px solid #10b981",
                        color: "#10b981",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#f0fdf4'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
                    >
                      Add to cart
                    </button>
                    
                    <button
                      onClick={() => router.push(`/checkout/${itemId}?qty=1`)}
                      style={{
                        flex: 1,
                        padding: "10px 0",
                        background: "#10b981",
                        border: "2px solid #10b981",
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#059669';
                        e.currentTarget.style.borderColor = '#059669';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#10b981';
                        e.currentTarget.style.borderColor = '#10b981';
                      }}
                    >
                      Buy Now
                    </button>
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