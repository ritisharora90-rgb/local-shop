'use client';

import Image from 'next/image';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const pulseProduct = [
  { id: "p1", name: "Premium Toor Dal", price: 50, image: "/pulses/pulse1.jpg", desc: "Unpolished, high-protein pigeon peas for your daily dal." },
  { id: "p2", name: "Organic Chana Dal", price: 30, image: "/pulses/pulse2.jpg", desc: "Deliciously crunchy split Bengal gram, rich in dietary fiber." },
  { id: "p3", name: "Whole Green Moong", price: 89, image: "/pulses/pulse3.jpg", desc: "Nutrient-dense whole green gram, excellent for healthy sprouts." },
  { id: "p4", name: "Premium Kabuli Chana", price: 69, image: "/pulses/pulse4.jpg", desc: "Large, uniform chickpeas perfect for chole and rich hummus." },
  { id: "p5", name: "Red Masoor Dal", price: 44, image: "/pulses/pulse5.jpg", desc: "Fast-cooking split red lentils, vital for iron intake." },
  { id: "p6", name: "Black Urad Dal Whole", price: 88, image: "/pulses/pulse6.jpg", desc: "Creamy whole black lentils, ideal for authentic Dal Makhani." }
];

export default function Pulses() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <section className="container-fluid px-3 px-md-4 py-5 bg-light overflow-hidden">
      {/* Premium Header Layout */}
      <div className="d-flex align-items-center mb-4 border-bottom pb-3">
        <h2 className="font-heading font-bold text-dark tracking-tight m-0 text-uppercase" style={{ fontSize: "28px" }}>
          Pulses & Grains
        </h2>
        <span className="badge bg-primary-subtle text-primary ms-3 font-body px-2.5 py-1.5 rounded-pill" style={{ color: "#1d4ed8", backgroundColor: "#dbeafe" }}>
          100% Organic & Pure
        </span>
      </div>

      {/* 1. DESKTOP CAROUSEL: Visible on md screens and up (3 cards per slide) */}
      <div id="productPulseDesktop" className="carousel slide d-none d-md-block py-4" data-bs-ride="carousel">
        <div className="carousel-inner px-md-5">
          
          <div className="carousel-item active">
            <div className="row g-4 justify-content-center">
              {pulseProduct.slice(0, 3).map((product) => (
                <div key={`desk-1-${product.id}`} className="col-md-6 col-lg-4">
                  <ProductCard product={product} addToCart={addToCart} router={router} priority={true} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="row g-4 justify-content-center">
              {pulseProduct.slice(3, 6).map((product) => (
                <div key={`desk-2-${product.id}`} className="col-md-6 col-lg-4">
                  <ProductCard product={product} addToCart={addToCart} router={router} priority={false} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Desktop Controls */}
        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#productPulseDesktop" data-bs-slide="prev" style={{ width: "40px" }}>
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#productPulseDesktop" data-bs-slide="next" style={{ width: "40px" }}>
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 2. MOBILE CAROUSEL: Visible on mobile only (1 card per slide) */}
      <div id="productPulseMobile" className="carousel slide d-md-none py-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {pulseProduct.map((product, index) => (
            <div key={`mob-${product.id}`} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="px-3">
                <ProductCard product={product} addToCart={addToCart} router={router} priority={index === 0} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Controls */}
        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#productPulseMobile" data-bs-slide="prev" style={{ width: "35px" }}>
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-2.5" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#productPulseMobile" data-bs-slide="next" style={{ width: "35px" }}>
          <span className="carousel-control-next-icon bg-dark rounded-circle p-2.5" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style jsx global>{`
        /* Card Layer Target Transitions */
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
          border: 1px solid transparent !important;
        }

        .hover-lift .inner-img-wrapper {
          transition: transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Hover Interaction State Actions */
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.09) !important;
          border-color: rgba(22, 163, 74, 0.15) !important;
        }

        /* Deeper card layer transformation: Scales picture container individually */
        .hover-lift:hover .inner-img-wrapper {
          transform: scale(1.06);
        }

        .custom-control {
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .custom-control:hover {
          opacity: 1;
        }
        
        /* Fixed black color for arrows inside white rounded circles */
        .carousel-control-next-icon, .carousel-control-prev-icon {
          filter: none !important;
        }
      `}</style>
    </section>
  );
}

{/* Extracted Shared Sub-Component */}
function ProductCard({ product, addToCart, router, priority }) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-lift">
      {/* Image Container Aspect Ratio Layout */}
      <div className="position-relative bg-light d-flex align-items-center justify-content-center p-4" style={{ height: "260px" }}>
        <div className="inner-img-wrapper">
          <Image 
            src={product.image} 
            width={220} 
            height={220} 
            alt={product.name}
            className="object-fit-contain"
            priority={priority}
          />
        </div>
      </div>

      {/* Product Meta Card Body */}
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <h3 className="font-heading font-semibold text-dark h5 mb-1 tracking-tight">
            {product.name}
          </h3>
          <p className="font-body text-muted small mb-3 leading-relaxed">
            {product.desc}
          </p>
        </div>

        {/* Interactive Pricing Actions Area */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="font-body text-muted small">Price</span>
            <span className="font-body font-bold text-dark h4 m-0">
              ₹{product.price}
            </span>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-success font-body font-medium w-50 py-2 rounded-3 text-sm transition-colors"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-success font-body font-medium w-50 py-2 rounded-3 text-sm shadow-sm"
              style={{ backgroundColor: '#16a34a', border: 'none' }}
              onClick={() => router.push(`/checkout/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}