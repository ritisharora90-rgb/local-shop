"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Message() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const SOCIAL_LINKS = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={32} />,
      url: "https://wa.me/#",
      color: "#25D366"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={32} />,
      url: "https://instagram.com/#",
      color: "#E1306C"
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={32} />,
      url: "https://facebook.com/#",
      color: "#1877F2"
    },
    {
      name: "Twitter/X",
      icon: <FaTwitter size={32} />,
      url: "https://x.com/#",
      color: "#1DA1F2"
    }
  ];

  return (
    <div className="social-connect-section py-5 bg-white border-top overflow-hidden">
      <style>{`
        .anim-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: sectionEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes sectionEntrance {
          to { opacity: 1; transform: translateY(0); }
        }

        .social-card {
          color: #495057;
          border: 1px solid #dee2e6;
          border-radius: 16px;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.3s ease,
                      border-color 0.3s ease;
        }

        .social-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
          color: var(--brand-color) !important;
          border-color: var(--brand-color) !important;
        }
      `}</style>

      <div className="container text-center">
        <h2 
          className={`fw-extrabold mb-4 pb-2 ${isMounted ? "anim-fade-up" : ""}`}
          style={{ color: "#0f2d19", letterSpacing: "-0.5px" }}
        >
          Connect With Us
        </h2>

        <div 
          className={`row g-3 justify-content-center pt-2 ${isMounted ? "anim-fade-up" : ""}`}
          style={{ animationDelay: "150ms" }}
        >
          {SOCIAL_LINKS.map((item, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card d-flex flex-column align-items-center justify-content-center p-4 h-100 bg-light"
                // Fixed: Removed TypeScript type assertion
                style={{ "--brand-color": item.color }}
              >
                <div className="mb-2 d-flex align-items-center justify-content-center">
                  {item.icon}
                </div>
                <span className="fw-bold fs-6 tracking-wide">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}