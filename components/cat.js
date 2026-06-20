'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CategoryFeatured() {
  const router = useRouter();

  return (
    <section className="container bg-white my-5 py-4 px-3 px-md-4 rounded-4 shadow-sm border border-light">
      <div className="row align-items-center g-4 g-lg-5">
        
        {/* 1. LEFT COLUMN: Content & Direct Checkout Column (Swapped Position) */}
        <div className="col-12 col-md-6 order-2 order-md-1 p-3 p-lg-4">
          
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1.5 rounded-pill bg-light border border-secondary-subtle">
            <span className="p-1 rounded-circle bg-success" style={{ width: '6px', height: '6px' }} />
            <span className="font-body font-semibold text-muted tracking-wider text-uppercase" style={{ fontSize: '11px' }}>
              Featured Treats Category
            </span>
          </div>

          <h2 className="font-heading font-bold text-dark tracking-tight mb-2 display-6">
            Creamy Premium Ice Creams
          </h2>
          
          <h6 className="font-body font-medium text-success mb-4" style={{ fontSize: '15px', letterSpacing: '0.2px' }}>
            A cold, velvety dessert made for pure moments of pure delight.
          </h6>
          
          <p className="font-body text-muted leading-relaxed mb-4" style={{ fontSize: '15px' }}>
            Indulge in our curated selection of ultra-smooth artisanal ice creams. Sourced from organic fresh dairy cream and natural flavor extractions—ranging from rich, velvety classic vanilla beans to vibrant field strawberry swirled purees. Perfect for sweet celebrations or simple late-night comfort.
          </p>

          {/* Quick Category Feature Checkmarks */}
          <div className="row g-2 mb-4 font-body text-secondary" style={{ fontSize: '13px' }}>
            <div className="col-6 d-flex align-items-center gap-2">
              <i className="bi bi-patch-check-fill text-success" />
              <span>100% Real Dairy Base</span>
            </div>
            <div className="col-6 d-flex align-items-center gap-2">
              <i className="bi bi-patch-check-fill text-success" />
              <span>Zero Artificial Additives</span>
            </div>
          </div>

          {/* Direct Checkout Interactive Elements */}
          <div className="d-flex align-items-center gap-3 pt-2">
            <button 
              className="btn font-body font-semibold text-white px-4 py-2.5 rounded-3 text-sm category-btn shadow-sm"
              style={{ backgroundColor: '#16a34a', border: 'none' }}
              onClick={() => router.push('/shops?category=desserts')}
            >
              Explore Desserts Shop
            </button>
            <span className="font-heading font-bold text-dark" style={{ fontSize: '18px' }}>
              Starting at $4.99
            </span>
          </div>

        </div>

        {/* 2. RIGHT COLUMN: Visual Element Media Column (Swapped Position) */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center position-relative">
          {/* Soft background tone behind the product card */}
          <div 
            className="position-absolute top-50 start-50 translate-middle rounded-circle filter blur"
            style={{ 
              width: '70%', 
              height: '70%', 
              backgroundColor: '#dcfce7', 
              opacity: '0.4', 
              zIndex: 0,
              filter: 'blur(50px)'
            }}
          />
          <div className="position-relative overflow-hidden rounded-4 style-image-container" style={{ zIndex: 1 }}>
            {/* Modern ambient glow backdrop that expands on hover */}
            <div 
              className="position-absolute top-50 start-50 translate-middle rounded-circle style-image-glow"
              style={{ 
                width: '60%', 
                height: '60%', 
                backgroundColor: '#16a34a', 
                opacity: '0.15', 
                zIndex: 0,
                filter: 'blur(40px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
            
            {/* The Image Element */}
            <Image
              src="/snacks/ice3.webp"
              alt="Premium Ice Cream Delights"
              width={420}
              height={340}
              className="img-fluid rounded-4 shadow-sm category-image position-relative"
              style={{ 
                objectFit: 'cover',
                zIndex: 1,
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease'
              }}
              priority
            />
            
            {/* High-end linear sheen overlay effect */}
            <div className="style-image-overlay" />
          </div>
        </div>

      </div>

      <style jsx global>{`
        .category-btn {
          transition: all 0.25s ease;
        }
        .category-btn:hover {
          background-color: #15803d !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(22, 163, 74, 0.25) !important;
        }
        
        /* Smooth zoom interaction on product presentation frame */
        .style-image-container:hover .category-image {
          transform: scale(1.04);
        }
        .style-image-container:hover .style-image-glow {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.25 !important;
        }
      `}</style>
    </section>
  );
}