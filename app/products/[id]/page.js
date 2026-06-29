"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductPage(props) {

    const params = use(props.params);
    const router = useRouter();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProduct() {

            try {

                const res =
                    await fetch(
                        `https://local-shop-admin.onrender.com/api/products/${params.id}`
                    );

                if (!res.ok) {
                    throw new Error(
                        "Failed to fetch"
                    );
                }

                const data =
                    await res.json();

                // Convert Laravel storage path to full URL
                if (
                    data.image &&
                    !data.image.startsWith("http")
                ) {
                    data.image =
                        `https://local-shop-admin.onrender.com/storage/${data.image}`;
                }

                console.log(data);

                setProduct(data);

            } catch (err) {

                console.log(
                    "Error:",
                    err
                );

            } finally {

                setLoading(false);

            }

        }

        fetchProduct();

    }, [params.id]);



    if (loading) {
        return (
            <div className="container py-5 text-center">
                Loading...
            </div>
        );
    }



    if (!product) {
        return (
            <div className="container py-5 text-center">

                <h3>
                    Product Not Found
                </h3>

                <Link href="/">
                    Back
                </Link>

            </div>
        );
    }



    const productId =
        product._id ||
        product.id;



    return (

        <section className="py-5 bg-light min-vh-100">

            <div className="container bg-white rounded-4 shadow p-5">

                <Link
                    href="/"
                    className="text-success text-decoration-none"
                >
                    ← Back
                </Link>


                <div className="row mt-4">

                    {/* IMAGE */}

                    <div className="col-md-6">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded"
                            style={{
                                maxHeight: "400px",
                                width: "100%",
                                objectFit: "contain"
                            }}
                        />

                    </div>



                    {/* DETAILS */}

                    <div className="col-md-6">

                        <h1>
                            {product.name}
                        </h1>

                        <h2>
                            ₹{product.price}
                        </h2>

                        <p>
                            {
                                product.description
                                ||
                                "No description"
                            }
                        </p>


                        <div className="d-flex gap-3">

                            <button
                                className="btn btn-outline-success"
                                onClick={() => {

                                    addToCart(
                                        product
                                    );

                                    alert(
                                        `${product.name} added`
                                    );

                                }}
                            >
                                Add To Cart
                            </button>


                            <button
                                className="btn btn-success"
                                onClick={() =>
                                    router.push(
                                        `/checkout/${productId}`
                                    )
                                }
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}