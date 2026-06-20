'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const metrics = [
    { icon: "bi-lightning-charge-fill", color: "#16a34a", text: "2-Minute Cooking" },
    { icon: "bi-truck", color: "#2563eb", text: "Instant Doorstep Delivery" },
    { icon: "bi-shield-check", color: "#dc2626", text: "100% Quality Inspected" }
  ];

  return (
    <header className="container-fluid bg-white py-4 py-md-5 px-3 px-md-5 overflow-hidden">
      {/* 1. Added Bootstrap Icons CDN Link automatically so it never renders blank */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
      />

      <div className="row align-items-center justify-content-center g-4 g-md-5 max-w-7xl mx-auto py-2 py-lg-4">
        
        {/* MOBILE: Content first, IMAGE: Renders underneath mobile, but sits perfectly on the LEFT on desktop */}
        <div className="col-12 col-md-6 order-2 order-md-1 text-center position-relative">
          
          {/* Decorative Backing Glow Ring */}
          <div 
            className="position-absolute top-50 start-50 translate-middle rounded-circle"
            style={{ 
              width: '75%', 
              height: '75%', 
              backgroundColor: '#dcfce7', 
              opacity: '0.5', 
              zIndex: 0,
              filter: 'blur(70px)'
            }}
          />

          {/* Core Feature Image Layer */}
          <div className="position-relative hero-image-wrapper animate-fade-in" style={{ zIndex: 1 }}>
            <Image
              src="/maggie2.webp"
              alt="Premium Fresh Local Life Noodle Box Showcase"
              height={420}
              width={460}
              className="object-fit-contain img-fluid hero-drop-shadow"
              priority
            />
          </div>

        </div>

        {/* MOBILE: Heading renders on top first, text moves neatly to the RIGHT on desktop */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center text-md-start">
          
          <div className="d-inline-flex align-items-center gap-2 mb-3 bg-success-subtle text-success font-body font-semibold px-3 py-1.5 rounded-pill" style={{ fontSize: '12px', backgroundColor: '#dcfce7', color: '#16a34a', letterSpacing: '0.3px' }}>
            ✨ REFUELING YOUR DAILY MOMENTUM
          </div>
          
          <h1 className="font-heading font-bold text-dark tracking-tight mb-3 display-4 leading-tight">
            Premium Comfort, <br />
            <span style={{ color: '#16a34a' }}>Ready When You Are.</span>
          </h1>
          
          <p className="font-body text-muted leading-relaxed mb-4 mx-auto mx-md-0" style={{ fontSize: '16px', maxWidth: '480px' }}>
            Don't let the daily grind slow you down. Whether it is a midnight deadline crunch or a quick lunch break, tap into lightning-fast, deliciously rich savory essentials engineered to satisfy instantly.
          </p>

          {/* Action Button Conversion Links */}
          <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-center justify-content-md-start mb-4 mb-md-5">
            <button 
              className="btn font-body font-semibold text-white px-4 py-2.5 rounded-3 shadow-sm text-sm hero-btn-primary w-100 w-sm-auto"
              style={{ backgroundColor: '#16a34a', border: 'none' }}
              onClick={() => router.push('/shops')}
            >
              Order Instant Packets
            </button>
            <button 
              className="btn btn-outline-dark font-body font-semibold px-4 py-2.5 rounded-3 text-sm transition-all w-100 w-sm-auto"
              onClick={() => router.push('/about')}
            >
              Explore Our Quality
            </button>
          </div>

          {/* Platform Performance Metrics Footer */}
          <div className="pt-4 border-top border-light d-grid d-sm-flex flex-wrap gap-3 gap-md-4 justify-content-center justify-content-md-start text-start">
            {metrics.map((metric, idx) => (
              <div key={idx} className="d-flex align-items-center gap-2">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{ width: '32px', height: '32px', backgroundColor: '#f8fafc' }}
                >
                  <i className={`bi ${metric.icon}`} style={{ color: metric.color, fontSize: '15px' }} />
                </div>
                <span className="font-body font-medium text-secondary" style={{ fontSize: '13px' }}>
                  {metric.text}
                </span>
              </div>
            ))}
          </div>

        </div>
        
      </div>

      <style jsx global>{`
        /* Max width limit container alignment helper */
        .max-w-7xl {
          max-width: 80rem;
        }

        .hero-drop-shadow {
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.06));
          transition: transform 0.5s ease-in-out;
        }
        
        .hero-image-wrapper:hover .hero-drop-shadow {
          transform: translateY(-6px) scale(1.02);
        }
        
        .hero-btn-primary {
          transition: all 0.2s ease;
        }
        
        .hero-btn-primary:hover {
          background-color: #15803d !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(22, 163, 74, 0.2) !important;
        }

        /* Fixes button behavior layout stretching on very tiny display models */
        @media (max-width: 576px) {
          .w-sm-auto {
            width: 100% !important;
          }
        }
      `}</style>
    </header>
  );
}