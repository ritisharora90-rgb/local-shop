"use client";
import { useCart } from "@/context/CartContext";
import Image from   "next/image"



export default function Groceries() {
   const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "AMUL GHEE",
      image: "/diary/diary4.jpg",
      price: 30,
    },
    {
      id: 2,
      name: "CURD",
      image: "/diary/diary2.jpg",
      price: 15,
    },
    {
      id: 3,
      name: "AMUL CHEESE",
      image: "/diary/diary6.jpg",
      price: 50,
    },
    {
      id: 4,
      name: "AMUL MILK",
      image: "/diary/diary1.jpg",
      price: 30,
    },
    {
      id: 5,
      name: "AMUL GHEE",
      image:"/diary/diary5.jpg",
      price: 190,
    },
    {
      id: 6,
      name: "AMUL GHEE",
      image: "/diary/diary4.jpg",
      price: 60,
    },
    {
      id: 7,
      name: "AMUL  DAHI",
      image: "/diary/diary3.jpg",
      price: 40,
    },
    {
      id: 8,
      name: "AMUL GHEE",
      image: "/diary/diary4.jpg",
      price: 60,
    },
    {
      id: 9,
      name: "AMUL CURD",
      image: "/diary/diary2.jpg",
      price: 30,
    },
  ];

  return (
    <>
      

<div className="container">
    <h1 className="bg bg-warning text-center text-white m-4">GROCERY :<span className="text-success"> WORLDS TOP QUALITY GROCERY IS HERE!</span ></h1>
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

            <button className="btn btn-primary"   onClick={() => addToCart(product)}>
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