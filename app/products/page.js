'use client';

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {

  const router = useRouter();

  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();

  useEffect(() => {

    async function getProducts() {

      try {

        const res = await fetch(
          "https://local-shop-kappa.vercel.app/api/products",
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    }

    getProducts();

  }, []);

  return (

    <div className="container">

      <h1 className="my-4">
        Products
      </h1>

      <div className="row">

        {
          products?.map((product) => (

            <div
              key={product._id}
              className="col-md-4 mb-4"
            >

              <div className="card h-100">

                {
                  product.image && (

                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        height: "250px",
                        objectFit: "cover"
                      }}
                    />

                  )
                }

                <div className="card-body">

                  <h4>
                    {product.name}
                  </h4>

                  <p>
                    ₹{product.price || "N/A"}
                  </p>

                  <p>
                    {product.description}
                  </p>

                  <button
                    className="btn btn-dark"
                    onClick={() => addToCart(product)}
                  >

                    <FaShoppingCart />
                    {" "}Add To Cart

                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}