"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { FaHome, FaTrash, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate total price automatically
  const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price) || 0), 0);

  return (
    <div className="cart-page-wrapper min-vh-100 py-4 bg-light overflow-hidden">
      {/* High-End Hardware-Accelerated Animations */}
      <style>{`
        .anim-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: pageEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pageEntrance {
          to { opacity: 1; transform: translateY(0); }
        }

        .cart-item-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          cursor: pointer;
        }
        .cart-item-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.04) !important;
          border-color: rgba(25, 135, 84, 0.2) !important;
        }

        .btn-modern {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-weight: 600;
          border-radius: 8px;
        }
        .btn-modern:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <div className="container">
        {/* HEADER BLOCK */}
        <div className={`d-flex flex-row pb-3 mb-4 justify-content-between align-items-center border-bottom ${isMounted ? "anim-fade-up" : ""}`}>
          <div>
            <h1 className="h2 fw-extrabold mb-1" style={{ color: "#0f2d19", letterSpacing: "-0.5px" }}>
              Shopping Cart
            </h1>
            <p className="text-secondary small fw-medium mb-0">
              Manage your selected neighborhood grocery essentials
            </p>
          </div>
          <Link href="/" className="btn btn-outline-success btn-modern p-2 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "45px", height: "45px" }}>
            <FaHome size={20} />
          </Link>
        </div>

        {cart.length === 0 ? (
          /* EMPTY CART VIEW */
          <div className={`text-center py-5 bg-white rounded-4 border shadow-sm my-5 ${isMounted ? "anim-fade-up" : ""}`} style={{ animationDelay: "100ms" }}>
            <div className="text-success mb-3 opacity-70">
              <FaShoppingBag size={54} />
            </div>
            <h3 className="fw-extrabold text-dark mb-2">Your Cart is Empty</h3>
            <p className="text-secondary fw-medium small mb-4 mx-auto" style={{ maxWidth: "360px" }}>
              Looks like you haven't added anything yet. Explore nearby local shops to stock up on essentials.
            </p>
            <Link href="/" className="btn btn-success btn-modern px-4 py-2 rounded-pill text-decoration-none">
              Return to Shop
            </Link>
          </div>
        ) : (
          /* ACTIVE CART CONTENT GRID */
          <div className={`row g-4 ${isMounted ? "anim-fade-up" : ""}`} style={{ animationDelay: "100ms" }}>
            
            {/* ITEMS COLUMN */}
            <div className="col-12 col-lg-8">
              <div className="row g-3">
                {cart.map((item, index) => {
                  // 1. Resolve target ID safely whether it uses local mock 'id' or database '_id'
                  const itemId = item._id || item.id;

                  return (
                    <div key={itemId || index} className="col-12 col-sm-6 col-md-4">
                      <div 
                        className="bg-white border p-3 d-flex flex-column h-100 align-items-center justify-content-between text-center rounded-4 shadow-sm cart-item-card"
                        onClick={() => router.push(`/products/${itemId}`)} // Redirect to dynamic product page on click
                      >
                        
                        {/* Crisp Framework-Optimized Image Container */}
                        <div className="position-relative d-flex align-items-center justify-content-center w-100" style={{ height: "160px" }}>
                          <Image
                            src={item.image || item.image_url || "/placeholders/no-image.png"}
                            alt={item.name || "Product image"}
                            width={140}
                            height={140}
                            className="object-fit-contain"
                            unoptimized
                          />
                        </div>

                        {/* Info & CTA Layout Block */}
                        <div className="mt-3 w-100">
                          <h5 className="fw-bold text-dark text-truncate mb-1" style={{ fontSize: "0.95rem" }}>
                            {item.name}
                          </h5>
                          <p className="fw-extrabold text-success mb-3 fs-5">
                            ₹{item.price}
                          </p>

                          <div className="d-flex flex-column gap-2">
                            <button
                              className="btn btn-outline-danger btn-modern btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation(); // 👈 Stops redirect execution when clicking remove
                                removeFromCart(itemId); // 👈 Passes the correct valid item ID
                              }}
                            >
                              <FaTrash size={12} /> <span>Remove</span>
                            </button>

                            <button
                              className="btn btn-success btn-modern btn-sm w-100 text-white"
                              onClick={(e) => {
                                e.stopPropagation(); // 👈 Stops outer element triggers
                                router.push(`/checkout/${itemId}`);
                              }}
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
            </div>

            {/* ORDER SUMMARY BLOCK */}
            <div className="col-12 col-lg-4">
              <div className="bg-white p-4 rounded-4 border shadow-sm position-sticky" style={{ top: "24px" }}>
                <h4 className="fw-extrabold mb-4" style={{ color: "#0f2d19" }}>
                  Order Summary
                </h4>
                
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-light">
                  <span className="text-secondary fw-medium">Total Items</span>
                  <span className="fw-bold text-dark">{cart.length}</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-dark fw-bold fs-5">Grand Total</span>
                  <span className="fw-extrabold text-success fs-4">₹{totalPrice}</span>
                </div>

                <button 
                  className="btn btn-success btn-modern w-100 py-3 rounded-3 text-white d-flex align-items-center justify-content-center gap-2 border-0 shadow-sm"
                  onClick={() => router.push("/checkout/all")}
                >
                  <span>Proceed to Checkout All</span>
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}