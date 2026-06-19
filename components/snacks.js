'use client';

import Image from 'next/image';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const snacksProduct = [
  { id: "s1", name: "Snacks", image: "/snacks/snacks2.avif", price: 77, desc: "Always Eat Healthy" },
  { id: "s2", name: "Snacks", image: "/snacks/snacks1.avif", price: 69, desc: "Always Eat Healthy" },
  { id: "s3", name: "Snacks", image: "/snacks/snacks3.avif", price: 99, desc: "Always Eat Healthy" },
  { id: "s4", name: "Snacks", image: "/snacks/snacks4.jpg", price: 88, desc: "Always Eat Healthy" },
  { id: "s5", name: "Snacks", image: "/snacks/snacks5.jpg", price: 83, desc: "Always Eat Healthy" },
  { id: "s6", name: "Snacks", image: "/snacks/snacks6.jpg", price: 33, desc: "Always Eat Healthy" }
]


export default function Snacks() {
  const { addToCart } = useCart();
  const slides = [snacksProduct.slice(0, 3), snacksProduct.slice(3, 6)];

  const router = useRouter();
  return (
    <>
      <div className="m-5 bg-dark text-white"
        style={{ fontSize: "33px", border: " 2px solid black", borderRadius: "10px", padding: "15px", display: "inline-block" }}
      >SNACKS PRODUCTS</div>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner px-5 " >

          {slides.map((productsGroup, slideIndex) => (
            <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
              <div className='row '>
                {productsGroup.map((product) => (
                  <div key={product.id} className='col-12 col-sm-6 col-md-4  '>
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={300}
                      width={300}
                      className='ms-5'

                    />
                    <h3 className='ps-3 ms-5'>{product.name}</h3>
                    <p className='ps-3 ms-5' style={{ fontSize: "20px" }}> Only {product.price} ruppess</p>
                    <p className='ps-3 ms-5' style={{ fontSize: "15px" }}> {product.desc}</p>
                    <div className='d-flex flex-column  justify-content-center align-items-center mb-3'>
                      <button
                        className="btn btn-outline-primary rounded w-75 "
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                      <button
                        className="mt-2 btn btn-outline-success w-75"
                        onClick={() =>
                          router.push(
                            `/checkout/${product._id}`
                          )
                        }
                      >Buy Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          ))}





        </div>

         <button className="carousel-control-prev d-flex
          justify-content-center
              align-items-center" type="button" data-bs-target="#productPulse" data-bs-slide="prev"
          style={{ filter: "invert(1)", width: "45px", height: "100%" }}
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next d-flex justify-content-center align-items-center" type="button" data-bs-target="#productPulse" data-bs-slide="next"
          style={{ filter: "invert(1)",width: "45px", height: "100%"  }}
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}