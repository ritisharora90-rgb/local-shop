"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import {  FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


const announcements = [
  "✨ Enjoy a flat 25% discount on all premium products this week!",
  "🥛 Fresh dairy & daily cooking essentials delivered right to your door.",
  "🔥 Discover our curated lineup of top customer-favorite best sellers.",
  "🌿 100% certified organic and locally sourced fresh products."
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Fixed: Defaults to closed on mobile screens
  const { data: session } = useSession();
  const { cart } = useCart();
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Premium, Sleek Ticker Banner */}
      <div 
        className="w-100 text-center py-2 text-white font-body font-medium transition-all" 
        style={{ 
          backgroundColor: "#15803d", // Vibrant, premium grocery green
          fontSize: "14px", 
          letterSpacing: "0.3px",
          minHeight: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span className="animate-fade-in">{announcements[activeBanner]}</span>
      </div>

      {/* Main Clean Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-2 py-lg-3 shadow-sm">
        <div className="container-fluid px-3 px-md-4">
          
          {/* Brand Architecture */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none me-4">
            <div className="position-relative d-flex align-items-center">
              <Image 
                src="/firstlogo.png" 
                alt="Local Life Logo" 
                width={130} 
                height={70} 
                className="object-fit-contain"
                priority
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <span className="font-heading font-bold text-dark tracking-tight m-0 leading-none" style={{ fontSize: "22px" }}>
                LOCAL LIFE
              </span>
              <span className="font-body text-muted fw-normal mt-1 d-none d-sm-inline" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                DAILY LIFE ESSENTIALS
              </span>
            </div>
          </Link>

          {/* Interactive Mobile Menu Toggler */}
          <button 
            className="navbar-toggler border-0 shadow-none px-2" 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ width: "22px", height: "22px" }} />
          </button>

          {/* Navigation Route Elements */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-lg-3 my-3 my-lg-0 font-heading font-semibold">
              <li className="nav-item">
                <Link href="/" className="nav-link text-dark hover-emerald px-2">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/shops" className="nav-link text-dark hover-emerald px-2">Shop</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link text-dark hover-emerald px-2">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link text-dark hover-emerald px-2">Contact Us</Link>
              </li>
            </ul>

            {/* Utility Action Area Icons alignment */}
            <div className="d-flex align-items-center gap-3 border-top pt-3 pt-lg-0 border-lg-top-0 mt-3 mt-lg-0 justify-content-end">
              
              {/* Animated Search Bar Input System */}
              <div className="d-flex align-items-center position-relative">
                {showSearch && (
                  <input
                    type="text"
                    className="form-control form-control-sm font-body px-3 py-1.5 rounded-pill border-secondary-subtle"
                    placeholder="Search fresh products..."
                    style={{ width: "180px", fontSize: "13px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                )}
                <button
                  className={`btn p-2 border-0 d-flex align-items-center justify-content-center text-dark rounded-circle ${showSearch ? "ms-1 bg-light" : ""}`}
                  onClick={() => setShowSearch(!showSearch)}
                  aria-label="Toggle search input panel"
                >
                  <i className={`bi ${showSearch ? "bi-x-lg text-muted" : "bi-search"}`} style={{ fontSize: "18px" }} />
                </button>
              </div>

              {/* Order Tracking Interaction Link */}
              <Link
                href="/orderStatus"
                className="position-relative p-2 d-flex align-items-center justify-content-center text-dark rounded-circle hover-bg-light transition-colors"
                title="Track Orders"
              ><TbTruckDelivery size={22} />
                
              </Link>

              {/* Shopping Cart Bag Indicator Icon */}
              <Link
                href="/cart"
                className="position-relative p-2 d-flex align-items-center justify-content-center text-dark rounded-circle hover-bg-light transition-colors"
                title="Shopping Bag"
              >
                <i className="bi bi-bag" style={{ fontSize: "19px" }} />
                {cart.length > 0 && (
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font-body fw-bold d-flex align-items-center justify-content-center px-1.5 py-1" 
                    style={{ fontSize: "10px", minWidth: "18px", height: "18px", marginTop: "6px", marginLeft: "-6px" }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* Profile Authorization Actions Hook */}
              <div className="border-start ps-2 d-flex align-items-center">
                {session ? (
                  <div className="d-flex align-items-center gap-2">
                    <span className="font-body font-semibold text-dark text-sm d-none d-xl-inline">
                      Hi, {session.user.name.split(" ")[0]} 
                    </span>
                    <button
                      className="btn p-2 border-0 d-flex align-items-center justify-content-center text-danger rounded-circle hover-bg-light transition-colors"
                      onClick={() => signOut({ callbackUrl: "/" })}
                      title="Logout Account"
                    >
                      <i className="bi bi-box-arrow-right" style={{ fontSize: "19px" }} />
                    </button>
                  </div>
                ) : (
                  <Link href="/login" className="p-2 d-flex align-items-center justify-content-center text-dark rounded-circle hover-bg-light transition-colors" title="Login Profile">
                    <FaUser size={22} />
                  </Link>
                )}
              </div>

            </div>
          </div>

        </div>
      </nav>
    </>
  );
}