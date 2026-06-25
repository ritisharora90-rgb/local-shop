"use client"; // 👈 Crucial: This must be at the very top to allow onClick listeners

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext"; // 👈 Import your cart context hook

export default function ProductPage(props) {
    // Safe param unwrapping for your Next.js setup
    const params = use(props.params);
    const router = useRouter();
    const { addToCart } = useCart(); // 👈 Destructure the action here

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch product information inside the browser environment
    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(  `https://local-shop-admin.onrender.com/api/products/${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [params.id]);

    if (loading) {
        return (
            <div className="container py-5 text-center min-vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-success" role="status"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-danger fw-bold">Product Not Found</h3>
                <Link href="/" className="btn btn-success mt-3 text-decoration-none">
                    Back to Shop
                </Link>
            </div>
        );
    }

    // Handle cross-platform tracking for local array mock definitions vs live MongoDB string variations
    const productId = product._id || product.id;

    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container bg-white rounded-4 shadow-sm p-4 p-md-5" style={{ maxWidth: "1140px" }}>

                <Link
                    href="/"
                    className="text-success p-0 mb-4 text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold transition-link"
                >
                    ← Back to Essentials
                </Link>

                <div className="row g-5">
                    {/* Image Box */}
                    <div className="col-12 col-md-6">
                        <div className="bg-light rounded-4 d-flex justify-content-center align-items-center p-4 p-lg-5 sticky-md-top" style={{ top: "30px", minHeight: "420px" }}>
                            <img
                                src={product.image || product.image_url}
                                alt={product.name}
                                className="img-fluid object-fit-contain img-hover-zoom"
                                style={{ maxHeight: "340px", width: "auto" }}
                            />
                        </div>
                    </div>

                    {/* Product Details info column */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                        <div>
                            <span className="badge bg-success-subtle text-success mb-2 px-3 py-2 rounded-pill fw-semibold">
                                In Stock & Fresh Daily
                            </span>
                            <h1 className="fw-bold display-6 mb-2 text-dark">{product.name}</h1>
                            <div className="d-flex align-items-baseline gap-2 mb-4">
                                <span className="fs-1 fw-bold text-dark">₹{product.price}</span>
                                <span className="text-muted small">(Inclusive of all taxes)</span>
                            </div>
                            <hr className="text-muted opacity-25 my-4" />
                            <h5 className="fw-bold text-secondary mb-2 fs-6 uppercase tracking-wider">Product Description</h5>
                            <p className="text-muted leading-relaxed fs-6">
                                {product.description || product.desc || "Sourced fresh directly for your household grocery essentials."}
                            </p>
                        </div>

                        {/* Actions Section */}
                        <div className="mt-5">
                            <div className="row g-3">
                                <div className="col-6">
                                    {/* Fixed Click Event: Wraps code in a function callback definition */}
                                    <button
                                        className="btn btn-outline-success w-100 py-3 fw-bold rounded-3 transition-btn"
                                        onClick={() => { 
                         
                          addToCart(product); 
                          alert(`Added ${product.name} to cart!`);
                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        className="btn btn-success w-100 py-3 fw-bold rounded-3 shadow-sm transition-btn"
                                        onClick={() => router.push(`/checkout/${productId}`)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
        .bg-success-subtle {
          background-color: #dcfce7 !important;
          color: #166534 !important;
        }
        .img-hover-zoom {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .img-hover-zoom:hover {
          transform: scale(1.06);
        }
        .transition-link:hover {
          color: #15803d !important;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }
        .transition-btn {
          transition: all 0.2s ease-in-out;
        }
        .transition-btn:hover {
          transform: translateY(-2px);
        }
        .rounded-4 {
          border-radius: 24px !important;
        }
      `}</style>
        </section>
    );
}