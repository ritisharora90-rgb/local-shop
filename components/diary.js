"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


const diaryProducts = [
  { id: "d1", name: "Amul Milk Premium", price: 30, image: "/diary/diary1.jpg", desc: "🥛 Pure Milk, Pure Goodness" },
  { id: "d2", name: "Amul Taaza", price: 27, image: "/diary/diary2.jpg", desc: "🥛 Fresh and Pasteurized" },
  { id: "d3", name: "Amul Gold", price: 33, image: "/diary/diary3.jpg", desc: "🥛 High Fat Creamy Milk" },
  { id: "d4", name: "Amul Cow Milk", price: 28, image: "/diary/diary4.jpg", desc: "🥛 Light and Nutritious" },
  { id: "d5", name: "Amul Slim & Trim", price: 32, image: "/diary/diary5.jpg", desc: "🥛 Zero Fat Fitness Choice" },
  { id: "d6", name: "Amul Buffalo Milk", price: 35, image: "/diary/diary6.jpg", desc: "🥛 Rich Thick Taste" },
];

export default function DiaryPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  // Helper chunking array logic to split products into rows of 3 for the carousel slides
  const slides = [diaryProducts.slice(0, 3), diaryProducts.slice(3, 6)];

  return (
    <>
      <div
        className="m-5 bg-dark text-white"
        style={{ fontSize: "33px", border: "2px solid black", borderRadius: "10px", padding: "15px", display: "inline-block" }}
      >
        DAIRY PRODUCTS
      </div>

      <div id="productDiary" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ padding: "0px 50px" }}>

          {slides.map((productsGroup, slideIndex) => (
            <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
              <div className="row">

                {productsGroup.map((product) => (
                  <div key={product.id} className="container-fluid col-12 col-sm-6 col-md-4 col-lg-3">
                    <Image src={product.image} width={300} height={300} alt={product.name} />
                    <h3 className="ps-3">{product.name}</h3>
                    <p className="ps-3" style={{ fontSize: "15px" }}>{product.desc}</p>

                    <div className='d-flex flex-column  justify-content-center align-items-center ms-1 '>
                      {/* 3. Attach the click event handler */}
                      <button
                        className="btn btn-outline-primary rounded  w-100 mb-2"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                      <button
                        className="mb-2 btn btn-outline-success rounded w-100"
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