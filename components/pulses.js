'use client';
import Image from 'next/image';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const pulseProduct = [
  { id: "p1", name: "Pulses", price: 50, image: "/pulses/pulse1.jpg", desc: "Eat pure ,Stay healthy" },
  { id: "p2", name: "Pulses", price: 30, image: "/pulses/pulse2.jpg", desc: "Eat pure, Stay healthy" },
  { id: "p3", name: "Pulses", price: 89, image: "/pulses/pulse3.jpg", desc: 'Eat pure, Stay healthy' },
  { id: "p4", name: "pulses", price: 69, image: "/pulses/pulse4.jpg", desc: "Eat pure, Stay healthy" },
  { id: "p5", name: "Pulses", price: 44, image: "/pulses/pulse5.jpg", desc: "Eat pure, Stay healthy" },
  { id: "p6", name: "Pulses", price: 88, image: "/pulses/pulse6.jpg", desc: "Eat pure, Stay healthy" }
]

export default function Pulses() {
  const { addToCart } = useCart();
  const slides = [pulseProduct.slice(0, 3), pulseProduct.slice(3, 6)];
  const router = useRouter();

  return (
    <>
      <div
        className="m-5 bg-dark text-white"
        style={{ fontSize: "33px", border: "2px solid black", borderRadius: "10px", padding: "15px", display: "inline-block" }}
      >
        PULSE PRODUCTS
      </div>

      <div id="productPulse" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner px-5" >

          {slides.map((productsGroup, slideIndex) => (
            <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
              <div className="row">

                {productsGroup.map((product) => (
                  <div key={product.id} className="col-12 col-sm-6 col-md-4">
                    <Image src={product.image} width={300} height={300} alt={product.name} className='ms-5' />
                    <h3 className="ps-3 ms-5">{product.name}</h3>
                    <p className="ps-3 ms-5" style={{ fontSize: "15px" }}>{product.desc}</p>

                    <div className='d-flex flex-column  justify-content-center align-items-center ms-1 '>
                      {/* 3. Attach the click event handler */}
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

        {/* Carousel Controls */}
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