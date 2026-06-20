'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand Architecture & Vision */}
          <div className="col-12 col-md-4">
            <Link href="/" className="d-inline-block mb-3 text-decoration-none">
              <Image
                src="/firstlogo.png"
                alt="Local Life Brand Logo"
                height={70}
                width={70}
                className="img-fluid bg-white p-1"
                style={{ borderRadius: '14px' }}
              />
            </Link>
            <h3 className="font-heading font-bold text-white tracking-tight mb-2" style={{ fontSize: '20px' }}>
              LOCAL LIFE
            </h3>
            <p className="font-body text-secondary mb-4" style={{ fontSize: '14px', maxWidth: '300px', lineHeight: '1.6' }}>
              Bringing fresh dairy, daily organic essentials, and premium household comforts directly to your doorstep with lightning-fast delivery.
            </p>
            {/* Social Media Link Handles */}
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary text-white-hover fs-5" aria-label="Facebook Link"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-secondary text-white-hover fs-5" aria-label="Instagram Link"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-secondary text-white-hover fs-5" aria-label="Twitter Link"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Store Directory */}
          <div className="col-6 col-md-2">
            <h5 className="font-heading font-semibold text-white mb-3" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>
              SHOP DIRECTORY
            </h5>
            <ul className="list-unstyled font-body d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><Link href="/shops" className="text-secondary text-white-hover text-decoration-none">All Products</Link></li>
              <li><Link href="/shops?cat=dairy" className="text-secondary text-white-hover text-decoration-none">Fresh Dairy</Link></li>
              <li><Link href="/shops?cat=snacks" className="text-secondary text-white-hover text-decoration-none">Instant Snacks</Link></li>
              <li><Link href="/shops?cat=organic" className="text-secondary text-white-hover text-decoration-none">Organic Produce</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Resources */}
          <div className="col-6 col-md-2">
            <h5 className="font-heading font-semibold text-white mb-3" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>
              OUR COMPANY
            </h5>
            <ul className="list-unstyled font-body d-flex flex-column gap-2" style={{ fontSize: '14px' }}>
              <li><Link href="/about" className="text-secondary text-white-hover text-decoration-none">Our Story</Link></li>
              <li><Link href="/contact" className="text-secondary text-white-hover text-decoration-none">Contact Support</Link></li>
              <li><Link href="/orderStatus" className="text-secondary text-white-hover text-decoration-none">Track Order</Link></li>
              <li><a href="#" className="text-secondary text-white-hover text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Premium Newsletter Signup */}
          <div className="col-12 col-md-4">
            <h5 className="font-heading font-semibold text-white mb-3" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>
              STAY IN THE LOOP
            </h5>
            <p className="font-body text-secondary mb-3" style={{ fontSize: '13px' }}>
              Subscribe to get exclusive discounts, fresh stock drop updates, and flash deals.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="input-group mb-2">
              <input 
                type="email" 
                className="form-control form-control-sm bg-transparent text-white border-secondary font-body shadow-none" 
                placeholder="Enter your email" 
                aria-label="Email subscription channel input"
                style={{ fontSize: '14px' }}
              />
              <button 
                className="btn btn-success font-body font-semibold text-sm px-3" 
                type="submit"
                style={{ backgroundColor: '#16a34a', border: 'none' }}
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Structural Horizontal Rule Divider Line */}
        <hr className="my-4 border-secondary opacity-25" />

        {/* Footer Sub-row: Copyrights & Trusted Settlements */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 font-body text-secondary" style={{ fontSize: '13px' }}>
          <div>
            &copy; {currentYear} <span className="text-white fw-medium">Local Life Inc</span>. All rights reserved. Made for premium daily convenience.
          </div>
          {/* Payment Method Badges Placeholder indicators */}
          <div className="d-flex gap-2 align-items-center opacity-70" style={{ fontSize: '20px' }}>
            <i className="bi bi-wallet2" title="Digital Wallet Supported" />
            <i className="bi bi-credit-card" title="Secure Card Gateway Secure" />
            <i className="bi bi-shield-lock" title="SSL Encrypted" />
          </div>
        </div>

      </div>
    </footer>
  );
}