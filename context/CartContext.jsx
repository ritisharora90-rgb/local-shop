"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Unique cart per browser/user
  const [guestId] = useState(() => {
    if (typeof window === "undefined") return "";
    let id = localStorage.getItem("guestId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("guestId", id);
    }
    return id;
  });

  const [cart, setCart] = useState([]);

  // CRITICAL FIX: Tracks if the database items have loaded on refresh
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load cart from MongoDB on initial page load
  useEffect(() => {
    if (!guestId) return;

    async function getCart() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${API_URL}/api/cart/${guestId}`);
        const data = await res.json();

        // Ensure we parse the data safely if the backend accidentally sends text
        let itemsArray = data.items || [];
        if (typeof itemsArray === "string") {
          itemsArray = JSON.parse(itemsArray);
        }

        setCart(itemsArray);
      } catch (err) {
        console.error("Error loading cart:", err);
        setCart([]);
      } finally {
        setIsLoaded(true); // Mark as loaded so saving is now permitted
      }
    }

    getCart();
  }, [guestId]);

  // 2. Save cart to MongoDB ONLY after the initial data has finished loading
  useEffect(() => {
    if (!guestId || !isLoaded) return; // FIX: Prevents wiping out database data on fresh reload

    async function saveCart() {
      try {
        await fetch("http://127.0.0.1:8000/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: guestId,
            items: cart, // Pure JS Array sent cleanly
          }),
        });
      } catch (err) {
        console.error("Error saving cart:", err);
      }
    }

    saveCart();
  }, [cart, guestId, isLoaded]); // Added isLoaded to tracking array

  // Add product
  const addToCart = (product) => {
    setCart((prev) => {
      const productId = product._id || product.id;
      const existing = prev.find((item) => (item._id || item.id) === productId);

      if (existing) {
        return prev.map((item) =>
          (item._id || item.id) === productId
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => (item._id || item.id) !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
