"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const diaryProducts = [
  { id: "d1", name: "Amul Milk Premium", price: 30, image: "/diary/diary1.jpg", desc: " Pure fresh milk, full of wholesome nutrition." },
  { id: "d2", name: "Amul Taaza", price: 27, image: "/diary/diary2.jpg", desc: " Fresh, pasteurized milk perfect for daily tea and coffee." },
  { id: "d3", name: "Amul Gold", price: 33, image: "/diary/diary3.jpg", desc: " High-fat, extra creamy milk for a rich and smooth taste." },
  { id: "d4", name: "Amul Cow Milk", price: 28, image: "/diary/diary4.jpg", desc: " Light, highly nutritious, and easy to digest." },
  { id: "d5", name: "Amul Slim & Trim", price: 32, image: "/diary/diary5.jpg", desc: " Zero-fat skimmed milk—the perfect choice for fitness lovers." },
  { id: "d6", name: "Amul Buffalo Milk", price: 35, image: "/diary/diary6.jpg", desc: " Rich, thick, and premium milk with an authentic creamy flavor." },
];

export default function DiaryPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);

  const showPopup = (id) => {
    setActiveCard(id);
    setTimeout(() => {
      setActiveCard(null);
    }, 300);
  };

  const desktopSlides = [
    diaryProducts.slice(0, 3),
    diaryProducts.slice(3, 6)
  ];

  return (
    <section className="container-fluid px-3 px-md-4 py-5 bg-light overflow-hidden">
      <div className="d-flex align-items-center mb-4 border-bottom pb-3">
        <h2 className="m-0 fw-bold" style={{ fontSize: "28px" }}>
          Dairy Essentials
        </h2>
        <span className="badge ms-3" style={{ background: "#dcfce7", color: "#166534" }}>
          Fresh Daily
        </span>
      </div>

      {/* Desktop */}
      {/* Added py-4 to give space so the top/bottom shadows and scale effects aren't cut off */}
      <div id="productDiaryDesktop" className="carousel slide d-none d-md-block py-4" data-bs-ride="carousel">
        <div className="carousel-inner px-5">
          {desktopSlides.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row g-4">
                {group.map((product) => (
                  <div key={product.id} className="col-4">
                    <ProductCard
                      product={product}
                      router={router}
                      addToCart={addToCart}
                      activeCard={activeCard}
                      showPopup={showPopup}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev custom-nav" type="button" data-bs-target="#productDiaryDesktop" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
        </button>
        <button className="carousel-control-next custom-nav" type="button" data-bs-target="#productDiaryDesktop" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
        </button>
      </div>

      {/* Mobile */}
      <div id="productDiaryMobile" className="carousel slide d-block d-md-none py-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {diaryProducts.map((product, index) => (
            <div key={product.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="px-4">
                <ProductCard
                  product={product}
                  router={router}
                  addToCart={addToCart}
                  activeCard={activeCard}
                  showPopup={showPopup}
                />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productDiaryMobile" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-2"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productDiaryMobile" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-2"></span>
        </button>
      </div>

      <style jsx global>{`
        /* Global/Scoped transitions for our elements */
        .diary-card {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          border: none;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          background: #ffffff;
        }

        .diary-card .card-img-wrapper {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* 🚀 The Ultimate Hover State */
        .diary-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.12);
        }

        /* Subtle image pop up forward inside the card on hover */
        .diary-card:hover .card-img-wrapper {
          transform: scale(1.08);
        }

        .custom-nav {
          width: 4%;
        }

        .popup {
          animation: pop 0.3s ease-in-out;
        }

        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, addToCart, router, activeCard, showPopup }) {
  return (
    <div
      className={`card diary-card h-100 ${activeCard === product.id ? "popup" : ""}`}
      onClick={() => showPopup(product.id)}
      style={{ cursor: "pointer" }}
    >
      {/* Added .card-img-wrapper to targets the image container for secondary animation */}
      <div className="bg-light d-flex justify-content-center align-items-center p-4" style={{ height: "240px" }}>
        <div className="card-img-wrapper">
          <Image src={product.image} width={180} height={180} alt={product.name} priority={product.id === "d1"} />
        </div>
      </div>

      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <h4 className="fw-bold fs-5 mb-2">{product.name}</h4>
          <p className="text-muted small mb-3">{product.desc}</p>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-secondary small">Price</span>
            <strong className="fs-5 text-dark">₹{product.price}</strong>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-success w-50 fw-semibold"
              onClick={() => addToCart(product)}
              
            >
              Add to cart
            </button>
            <button
              className="btn btn-success w-50 fw-semibold"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/checkout/${product.id}`);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}