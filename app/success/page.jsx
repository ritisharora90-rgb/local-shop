"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaShoppingBag, FaArrowRight, FaTruck } from "react-icons/fa";

export default function Success() {
  const [isMounted, setIsMounted] = useState(false);

  // Trigger gentle entrance animations on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5 overflow-hidden position-relative">
      
      {/* Background Ambience Enhancements */}
      <div className="position-absolute rounded-circle bg-success opacity-10 blur-glow shadow-lg" style={{ width: "400px", height: "400px", top: "-100px", right: "-100px" }}></div>
      <div className="position-absolute rounded-circle bg-success opacity-10 blur-glow shadow-lg" style={{ width: "300px", height: "300px", bottom: "-50px", left: "-100px" }}></div>

      <div className="container" style={{ maxWidth: "550px" }}>
        <div className={`card border-0 shadow-lg p-4 p-md-5 text-center bg-white rounded-4 scale-up-card ${isMounted ? "active" : ""}`}>
          
          {/* Animated Green Checkmark Icon Box */}
          <div className="mb-4 d-inline-flex justify-content-center align-items-center position-relative mx-auto">
            <div className="pulse-ring position-absolute rounded-circle border border-success opacity-20"></div>
            <FaCheckCircle className="text-success check-bounce" size={74} />
          </div>

          {/* Heading Blocks */}
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold text-uppercase tracking-wider mb-2 small">
            Payment Secured
          </span>
          <h1 className="fw-extrabold text-dark mb-2 display-6" style={{ letterSpacing: "-1px" }}>
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-secondary fw-medium mx-auto mb-4" style={{ maxWidth: "400px", fontSize: "0.95rem" }}>
            Thank you for supporting your local neighborhood store. Your fresh groceries are being gathered and packed with care.
          </p>

          {/* Interactive Delivery Notice Block */}
          <div className="bg-light border rounded-3 p-3 mb-4 d-flex align-items-center justify-content-center gap-3">
            <div className="bg-success text-white p-2 rounded-circle d-flex align-items-center justify-content-center">
              <FaTruck size={18} />
            </div>
            <div className="text-start">
              <div className="fw-bold text-dark small">Hyperlocal Instant Delivery</div>
              <div className="text-muted small">Estimated arrival within 30-45 minutes</div>
            </div>
          </div>

          <hr className="text-muted opacity-25 mb-4" />

          {/* Call To Actions Redirect Links */}
          <div className="d-flex flex-column gap-2">
            <Link 
              href="/products" 
              className="btn btn-success py-3 fw-bold rounded-3 text-white shadow-sm d-flex align-items-center justify-content-center gap-2 border-0 action-btn-hover text-decoration-none"
            >
              <FaShoppingBag size={16} />
              <span>Continue Shopping</span>
              <FaArrowRight size={14} className="arrow-slide" />
            </Link>
          </div>

        </div>
      </div>

      {/* Embedded Global Style CSS Tweaks */}
      <style jsx global>{`
        .bg-success-subtle {
          background-color: #dcfce7 !important;
          color: #166534 !important;
        }
        .rounded-4 {
          border-radius: 24px !important;
        }
        .blur-glow {
          filter: blur(80px);
          z-index: 0;
        }
        .card {
          z-index: 1;
        }

        /* Entry Animations */
        .scale-up-card {
          opacity: 0;
          transform: scale(0.95) translateY(15px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scale-up-card.active {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Checkmark Bounce */
        .check-bounce {
          animation: checkPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both;
        }
        @keyframes checkPop {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }

        /* Decorative Pulse Rings */
        .pulse-ring {
          width: 110px;
          height: 110px;
          animation: pulseFade 2s infinite ease-out;
        }
        @keyframes pulseFade {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        /* Interactive Dynamic Button Styling Custom Hooks */
        .action-btn-hover {
          transition: all 0.2s ease-in-out;
        }
        .action-btn-hover:hover {
          background-color: #15803d !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(21, 128, 61, 0.15) !important;
        }
        .action-btn-hover:hover .arrow-slide {
          transform: translateX(4px);
          transition: transform 0.2s ease;
        }
        .arrow-slide {
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}