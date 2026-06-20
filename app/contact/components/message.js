"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Message() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container py-4 overflow-hidden">
      {/* Premium CSS Styles for Interactive UI Movements */}
      <style>{`
        /* Load-in entrance transition */
        .anim-fade-up {
          opacity: 0;
          transform: translateY(25px);
          animation: bannerEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes bannerEntrance {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Continuous gentle floating element micro-animation */
        .floating-element {
          animation: smoothFloat 4s ease-in-out infinite;
        }
        @keyframes smoothFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Banner layout state transformations */
        .interactive-banner {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease;
        }
        .interactive-banner:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(25, 135, 84, 0.08) !important;
          border-color: rgba(25, 135, 84, 0.4) !important;
        }
      `}</style>

      {/* BANNER LAYOUT CONTAINER */}
      <div 
        className={`interactive-banner bg-white border p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 ${
          isMounted ? "anim-fade-up" : ""
        }`} 
        style={{ 
          border: "1px solid rgba(25, 135, 84, 0.25)", 
          borderRadius: "24px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)"
        }}
      >
        {/* Left Side Graphic Container */}
        <div className="p-2 floating-element">
          <Image
            src="/message.png"
            alt="Message illustration"
            width={140}
            height={140}
            className="img-fluid object-fit-contain"
            priority
          />
        </div>

        {/* Center Text Column - Hardened for extreme contrast visibility */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center px-md-3">
          <h2 className="display-6 fw-extrabold mb-2" style={{ color: "#0f2d19", letterSpacing: "-0.5px" }}>
            Contact Us
          </h2>
          <p className="fw-semibold fs-6 lh-base mb-0" style={{ maxWidth: "420px", color: "#212529" }}>
            We are here to help! Reach out to us for any questions, feedback, or support.
          </p>
        </div>

        {/* Right Side Image Container */}
        <div className="p-2">
          <div className="overflow-hidden rounded-4 shadow-sm border" style={{ width: "150px", height: "150px", position: "relative" }}>
            <Image
              src="/head.jpg"
              alt="Support representation"
              fill
              sizes="150px"
              className="object-fit-cover transition"
            />
          </div>
        </div>

      </div>
    </div>
  );
}