'use client';

import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

// Fixed: Removed TypeScript annotations for pure JavaScript compatibility
function AnimatedNumber({ value, duration = 2000 }) {
    const [count, setCount] = useState(0);
    
    const isTimeFormat = value.includes('/');
    const numericTarget = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        if (isNaN(numericTarget) || isTimeFormat) return;

        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1);
            
            const easeOutProgress = 1 - Math.pow(1 - progressPercentage, 3);
            
            setCount(Math.floor(easeOutProgress * numericTarget));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [numericTarget, duration, isTimeFormat]);

    if (isTimeFormat) {
        return <span>{value}</span>;
    }

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function Neighbour() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="neighbour-section py-5 bg-light overflow-hidden">
            <style>{`
                .anim-fade-in {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: sectionEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes sectionEntrance {
                    to { opacity: 1; transform: translateY(0); }
                }

                .custom-hover-card {
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s ease;
                }
                .custom-hover-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
                    border-color: rgba(25, 135, 84, 0.25) !important;
                }

                .stat-card {
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .stat-card:hover {
                    transform: scale(1.05);
                    background-color: #ffffff !important;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.04);
                }
            `}</style>

            <div className="container">
                
                {/* HERO TITLE SECTION */}
                <div 
                    className={`text-center mb-5 p-4 p-md-5 rounded-4 border  shadow-sm ${isMounted ? 'anim-fade-in' : ''}`}
                    style={{ 
                        background: "linear-gradient(135deg, #e1f2e5 0%, #f7f4e9 100%)",
                        borderColor: "rgba(25, 135, 84, 0.15)",
                       
                    }}
                >
                    <h1 className="display-4 fw-extrabold mb-3 text-success" >
                        Your Neighborhood, Now Online
                    </h1>
                    <p className="mx-auto fs-5 lh-lg fw-medium" style={{ maxWidth: "750px", color: "#2c3530" }}>
                        An online marketplace that connects customers with nearby kirana stores — 
                        making grocery shopping faster, easier, and more convenient while supporting local shopkeepers.
                    </p>
                </div>

                {/* OFFER & CHOOSE US SECTION */}
                <div 
                    className={`row g-4 justify-content-center mb-5 ${isMounted ? 'anim-fade-in' : ''}`}
                    style={{ animationDelay: '150ms' }}
                >
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="bg-white p-4 h-100 rounded-4 border custom-hover-card shadow-sm" style={{ borderLeft: "6px solid #ffe430" }}>
                            <h4 className="fw-extrabold text-dark mb-4 text-center">What We Offer</h4>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 fw-medium text-dark">
                                <li><FaCheck className="me-2 text-success" /> Browse products from nearby shops</li>
                                <li><FaCheck className="me-2 text-success" /> Compare prices across stores</li>
                                <li><FaCheck className="me-2 text-success" /> Online ordering & home delivery</li>
                                <li><FaCheck className="me-2 text-success" /> Fresh grocery products</li>
                                <li><FaCheck className="me-2 text-success" /> Multi-shop support</li>
                                <li><FaCheck className="me-2 text-success" /> Secure checkout process</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="bg-white p-4 h-100 rounded-4 border custom-hover-card shadow-sm" style={{ borderLeft: "6px solid #ffe430" }}>
                            <h4 className="fw-extrabold text-dark mb-4 text-center">Why Choose Us</h4>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 fw-medium text-dark">
                                <li><FaCheck className="me-2 text-success" /> Support local businesses</li>
                                <li><FaCheck className="me-2 text-success" /> Faster delivery than marketplaces</li>
                                <li><FaCheck className="me-2 text-success" /> Fresh & quality products</li>
                                <li><FaCheck className="me-2 text-success" /> Easy-to-use interface</li>
                                <li><FaCheck className="me-2 text-success" /> Trusted local vendors</li>
                                <li><FaCheck className="me-2 text-success" /> Competitive pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* VISION & MISSION SECTION */}
                <div 
                    className={`row g-4 justify-content-center mb-5 ${isMounted ? 'anim-fade-in' : ''}`}
                    style={{ animationDelay: '300ms' }}
                >
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="bg-white p-4 h-100 rounded-4 border custom-hover-card shadow-sm" style={{ borderLeft: "6px solid #ffe430" }}>
                            <h3 className="h4 fw-extrabold text-dark text-center mb-3">Our Vision</h3>
                            <p className="text-secondary fw-medium lh-base mb-0">
                                Digitally empower local shopkeepers and help customers access daily essentials from trusted neighborhood stores with just a few clicks.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="bg-white p-4 h-100 rounded-4 border custom-hover-card shadow-sm" style={{ borderLeft: "6px solid #ffe430" }}>
                            <h3 className="h4 fw-extrabold text-dark text-center mb-3">Our Mission</h3>
                            <p className="text-secondary fw-medium lh-base mb-0">
                                Bridge the gap between local retailers and customers through technology, creating a convenient shopping experience for everyone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CUSTOMER SATISFACTION BOX */}
                <div 
                    className={`bg-white border rounded-4 p-4 p-md-5 shadow-sm mx-auto mb-5 ${isMounted ? 'anim-fade-in' : ''}`}
                    style={{ maxWidth: "920px", animationDelay: '450ms' }}
                >
                    <h3 className="h4 fw-extrabold text-dark text-center mb-4">Customer Satisfaction</h3>
                    <div className="text-secondary fw-medium lh-lg d-flex flex-column gap-3 fs-6">
                        <p className="mb-0">
                            Customer satisfaction is our top priority. We work closely with local vendors to ensure quality products, timely delivery, and excellent service. Every order is handled with care to provide the best shopping experience possible.
                        </p>
                        <p className="mb-0">
                            At LocalShop, customer happiness drives everything we do. We strive to offer fresh products, quick service, and a seamless shopping experience. By partnering with trusted local stores, we ensure quality, reliability, and convenience.
                        </p>
                    </div>
                </div>

                {/* ANIMATED STATS COUNT GRID */}
                <div 
                    className={`row g-3 justify-content-center text-center ${isMounted ? 'anim-fade-in' : ''}`}
                    style={{ animationDelay: '600ms' }}
                >
                    <div className="col-6 col-sm-3 col-md-3 col-lg-2">
                        <div className="p-3 bg-white border rounded-3 shadow-sm stat-card">
                            <h2 className="fw-extrabold text-success mb-1">
                                {isMounted ? <AnimatedNumber value="500+" /> : "0+"}
                            </h2>
                            <p className="text-dark small mb-0 fw-bold">Products</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 col-lg-2">
                        <div className="p-3 bg-white border rounded-3 shadow-sm stat-card">
                            <h2 className="fw-extrabold text-success mb-1">
                                {isMounted ? <AnimatedNumber value="50+" /> : "0+"}
                            </h2>
                            <p className="text-dark small mb-0 fw-bold">Local Stores</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 col-lg-2">
                        <div className="p-3 bg-white border rounded-3 shadow-sm stat-card">
                            <h2 className="fw-extrabold text-success mb-1">
                                <AnimatedNumber value="24/7" />
                            </h2>
                            <p className="text-dark small mb-0 fw-bold">Support</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 col-lg-2">
                        <div className="p-3 bg-white border rounded-3 shadow-sm stat-card">
                            <h2 className="fw-extrabold text-success mb-1">
                                {isMounted ? <AnimatedNumber value="1K+" /> : "0+"}
                            </h2>
                            <p className="text-dark small mb-0 fw-bold">Happy Users</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}