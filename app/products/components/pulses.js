"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";


export default function Pulses() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "PULSES",
      image: "/pulses/pulse7.jpg",
      price: 130,
    },
    {
      id: 2,
      name: "PULSES",
      image: "/pulses/pulse6.jpg",
      price: 115,
    },
    {
      id: 3,
      name: "TOR KI DAAL",
      image: "/pulses/pulse1.jpg",
      price:190,
    },
    {
      id: 4,
      name: "PULSES",
      image: "/pulses/pulse2.jpg",
      price: 130,
    },
    {
      id: 5,
      name: "PULSES",
      image:"/pulses/pulse3.jpg",
      price:190,
    },
    {
      id: 6,
      name: "PULSES",
      image: "/pulses/pulse4.jpg",
      price: 160,
    },
    {
      id: 7,
      name: "PULSES",
      image: "/pulses/pulse5.jpg",
      price: 140 ,
    },
    {
      id: 8,
      name: "PULSES",
      image: "/pulses/pulse6.jpg",
      price: 160 ,
    },
    {
      id: 9,
      name: "PULSES",
      image: "/pulses/pulse7.jpg",
      price: 100,
    },
  ];

  return (
    <>
      

<div className="container">
    <h1 className="bg bg-SUCCESS text-center text-white m-4">PULSE :<span className="text-success"> WORLDS TOP QUALITY GROCERY IS HERE!</span ></h1>
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

            <button className="btn btn-primary" onClick={() => addToCart(product)}>
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