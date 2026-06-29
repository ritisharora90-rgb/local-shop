'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const { addToCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const shopId = searchParams.get('shop_id');

  useEffect(() => {
    async function fetchItems() {
      try {
        const url = shopId
          ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
          : `https://local-shop-admin.onrender.com/api/products`;

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [shopId]);

  // Filter by category
  function filterByCategory(category) {
    setActiveCategory(category);
    if (category === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === category));
    }
  }

  if (loading) return <p style={{ padding: "40px" }}>Loading Fresh Groceries...</p>;

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9fafb", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <h1 style={{ fontSize: "2.25rem", marginBottom: "24px", fontWeight: "700", color: "#111827" }}>
          Fresh Grocery Items
        </h1>

        {/* CATEGORY FILTER BUTTONS */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {["all", "dairy", "pulses", "snacks", "beverages", "spices", "grains", "oils", "other"].map(cat => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #10b981",
                backgroundColor: activeCategory === cat ? "#10b981" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#10b981",
                fontWeight: "600",
                cursor: "pointer",
                textTransform: "capitalize"
              }}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .grocery-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; transition: all 0.25s ease-in-out; }
          .grocery-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); border-color: #d1d5db; }
          .cart-btn { flex: 1; padding: 10px; background-color: #ffffff; border: 1px solid #10b981; color: #10b981; border-radius: 6px; font-weight: 600; cursor: pointer; }
          .cart-btn:hover { background-color: #ecfdf5; }
          .buy-btn { flex: 1; padding: 10px; background-color: #10b981; border: 1px solid #10b981; color: #ffffff; border-radius: 6px; font-weight: 600; cursor: pointer; text-align: center; text-decoration: none; }
          .buy-btn:hover { background-color: #059669; }
        `}} />

        {/* NO PRODUCTS MESSAGE */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px", color: "#6b7280" }}>
            <p style={{ fontSize: "1.2rem" }}>No products found in this category.</p>
          </div>
        )}

        {/* PRODUCTS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
          {filtered.map((item) => {
            const itemId = item._id || item.id;
            return (
              <div key={itemId} className="grocery-card">
                <Link href={`/products/${itemId}`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "16px" }}>
                  <div style={{ overflow: "hidden", borderRadius: "8px", backgroundColor: "#f3f4f6", height: "200px" }}>
                    <img
                      src={item.image || item.image_url || "https://placehold.co/140x140?text=No+Image"}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain", padding: "8px" }}
                    />
                  </div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1f2937", margin: "12px 0 4px 0" }}>
                    {item.name}
                  </h2>
                  {/* CATEGORY BADGE */}
                  {item.category && (
                    <span style={{ fontSize: "0.75rem", backgroundColor: "#ecfdf5", color: "#059669", padding: "2px 8px", borderRadius: "10px", fontWeight: "600" }}>
                      {item.category}
                    </span>
                  )}
                  <div style={{ fontSize: "1.15rem", fontWeight: "700", color: "#111827", marginTop: "6px" }}>
                    {item.price ? `₹${item.price}` : "Fresh Stock"}
                  </div>
                </Link>

                <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                  <button
                    className="cart-btn"
                    onClick={() => { addToCart(item); alert(`Added ${item.name} to cart!`); }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="buy-btn"
                    onClick={() => router.push(`/checkout/${itemId}?qty=1`)}
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