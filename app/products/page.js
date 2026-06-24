'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 👈 1. Import Next.js router
import { useCart } from "@/context/CartContext"; 

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart(); 
  const router = useRouter(); // 👈 2. Initialize the router instance

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch("https://local-shop-admin.onrender.com/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (loading) return <p style={{ padding: "40px", fontFamily: "sans-serif" }}>Loading Fresh Groceries...</p>;

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9fafb", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.25rem", marginBottom: "32px", fontWeight: "700", color: "#111827" }}>
          Fresh Grocery Items
        </h1>

        <style dangerouslySetInnerHTML={{
          __html: `
          .grocery-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; transition: all 0.25s ease-in-out; }
          .grocery-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); border-color: #d1d5db; }
          .cart-btn { flex: 1; padding: 10px; background-color: #ffffff; border: 1px solid #10b981; color: #10b981; border-radius: 6px; font-weight: 600; cursor: pointer; }
          .cart-btn:hover { background-color: #ecfdf5; }
          .buy-btn { flex: 1; padding: 10px; background-color: #10b981; border: 1px solid #10b981; color: #ffffff; border-radius: 6px; font-weight: 600; cursor: pointer; text-align: center; text-decoration: none; }
          .buy-btn:hover { background-color: #059669; }
        `}} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
          {products.map((item) => {
            const itemId = item._id || item.id;

            return (
              <div key={itemId} className="grocery-card">
                <Link href={`/products/${itemId}`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "16px" }}>
                  <div style={{ overflow: "hidden", borderRadius: "8px", backgroundColor: "#f3f4f6", height: "200px" }}>
                    <img src={item.image || item.image_url || "https://placehold.co/140x140?text=No+Image"} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "8px" }} />
                  </div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1f2937", margin: "12px 0 4px 0" }}>{item.name}</h2>
                  <div style={{ fontSize: "1.15rem", fontWeight: "700", color: "#111827" }}>{item.price ? `₹${item.price}` : "Fresh Stock"}</div>
                </Link>

                <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                  <button 
                    className="cart-btn" 
                    onClick={() => {
                      addToCart(item);
                      alert(`Added ${item.name} to cart!`); 
                    }}
                  >
                    Add to cart
                  </button>
                  
                  {/* 3. Improved Buy Now button with dynamic routing */}
                  <button 
                    className="buy-btn" 
                    onClick={() => {
                      router.push(`/checkout/${itemId}?qty=1`);
                    }}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}