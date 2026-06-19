// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const { data: session } = useSession();
  const { cart } = useCart();

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      <nav className="navbar navbar-expand-lg al-navbar">
        <div className="container-fluid d-flex flex-row">
          {/* Brand */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <div>
              <Image src="/firstlogo.png" alt="Logo" width={150} height={100} />
            </div>
            <div>
              <div className="al-brand-name">LOCAL LIFE</div>
              <div
                className="al-brand-sub fw-lighter"
                style={{ fontSize: "14px" }}
              >
                PRODUCTS THAT WE NEED IN DAILY LIFE
              </div>
            </div>
          </Link>

          {/* Toggler */}
          <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon" />
          </button>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${isOpen ? "" : "show"}`}>
            <ul className="navbar-nav mx-auto gap-1 fw-bold">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shops" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="d-flex align-items-center gap-2">
              <button
                className="al-icon-btn"
                aria-label="Search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="bi bi-search" />
              </button>
              {showSearch && (
                <input
                  type="text"
                  className="form-control ms-2 rounded"
                  placeholder="search products.."
                  style={{ width: "150px" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              )}

              <Link
                href="/orderStatus"
                className="al-icon-btn position-relative text-decoration-none"
                aria-label="orders"
              >
                <i className="bi bi-heart" />
                <span className="al-badge"></span>
              </Link>
              <Link
                href="/cart"
                className="al-icon-btn position-relative text-decoration-none"
                aria-label="Cart"
              >
                <i className="bi bi-cart2" />

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </Link>

              {/* ✅ ONLY THIS BUTTON IS CHANGED */}
              {session ? (
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: "14px" }} className="fw-bold">
                    Hi, {session.user.name.split(" ")[0]}
                  </span>
                  <button
                    className="al-icon-btn"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    title="Logout"
                  >
                    <i className="bi bi-box-arrow-right" />
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <button className="al-icon-btn" title="Login">
                    <i className="bi bi-person" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="fourbox container-fluid d-flex justify-content-center text-white">
        <div
          className="boxone container-fluid p-3"
          style={{  backgroundColor: "#c6158b", fontSize: "24px" }}
        >
          25% Discount on every product
        </div>
        <div
          className="boxone container-fluid p-3"
          style={{  backgroundColor: "#ebb800", fontSize: "24px" }}
        >
          Daily Essentials Available
        </div>
        <div
          className="boxone container-fluid p-3"
          style={{  backgroundColor: "#28533b", fontSize: "24px" }}
        >
          Best Selling Products
        </div>
        <div
          className="boxone container-fluid p-3"
          style={{ backgroundColor: "#c93b3b", fontSize: "24px" }}
        >
          Fresh & Organic Products
        </div>
      </div>
    </>
  );
}
