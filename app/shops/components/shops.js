"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const COLLECTIONS = [
  {
    id: 1,
    title: "Amit Kiryana Store",
    image: "/shops/amitshop.jpg",
    shop_id: "shop_amit",    // ← must match admin's shop_id in DB
    desc: "Farm-fresh organic produce handpicked daily...",
  },
  {
    id: 2,
    title: "Ritish Kiryana Store",
    image: "/shops/ritishshop.jpg",
    shop_id: "shop_ritish",
    desc: "From farm-fresh milk and artisan cheeses...",
  },
  {
    id: 3,
    title: "Roop Kishor Kiryana Store",
    image: "/shops/roopkishorshop.jpg",
    shop_id: "shop_roopkishor",
    desc: "Stock up on premium grains, cooking oils...",
  },
  {
    id: 4,
    title: "Rocky Kiryana Store",
    image: "/shops/roopashop.jpg",
    shop_id: "shop_rocky",
    desc: "A curated selection of refreshing drinks...",
  },
];

export default function Collections() {
  const [isMounted, setIsMounted] = useState(false);

  // Triggers the initial staggered slide-up entrance animation on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="collection-section py-5 bg-light overflow-hidden">
      {/* Embedded Modern Animation Styles */}
      <style>{`
        /* Entrance Animations */
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-card-entrance {
          opacity: 0;
          transform: translateY(40px);
          animation: cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInDown {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardSlideUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Interactive Hover Animations */
        .interactive-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.4s ease;
        }

        .interactive-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(25, 135, 84, 0.08) !important;
          border-color: rgba(25, 135, 84, 0.25) !important;
        }

        .image-zoom-container .zoom-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .interactive-card:hover .image-zoom-container .zoom-img {
          transform: scale(1.06);
        }

        .arrow-transition {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .interactive-card:hover .arrow-transition {
          transform: translateX(4px);
        }
      `}</style>

      <div className="container py-4">
        
        {/* HEADER SECTION */}
        <div className={`row justify-content-center text-center mb-5 ${isMounted ? "animate-fade-in-down" : ""}`}>
          <div className="col-12 col-md-8 col-lg-7">
            <span className="text-success text-uppercase fw-bold tracking-wider small d-block mb-2">
              Featured Collections
            </span>
            <h2 className="display-5 fw-extrabold text-success mb-3">
              Products For Modern Souls
            </h2>
            <p className="text-muted leading-relaxed fs-6">
              Fresh groceries, everyday essentials, and quality products delivered with care. 
              From fruits and vegetables to dairy, snacks, and household needs, find everything 
              your family requires in one place.
            </p>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <div className="d-flex flex-column gap-5">
            {COLLECTIONS.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  className={`row align-items-center bg-white rounded-4 shadow-sm overflow-hidden p-3 border interactive-card ${
                    isMounted ? "animate-card-entrance" : ""
                  }`}
                  key={item.id}
                  style={{ 
                    // Inline style creates a staggered dynamic entrance delay for each item
                    animationDelay: `${index * 150}ms` 
                  }}
                >
                  {/* Image Column */}
                  <div className={`col-12 col-md-5 p-2 ${isEven ? "order-md-1" : "order-md-2"}`}>
                    <div className="position-relative overflow-hidden rounded-3 image-zoom-container" style={{ height: "240px" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="img-fluid object-fit-cover zoom-img"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`col-12 col-md-7 px-4 py-3 px-md-5 ${isEven ? "order-md-2" : "order-md-1"}`}>
                    <h3 className="h4 fw-bold text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted small mb-4">
                      {item.desc}
                    </p>
                    <Link 
                       href={`/products?shop_id=${item.shop_id}`}
                      className="btn btn-outline-success btn-sm rounded-pill px-4 fw-medium d-inline-flex align-items-center gap-2"
                    >
                      <span>Explore Collection</span>
                      <span className="arrow-transition">&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}