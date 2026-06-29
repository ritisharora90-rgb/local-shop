"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
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
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load cart from MongoDB on initial page load
  useEffect(() => {
    if (!guestId) return;

    async function getCart() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_URL}/api/cart/${guestId}`);
        const data = await res.json();

        let itemsArray = data.items || [];
        if (typeof itemsArray === "string") {
          itemsArray = JSON.parse(itemsArray);
        }

        setCart(itemsArray);
      } catch (err) {
        console.error("Error loading cart:", err);
        setCart([]);
      } finally {
        setIsLoaded(true);
      }
    }

    getCart();
  }, [guestId]);

  // 2. Save cart ONLY after initial load — and use env var, not localhost
  useEffect(() => {
    if (!guestId || !isLoaded) return;

    async function saveCart() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL; // ✅ Fixed: was hardcoded to localhost
        await fetch(`${API_URL}/api/cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: guestId, items: cart }),
        });
      } catch (err) {
        console.error("Error saving cart:", err);
      }
    }

    saveCart();
  }, [cart, guestId, isLoaded]);

  const addToCart = (product) => {
    setCart((prev) => {
      const productId = product._id || product.id;
      const existing = prev.find((item) => (item._id || item.id) === productId);

      if (existing) {
        return prev.map((item) =>
          (item._id || item.id) === productId
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => (item._id || item.id) !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ Fixed: safe fallback prevents crash during prerender
export const useCart = () =>
  useContext(CartContext) ?? {
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
  };