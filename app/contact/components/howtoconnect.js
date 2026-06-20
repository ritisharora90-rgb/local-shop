"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTelegramPlane, FaSmile, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Message() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="contact-page-wrapper py-5 bg-light overflow-hidden">
      {/* Smooth Embedded CSS Styles & Interactive Micro-Animations */}
      <style>{`
        .anim-fade-up {
          opacity: 0;
          transform: translateY(25px);
          animation: componentEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes componentEntrance {
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(25, 135, 84, 0.08) !important;
          border-color: rgba(25, 135, 84, 0.25) !important;
        }

        .custom-input {
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          color: #212529;
          transition: all 0.2s ease;
        }
        .custom-input:focus {
          border-color: #198754;
          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.15);
          outline: 0;
        }

        .btn-animate {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-animate:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(25, 135, 84, 0.25);
          background-color: #146c43 !important;
        }
      `}</style>

      <div className="container">
        <div 
          className={`row g-4 justify-content-center mb-5 ${isMounted ? "anim-fade-up" : ""}`}
        >
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="col-12 col-lg-5">
            <div className="bg-white p-4 p-md-5 h-100 rounded-4 border shadow-sm contact-card">
              <h3 className="fw-extrabold mb-4 pb-2" style={{ color: "#0f2d19", letterSpacing: "-0.5px" }}>
                Contact Information
              </h3>
              
              <div className="d-flex flex-column gap-4">
                {/* Address Item */}
                <div className="d-flex pb-3 border-bottom border-light">
                  <div className="text-success mt-1 me-3">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Address</h5>
                    <p className="fw-medium text-secondary mb-0 lh-base">
                      LocalShop Headquarters<br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="d-flex pb-3 border-bottom border-light">
                  <div className="text-success mt-1 me-3">
                    <FaPhone size={20} style={{ transform: "rotate(90deg)" }} />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Phone Number</h5>
                    <p className="fw-bold text-dark mb-0">+91 9876543210</p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="d-flex pb-3 border-bottom border-light">
                  <div className="text-success mt-1 me-3">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Email</h5>
                    <p className="fw-bold text-success mb-0">support@localshop.com</p>
                  </div>
                </div>

                {/* Working Hours Item */}
                <div className="d-flex pb-3 border-bottom border-light">
                  <div className="text-success mt-1 me-3">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Working Hours</h5>
                    <p className="fw-medium text-secondary mb-0 lh-base">
                      Monday - Saturday<br />
                      8:00 AM to 8:00 PM
                    </p>
                  </div>
                </div>

                {/* Customer Support Information */}
                <div className="d-flex">
                  <div className="text-success mt-1 me-3">
                    <FaSmile size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Customer Satisfaction</h5>
                    <p className="fw-medium text-secondary mb-0 small lh-base">
                      At LocalShop, your happiness drives us. Whether you have questions 
                      about fresh essentials, orders, local store deliveries, or joining as 
                      a partner merchant, our dedicated support team is here to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SEND A MESSAGE FORM */}
          <div className="col-12 col-lg-6">
            <div className="bg-white p-4 p-md-5 h-100 rounded-4 border shadow-sm contact-card">
              <h3 className="fw-extrabold mb-4 pb-2" style={{ color: "#0f2d19", letterSpacing: "-0.5px" }}>
                Send Us a Message
              </h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="custom-input w-100" placeholder="Your Name" required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="custom-input w-100" placeholder="Your Email" required />
                  </div>
                </div>

                <div>
                  <input type="tel" className="custom-input w-100" placeholder="Contact Number (Optional)" />
                </div>

                <div>
                  <input type="text" className="custom-input w-100" placeholder="Subject" required />
                </div>

                <div>
                  <textarea className="custom-input w-100" rows={5} placeholder="Write your message here..." required></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-success btn-animate py-3 rounded-3 fw-bold text-white d-flex align-items-center justify-content-center gap-2 mt-2 border-0"
                >
                  <FaTelegramPlane size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS SECTION Container */}
        <div 
          className={`rounded-4 overflow-hidden shadow-sm border position-relative ${isMounted ? "anim-fade-up" : ""}`}
          style={{ animationDelay: "200ms" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.255959084925!2d75.78727095!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db414f0000001%3A0x6b4498801d90479d!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Map Location Floating Accent Label */}
          <div
            className="position-absolute bg-white text-dark fw-bold px-3 py-2 rounded-pill shadow border d-none d-sm-block"
            style={{ 
              bottom: "24px", 
              left: "24px", 
              border: "1px solid rgba(25, 135, 84, 0.25)",
              zIndex: 10
            }}
          >
            📍 LocalShop Main Branch
          </div>
        </div>

      </div>
    </div>
  );
}