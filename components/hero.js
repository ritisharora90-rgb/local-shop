'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero-section py-4 py-md-5">
      <div className="container-fluid px-3 px-md-5">
        <div className="row g-4 align-items-center">
          
          {/* 1. LEFT COLUMN: Eye-Catching Text Banner */}
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <div className="d-inline-flex align-items-center badge mb-3 px-3 py-2 rounded-pill warm-badge">
              <span className="dot me-2"></span>
              ⚡ Fast Delivery Across Your City
            </div>
            
            <h1 className="display-4 fw-black tracking-tight text-dark mb-3">
              Freshness Delivered <br />
              <span className="text-gradient">Right to Your Door</span>
            </h1>
            
            <p className="text-muted fs-5 mb-4 max-w-lg mx-auto mx-lg-0">
              Get the premium quality pulses, daily fresh dairy essentials, and your favorite crunchy munchies delivered in minutes.
            </p>
            
            {/* Action Callouts */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
              <button 
                onClick={() => router.push('#products')} 
                className="btn btn-emerald px-4 py-3 rounded-3 fw-bold shadow-sm"
              >
                Shop Essentials
              </button>
              <button 
                onClick={() => router.push('/offers')} 
                className="btn btn-warm-outline px-4 py-3 rounded-3 fw-bold"
              >
                View Super Offers
              </button>
            </div>

            {/* Quick Micro-Features */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 border-top pt-4 text-secondary small">
              <div>🌿 100% Organic</div>
              <div>🥛 Direct from Dairy</div>
              <div>📦 Safe Packaging</div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: Premium Promotional Carousel Slider */}
          <div className="col-12 col-lg-7">
            <div 
              id="heroBannerCarousel" 
              className="carousel slide overflow-hidden rounded-4 shadow-md bg-white" 
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              {/* Slide Indicators */}
              <div className="carousel-indicators mb-3">
                <button type="button" data-bs-target="#heroBannerCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#heroBannerCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#heroBannerCarousel" data-bs-slide-to="2"></button>
              </div>

              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                  <div className="position-relative slider-frame bg-warm-blend">
                    <Image
                      src="/noodles.webp"
                      alt="Instant Noodles & Midnight Cravings"
                      fill
                      priority
                      className="object-fit-contain p-4"
                    />
                    <div className="slide-overlay p-4 p-md-5 d-flex align-items-end">
                      <div className="bg-blur p-3 rounded-3 text-dark">
                        <span className="badge bg-danger mb-2">Up to 20% OFF</span>
                        <h3 className="h5 fw-bold m-0">Midnight Munchies & Snacks</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                  <div className="position-relative slider-frame bg-warm-blend">
                    <Image
                      src="/amulcheese.jpg"
                      alt="Fresh Organic Dairy Essentials"
                      fill
                      className="object-fit-contain p-4"
                    />
                    <div className="slide-overlay p-4 p-md-5 d-flex align-items-end">
                      <div className="bg-blur p-3 rounded-3 text-dark">
                        <span className="badge bg-success mb-2">Fresh Daily</span>
                        <h3 className="h5 fw-bold m-0">Farm-Fresh Dairy Essentials</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                  <div className="position-relative slider-frame bg-warm-blend">
                    <Image
                      src="/snucks.avif"
                      alt="Premium Cold Pressed Oils and Grains"
                      fill
                      className="object-fit-contain p-4"
                    />
                    <div className="slide-overlay p-4 p-md-5 d-flex align-items-end">
                      <div className="bg-blur p-3 rounded-3 text-dark">
                        <span className="badge bg-warning text-dark mb-2">100% Pure</span>
                        <h3 className="h5 fw-bold m-0">Premium Pulses & Staples</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Nav Buttons */}
              <button className="carousel-control-prev custom-nav-btn ms-3" type="button" data-bs-target="#heroBannerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-white text-dark rounded-circle p-3 shadow-sm" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next custom-nav-btn me-3" type="button" data-bs-target="#heroBannerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-white text-dark rounded-circle p-3 shadow-sm" aria-hidden="true"></span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .hero-section {
          background-color: #FDFBF7; /* Soft Sand Warm Premium Background */
        }

        .fw-black {
          font-weight: 850;
        }

        .text-gradient {
          color: #16a34a; /* Your Theme Green */
        }

        .warm-badge {
          background-color: #FFFDF0;
          color: #854d0e;
          border: 1px solid #fef08a;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          display: inline-block;
          animation: pulse-dot 1.5s infinite ease-in-out;
        }

        .btn-emerald {
          background-color: #16a34a;
          color: white;
          border: none;
          transition: all 0.2s ease;
        }
        .btn-emerald:hover {
          background-color: #15803d;
          transform: translateY(-2px);
        }

        .btn-warm-outline {
          background-color: transparent;
          color: #854d0e;
          border: 1px solid #f5efe6;
          transition: all 0.2s ease;
        }
        .btn-warm-outline:hover {
          background-color: #fffdf0;
          border-color: #fef08a;
          transform: translateY(-2px);
        }

        .slider-frame {
          height: 420px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .slider-frame {
            height: 280px;
          }
        }

        .bg-warm-blend {
          background: radial-gradient(circle, #ffffff 60%, #fbf9f3 100%);
        }

        .bg-blur {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        .custom-nav-btn {
          width: auto;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .carousel:hover .custom-nav-btn {
          opacity: 1;
        }
        .carousel-control-next-icon, .carousel-control-prev-icon {
          filter: invert(1) grayscale(1) brightness(0);
        }

        @keyframes pulse-dot {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}