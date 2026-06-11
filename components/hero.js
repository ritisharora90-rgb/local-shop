'use client';


import Image from 'next/image';

export default function hero() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner mt-4">
        <div className="carousel-item active">
          <Image
            src="/noodles.webp"
            alt="Maggie"
            width={1200}
            height={500}
            className="d-block w-75 mx-auto"
          />
        </div>

        <div className="carousel-item">
          <Image
            src="/bottles.jpg"
            alt="Mixture"
            width={1200}
            height={500}
            className="d-block w-75 mx-auto rounded"
          />
        </div>

        <div className="carousel-item">
          <Image
            src="/amulcheese.jpg"
            alt="Oil"
            width={1200}
            height={500}
            className="d-block w-75 mx-auto"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        style={{ filter: "invert(1)" }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        style={{ filter: "invert(1)" }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}