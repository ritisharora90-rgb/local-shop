"use client";

import { useCart } from "@/context/CartContext";
import { FaHome, FaTrash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <div className="d-flex flex-row p-3 justify-content-between align-items-center">
        <h2>My Loving Cart</h2>
        <Link href="/">
          <FaHome size={35} />
        </Link>
      </div>

      {cart.length === 0 ? (
        <h4>Your Cart is Empty</h4>
      ) : (
        /* 1. THIS ROW WRAPPER IS WHAT PLACES ITEMS NEXT TO EACH OTHER */
        <div className="row g-4">
          {cart.map((item) => (
            /* 2. Using Bootstrap columns: 1 per row on tiny screens, 2 on small, 3 on medium, 4 on large */
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              
              {/* 3. The card design itself */}
              <div className="border p-3 d-flex flex-column h-100 align-items-center justify-content-between text-center bg-white rounded shadow-sm">
                
                <div className="d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                  <Image 
                    src={item.image} 
                    alt={item.name || "Product"} 
                    width={180} 
                    height={180} 
                    className="object-fit-contain" 
                  />
                </div>

                <div className="mt-3 w-100">
                  <h5 className="text-truncate fs-6">{item.name}</h5>
                  <p className="fw-bold text-success mb-3">₹{item.price}</p>
                  
                  <button
                    className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash size={14} /> Remove
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}