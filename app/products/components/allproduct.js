"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function AllProduct() {
   const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Maggie",
      image: "/maggie.webp",
      price: 30,
    },
    {
      id: 2,
      name: "Noodles",
      image: "/noodles.webp",
      price: 15,
    },
    {
      id: 3,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
    {
      id: 4,
      name: "Mixture",
      image: "/mixture.webp",
      price: "₹60",
    },
    {
      id: 5,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
    {
      id: 6,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
    {
      id: 7,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
    {
      id: 8,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
    {
      id: 9,
      name: "Mixture",
      image: "/mixture.webp",
      price: 60,
    },
  ];

  return (
    <>
      <div className="container-fluid text-center text-success">
        <h3 className="fw-bold p-5" style={{fontSize:"29px"}}>
          AT OUR STORE, CUSTOMER SATISFACTION IS OUR HIGHEST PRIORITY...
        </h3>

      </div>

<div className="container">
       <h1 className="bg bg-warning text-center text-white m-4">NAMKEEN : <span className="text-success">THAT YOU LOVE MOST</span ></h1>
  <div className="row">
    {products.map((product) => (
      <div className="col-md-4 mb-4" key={product.id}>
        <div className="card h-100">
          <Image
            src={product.image}
            className="card-img-top"
            alt={product.name}
            height={200}
            width={200}
          />

          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>

            <button className="btn btn-primary"
            onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>    </>
  );
}