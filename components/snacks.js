'use client';

import Image from 'next/image';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const snacksProduct = [
  { id: "s1", name: "Crunchy Potato Chips", image: "/snacks/snacks2.avif", price: 77, desc: "Perfectly salted, crispy golden potato slices." },
  { id: "s2", name: "Roasted Diet Makhana", image: "/snacks/snacks1.avif", price: 69, desc: "Healthy, low-calorie foxnuts roasted with mild spices." },
  { id: "s3", name: "Premium Party Mix", image: "/snacks/snacks3.avif", price: 99, desc: "An assortment of premium nuts and savory crunchies." },
  { id: "s4", name: "Spicy Banana Chips", image: "/snacks/snacks4.jpg", price: 88, desc: "Authentic Kerala banana chips with a kick of red chili." },
  { id: "s5", name: "Baked Veggie Straws", image: "/snacks/snacks5.jpg", price: 83, desc: "Crispy straws made with spinach, tomato, and potato." },
  { id: "s6", name: "Classic Salted Peanuts", image: "/snacks/snacks6.jpg", price: 33, desc: "Slow-roasted crunchy peanuts with zero trans fat." }
];

export default function Snacks() {
  const { addToCart } = useCart();
  const router = useRouter();

  // Helper function to chunk array into groups of 3 for desktop layout
  const chunkProducts = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
  };

  const desktopChunks = chunkProducts(snacksProduct, 3);

  return (
    <section className="container-fluid px-4 py-5 bg-light">
      <div className="d-flex align-items-center mb-4 border-bottom pb-3">
        <h2 className="m-0 fw-bold" style={{ fontSize: "28px" }}>
          Snacks & Munchies
        </h2>
        <span className="badge ms-3" style={{ background: "#fef9c3", color: "#854d0e" }}>
          Guilt-Free Cravings
        </span>
      </div>

      {/* 1. DESKTOP CAROUSEL (Visible on md screens and up - 3 items per slide) */}
      <div id="desktopCarousel" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
        <div className="carousel-inner px-5">
          {desktopChunks.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row g-4 justify-content-center">
                {chunk.map((product) => (
                  <div key={product.id} className="col-md-4 d-flex justify-content-center">
                    <div
                      className="card snack-card"
                      style={{ width: "100%", maxWidth: "400px" }}
                    >
                      <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                        <Image src={product.image} alt={product.name} width={200} height={200} />
                      </div>
                      <div className="card-body p-4 d-flex flex-column justify-content-between">
                        <div>
                          <h4 className="fs-5 fw-bold">{product.name}</h4>
                          <p className="text-muted small text-truncate-2">{product.desc}</p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between mb-3">
                            <span>Price</span>
                            <strong>₹{product.price}</strong>
                          </div>
                          <div className="d-flex gap-2">
                            <button 
                              className="btn btn-outline-success w-50" 
                              onClick={() => { 
                                addToCart(product); 
                                alert(`Added ${product.name} to cart!`);
                              }}
                            >
                              Add to cart
                            </button>
                            <button 
                              className="btn btn-success w-50" 
                              onClick={() => router.push(`/checkout/${product.id}`)}
                            >
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#desktopCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#desktopCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
        </button>
      </div>

      {/* 2. MOBILE CAROUSEL (Visible on mobile only - 1 item per slide) */}
      <div id="mobileCarousel" className="carousel slide d-md-none" data-bs-ride="carousel">
        <div className="carousel-inner">
          {snacksProduct.map((product, index) => (
            <div key={product.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex justify-content-center px-4">
                <div
                  className="card snack-card"
                  style={{ width: "100%", maxWidth: "340px" }}
                >
                  <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "240px" }}>
                    <Image src={product.image} alt={product.name} width={180} height={180} />
                  </div>
                  <div className="card-body p-4">
                    <h4 className="fs-5 fw-bold">{product.name}</h4>
                    <p className="text-muted small">{product.desc}</p>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Price</span>
                      <strong>₹{product.price}</strong>
                    </div>
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-outline-success w-50" 
                        onClick={() => { 
                          addToCart(product); 
                          alert(`Added ${product.name} to cart!`);
                        }}
                      >
                        Add to cart
                      </button>
                      <button 
                        className="btn btn-success w-50" 
                        onClick={() => router.push(`/checkout/${product.id}`)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-2"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mobileCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-2"></span>
        </button>
      </div>

      <style jsx global>{`
        .snack-card {
          border: none;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, .05);
        }

        .snack-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, .12);
        }

        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }

        .custom-control {
          width: 5%;
        }
      `}</style>
    </section>
  );
}